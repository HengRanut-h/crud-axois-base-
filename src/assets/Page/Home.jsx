
import {Outlet} from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div>

            <div>
                <nav className="navbar">
                    <h2 className="navbar-logo">Student App</h2>

                    <ul className="navbar-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/ListStudent">Students</a></li>
                        <li><a href="/">Create Student</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default Home
