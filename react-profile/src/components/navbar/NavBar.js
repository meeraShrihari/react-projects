import React, {useState} from "react";
import { MenuList } from "./MenuList";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({title, url}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName="active">
                    {title}
                </NavLink>
            </li>
        );
    })

    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <nav>
            <div className="logo">
                Meera<font> Bhaskaran</font>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>
                {menuList}
            </ul>
        </nav>
    )
}

export default NavBar;