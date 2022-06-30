import React from "react";
import { useUserContext } from "../context/userContext";
import "./header.css";

const Header = () => {
    const {user, logout} = useUserContext();
    return (
        <div className="ui fixed menu">
            <div className="ui container center"  style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h2>React ContextApi</h2>
                <div className="profile" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{marginRight: "10px"}}>
                    <h3>Welcome, {user.name}</h3>
                    </div>
                    {!user.isGuestUser && (
                        <button className="ui button blue" onClick={logout}>LogOut</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;