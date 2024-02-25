import { Link } from "react-router-dom";


export default function Header() {
    return (
        <nav className="blue-grey darken-1">
            <div className="nav-wrapper">
                <div>
                    <Link to="/"><h4 className="logo">LOGO</h4></Link>
                    
                </div>
                <ul className="right">
                    <li className="listItem" >
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/new">Новые</Link>
                    </li>
                    <li>
                        <Link to="/done">Завершённые</Link>
                    </li>  
                </ul>
                
            </div>
        </nav>
    );
}

