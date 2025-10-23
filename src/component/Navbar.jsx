import { NavLink } from "react-router";
import '../css/navbar.css';

export default function Navbar() {
    return(
        <nav>
            <div className="navigation 1">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <figure>
                <img src="./billeder/navbar-1.svg" alt="" />
            </figure>

            <div className="navigation 2">
                <NavLink to="/projects">Cases</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <figure>
                <img src="./billeder/navbar-2.svg" alt="" />
            </figure>
        </nav>
    );
}
