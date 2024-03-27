import fundo from "./assets/logo_unifaa_branca.png";
import './App.css';
import React from "react";

function App() {
    const EMAIL = "admin@admin.com";
    const SENHA = "123456";
    const campoEmail = document.querySelector("#email");
    const campoSenha = document.querySelector("#senha");
    const btnEntrar = document.getElementById("btn-entrar");

    const salvarToken = (token) => {
        // Aqui salvo o usuario na Store
        localStorage.setItem('token', token)
    }
    
    const obterToken = (token) => {
        // Obtenho o token da store
       return localStorage.getItem("token");
    }
    
    const salvarUsuario = (usuario) => {
        // Aqui pego o usuario0 em obj e converto ele para json e salvo n a store.
       return localStorage.setItem('usuario', JSON.stringify(usuario));
    }
    
    const obterUsuario = (usuario) => {
        // pego o usuario como json na store e converto ele para objeto e devolvo no return.
        let usuarioStore = localStorage.getItem("usuario");
        return JSON.parse(usuarioStore);
    }
    
    const sairDoSistema = () => {
        localStorage.removeItem('token'); 
        localStorage.removeItem('usuario');
        window.open('login.html', '_self');
    }

    console.log("S={Douglas}")
    
    //? Azul
    //! Vermelho
    //Todo laranja
    //* Verde


    const autenticar = (email, senha) =>{
        const URL = 'http://localhost:3400/login';

        fetch(URL, {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body   : JSON.stringify({email, senha})
        })
        .then(response => response = response.json())
        .then(response =>{
            console.log(response)
            if(!!response.mensagem){
                alert(response.mensagem);
                return;
            }
            {/* mostrarLoading(); */} 
            {/* Fazer o loading aparecer :)*/} 

        })
    }

    const clicado = () => {
        let emailDigitado = campoEmail.value.toLowerCase();
        let senhaDigitada = campoSenha.value;
        
        console.log(emailDigitado);

        autenticar(emailDigitado, senhaDigitada);
    }

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
    <div class="overall">
        <div class="caixa-login">
            {/*- Titulo da tela de login --*/}
            <div class="titulo-login">
                <h1>Login</h1>
            </div>

            {/*- Grupo do email --*/}
            <div class="grupo">
                <input id="email" type="text" placeholder="Digite seu e-mail"/>
                <i class='bx bxs-envelope' id = "iemail"></i>
            </div>

            {/*- Grupo do senha -*/}
            <div class="grupo" id = "csenha">
                <input id="senha" type="password" placeholder="Digite sua senha"/>
                                
                <ion-icon name="lock-open" id="aberto" onClick={esconder}></ion-icon>
                <ion-icon name="lock-closed" id="trancado" onClick={mostrar}></ion-icon>

            </div>

            {/*- Link para recuperar a senha -*/}
            
            <div class="esqueci-minha-senha">
                <a href="#" hidden>Esqueci minha senha</a>
            </div>

            {/*- Botão de entrar -*/}
            <button onClick={clicado} id="btn-entrar">Entrar</button>  {/* Fazer uma função para autenticar*/}
            
        </div>
        
        <div class="logo">
            <img src={fundo} style={{transform: "translateY(32%)"}}/>
        </div>
    </div>
    {/* Loading do sistema --*/}
    <div id="loading">

        <div class="dot-spinner">
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
        </div>
    </div>

    </div>
    
  );


}








export default App;
