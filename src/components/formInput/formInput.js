import React, {useState} from "react";
import "./formInput.css";

const FormInput = (props) => {
    
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        props.onSearch(event.target.value); 
    };
    const handleAddUser = (event) => {
        event.preventDefault();
        props.onAdd(); 
      };

    return (
        <div>
            <form>
                <div className="center-text">
                    <p className="label">TotalPassword:{props.totalPasswords}</p>
                    <button onClick={handleAddUser}>Add New User</button><br/>
                    <label htmlFor="search">Search:</label>
                    <input id="search" type="text" value={searchQuery} onChange={handleSearchChange}/><br/>
                </div>
            </form>
        </div>
    );
};

export default FormInput;
