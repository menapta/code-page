import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation(); // Pega a rota atual

    return (
        <ul className="nav-box-ul"> {/* Adicione a classe aqui */}
            <li>
                <Link 
                    to="/" 
                    className={location.pathname === "/" ? "active" : ""}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    to="/contact" 
                    className={location.pathname === "/contact" ? "active" : ""}
                >
                    Contato
                </Link>
            </li>
            <li>
                <Link 
                    to="/projects" 
                    className={location.pathname === "/projects" ? "active" : ""}
                >
                    Projetos
                </Link>
            </li>
        </ul>
    );
}

export default Nav;
