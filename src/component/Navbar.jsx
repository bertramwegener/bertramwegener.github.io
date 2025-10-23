import { NavLink } from "react-router";
import '../css/navbar.css';

export default function Navbar() {
    return(
        <nav>
            <figure>
                <img src="./billeder/navbar-1.svg" alt="" />

                <div className="navigation nav1">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/About">About</NavLink>
                </div>
            </figure>

            <figure>
                <img src="./billeder/navbar-2.svg" alt="" />

                <div className="navigation nav2">
                    <NavLink to="/Projects">Cases</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                </div>
            </figure>
        </nav>
    );
}
