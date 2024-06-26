import "./index.css";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navBar">
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }>
                        Home
                    </NavLink>
                    <NavLink 
                        to="/Projects"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }>
                        Projects
                    </NavLink> 
                    <NavLink 
                        to="/Hobbies"
                        className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                        }>
                        Hobbies
                    </NavLink>
                </nav> 
        </header>
    );
}

export default Header;