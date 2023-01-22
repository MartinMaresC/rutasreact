import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Home</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>;
}

export default Layout;