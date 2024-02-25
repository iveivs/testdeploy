import { Link } from "react-router-dom";


export default function Header() {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <ul>
                    <li></li>
                    <Link to="/"><h4 className="logo">LOGO</h4></Link>
                    
                </ul>
                <ul className="right">
                    <li className="listItem" >
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/new">ExampleB</Link>
                    </li>
                    <li>
                        <Link to="/done">ExampleC</Link>
                    </li>  
                </ul>
                
            </div>
        </nav>
    );
}

