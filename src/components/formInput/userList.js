import React, { useState } from "react";

const UserList = (props) => {
  const [editData, setEditData] = useState({
    id: null,
    newTitle: "",
    newPassword: "",
  });

  const deleteUser = (id) => {
    props.onDelete(id);
  };

  const editUser = (id) => {
    props.onEdit(id, editData.newTitle, editData.newPassword);
    setEditData({ id: null, newTitle: "", newPassword: "" });
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.id === editData.id ? (
            <div>
              <input
                type="text"
                name="newTitle"
                value={editData.newTitle || user.title} // Use user's current title as default value
                onChange={handleEditChange}
              />
              <input
                type="text"
                name="newPassword"
                value={editData.newPassword || user.password} // Use user's current password as default value
                onChange={handleEditChange}
              />
              <button onClick={() => editUser(user.id)}>Confirm</button>
            </div>
          ) : (
            <div>
              {user.title} {user.password}
              <button onClick={() => deleteUser(user.id)}>delete</button>{" "}
              <button onClick={() => setEditData({ id: user.id })}>Edit</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
