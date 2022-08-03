import React, { useState } from "react";
import { createActivity } from "../api";
import { getCurrentData } from '../utils/auth'

const createAnActivity = (props) => {
    const token = getCurrentData("token")
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    async function handleSubmit(event){
        event.preventDefault();
        await createActivity (name, description, token)
        setName('')
        setDescription('')
        
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

export default createAnActivity