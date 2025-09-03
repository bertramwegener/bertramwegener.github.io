import { NavLink } from "react-router";

export default function Navbar() {
    return(
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/project">Project</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}
