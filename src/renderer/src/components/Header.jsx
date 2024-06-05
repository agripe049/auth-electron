import { Link } from "react-router-dom";

function Header() {
    return <>
        <Link to="/register">Register</Link>
        <Link to="/">Login</Link>
    </>;
}

export default Header;