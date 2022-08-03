import React from "react";
import { deleteRoutine } from "../api";
import { getCurrentData } from "../utils/auth";

const DeleteButton = (props) => {
    const {routineId} = props
    const token = getCurrentData("token");

  async function handleClick(event) {
    event.preventDefault();
    await deleteRoutine(token, routineId);
  }

  return (
    <button onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteButton;