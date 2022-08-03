import React, { useState } from "react";
import { createActivity } from "../api";
import { getCurrentData } from '../utils/auth'

const CreateActivities = (props) => {
    const token = getCurrentData("token");
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");


    async function handleSubmit(event){
        event.preventDefault();
        const activities = await createActivity (name, description, token)
        setName('')
        setDescription('')
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
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}>
                    </input>
                </label>
                <button type="submit">
                    Create Activity
                </button>
            </form>
        </div>
    )
}

export default CreateActivities