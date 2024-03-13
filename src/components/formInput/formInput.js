import React, {useState} from "react";
import "./formInput.css";

const FormInput = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredPassword,setEnteredPassword] = useState('');

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredTitle.trim().length === 0 || enteredPassword.trim().length === 0) {
            alert('Please fill all the fields');
            return;
        }
        
        props.onAddUser(enteredTitle,enteredPassword);
        setEnteredTitle('');
        setEnteredPassword('');
    };
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };
    const passwordChangeHandler = (event) =>{
        setEnteredPassword(event.target.value);
    };

    return (
        <div>
            <form onSubmit={addUserHandler}>
                <div className="center-text">
                    <p className="label">TotalPassword:{props.totalPasswords}</p>
                    <label htmlFor="search">Search:</label>
                    <input id="search" type="text"/><br/>
                </div>
                
                <label htmlFor="title">Title:</label>
                <input id="title" type="text" value={enteredTitle} onChange={titleChangeHandler}/><br/>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={enteredPassword} onChange={passwordChangeHandler}/><br/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default FormInput;
