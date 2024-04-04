import "./login.css";
import fundo from "../../assets/logo_unifaa_branca.png";
import { useState } from "react";
import Swal from "sweetalert2";
import usuarioService from "../../services/usuario-service";
// import { useLocation } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // const navigate = useLocation();


    const autenticar = () => {

        // Aqui tenho que me comunicar com o backend.
        usuarioService
        .autenticar(email, senha)
        .then(response => {
            usuarioService.salvarToken(response.data.token);
            usuarioService.salvarUsuario(response.data.usuario);
            window.location = "/home";
        })
        .catch(erro => {
            // Fazer alguma coisa em caso de erro
			if(!email || !senha){
			   Swal.fire({
				icon: 'error',
				text: "Os campos de e-mail e senha são obrigatórios, verifique!"
				});
			}else if(email !== "admin@admin.com" && senha != "123456"){
				Swal.fire({
				 icon: 'error',
				 text: "Email ou Senha incorretos!"
				});
			};
        	});
    };



	const esconder = () =>{
		let iconeT = document.getElementById("trancado");
		let ver = document.getElementById("senha");
		iconeT.style.display = "block";
		ver.type = "password";

	}

	const mostrar = () => {
		let iconeT = document.getElementById("trancado");
		let ver = document.getElementById("senha");
		iconeT.style.display = "none";
		ver.type = "text";

	}


	return (

	  <div className="App">
	  <div className="overall">
		  <div className="caixa-login">
			  {/*- Titulo da tela de login --*/}
			  <div className="titulo-login">
				  <h1 id="titulo">Login</h1>
			  </div>

			  {/*- Grupo do email --*/}
			  <div className="grupo">
				  <input id="email" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail"/>
				  <i className='bx bxs-envelope' id = "iemail"></i>
			  </div>

			  {/*- Grupo do senha -*/}
			  <div className="grupo" id = "csenha">
				  <input id="senha" onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Digite sua senha"/>

				  <ion-icon name="lock-open" id="aberto" onClick={esconder}></ion-icon>
				  <ion-icon name="lock-closed" id="trancado" onClick={mostrar}></ion-icon>

			  </div>

			  {/*- Link para recuperar a senha -*/}

			  <div className="esqueci-minha-senha">
				  <a href="#" hidden>Esqueci minha senha</a>
			  </div>

			  {/*- Botão de entrar -*/}
			  <button onClick={autenticar} id="btn-entrar">Entrar</button>
			  {/* Fazer uma função para autenticar*/}

		  </div>

		  <div className="logo">
			  <img src={fundo} style={{transform: "translateY(32%)"}}/>
		  </div>
	  </div>
	  {/* Loading do sistema --*/}
	  <div id="loading">

		  <div className="dot-spinner">
			  <div className="dot-spinner__dot"></div>
			  <div className="dot-spinner__dot"></div>
			  <div className="dot-spinner__dot"></div>
			  <div className="dot-spinner__dot"></div>
			  <div className="dot-spinner__dot"></div>
			  <div className="dot-spinner__dot"></div>
			  <div className="dot-spinner__dot"></div>
			  <div className="dot-spinner__dot"></div>
		  </div>
	  </div>

	  </div>

	);


  }


export default Login;
