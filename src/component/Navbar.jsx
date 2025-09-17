import { NavLink } from "react-router";

export default function Navbar() {
    return(
        <nav>
            <div className="navigation 1">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/project">Project</NavLink>
            </div>

            <div className="navigation 2">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    );
}
