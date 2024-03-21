import React, { useState } from "react";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredTitle.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      alert("Please fill all the fields");
      return;
    }

    props.onAddUser(enteredTitle, enteredPassword);
    props.onClose();
    setEnteredTitle("");
    setEnteredPassword("");
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <Modal>
      <form onSubmit={addUserHandler}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <br />
        <button type="submit">Add</button> 
        <button onClick={props.onClose}>Close</button>
      </form>
    </Modal>
  );
};

export default AddUser;
