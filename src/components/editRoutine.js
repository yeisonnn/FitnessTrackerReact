import React, { useState } from "react";
import { editRoutine } from "../api";
import { getCurrentData } from '../utils/auth'

const EditRoutine = (props) => {
    const {routineId} = props
    const token = getCurrentData("token");
    const [name, setName] = useState("")
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false)

    


    async function handleSubmit(event){
        event.preventDefault();
        const activities = await editRoutine (name, goal, isPublic, routineId, token)
        setName('')
        setGoal('')
        console.log(activities, "This is submitted activities")
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}>
                    </input>
                </label>
                <label>
                    <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)}>
                    </input>
                </label>
                <button type="submit">
                    Edit Routine
                </button>
            </form>
        </div>
    )
}

export default EditRoutine