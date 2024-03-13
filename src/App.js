import "./App.css";
import React, { useState } from "react";
import FormInput from "./components/formInput/formInput";
import UserList from "./components/formInput/userList";

function App() {
  const [usersList,setUsersList] = useState([]);
  const addUserHandler = (uTitle,uPassword) =>{
    setUsersList((prevList) =>{
      return [...prevList,{title: uTitle, password: uPassword, id: Math.random().toString() },
      ]
    });
  };
  const deleteUserHandler = (userId) => {
    setUsersList((prevList) => {
      return prevList.filter((user) => user.id !== userId);
    });
  };

  const editUserHandler = (userId, newTitle, newPassword) => {
    setUsersList((prevList) => {
      return prevList.map((user) => {
        if (user.id === userId) {
          return { ...user, title: newTitle, password: newPassword };
        }
        return user;
      });
    });
  };

  return (
    <div>
      <h2 className="center">Password Keeper</h2>
      <FormInput onAddUser={addUserHandler} totalPasswords={usersList.length} />
      <h3>All Passwords</h3>
      <UserList
        users={usersList}
        onDelete={deleteUserHandler}
        onEdit={editUserHandler}
      />
    </div>
  );
}

export default App;
