import React from "react";
import HOC from "./HOC";

const UsersList = ({ data }) => {
    
    const renderUser = data.map(user => {
        return (
            <div key={user.id}>
                <p style={{textAlign: "left"}}>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    });

    return (
        <div>
            <div>{ renderUser}</div>
        </div>
    )
}

const SearchUsers = HOC(UsersList, "users");
export default SearchUsers;