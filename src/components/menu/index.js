import "./index.css";
import { Link, useLocation } from "react-router-dom";
import usuarioService from "../../services/usuario-service";

export default function Menu(){
    const logout = () => {
        usuarioService.sairDoSistema();
    };

    if(useLocation().pathname !== "/"){
        return(
            <ul className="menu">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/clientes'>Clientes</Link></li>
                <li><Link onClick={logout}>Sair</Link></li>
            </ul>
        )
    }else{
        return null; // Retorno nada par ao compoenten renderizar no DOM.
    }

}
