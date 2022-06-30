import React from "react";
import { useUserContext } from "../context/userContext";

const Home = () => {
    const {user, logout} = useUserContext();
    return (
        <div className="ui container center" 
            style={{
                position: "relative", 
                top: "100px",
            }}
        >
            <div className="home-profile" style={{width: "70%"}}>
                <div className="ui message success">
                    <h3>You are now logged in as , {user.name}</h3>
                    {!user.isGuestUser && (
                        <button className="ui button blue" onClick={logout}>LogOut</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;