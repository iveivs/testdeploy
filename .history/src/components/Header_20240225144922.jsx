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
                        <Link style={{fontSize: '20px'}} to="/">Главная</Link>
                    </li>
                    <li>
                        <Link style={{fontSize: '20px'}} to="/new">Новые</Link>
                    </li>
                    <li>
                        <Link style={{fontSize: '20px'}} to="/done">Завершённые</Link>
                    </li>  
                </ul>
                
            </div>
        </nav>
    );
}

// export default function Header() {
//     document.addEventListener('DOMContentLoaded', function() {
//         const elems = document.querySelectorAll('.sidenav');
//         var instances = M.Sidenav.init(elems, options);
//     });
    
//     return (
//         <>
//             <nav>
//                 <div className="nav-wrapper">
//                     <a href="#!" className="brand-logo">Logo</a>
//                     <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
//                     <ul className="right hide-on-med-and-down">
