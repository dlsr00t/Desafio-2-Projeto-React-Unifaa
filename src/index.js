import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


{/*function Mostrar(){
  const teste = () =>{
    let iconeT = document.getElementById("trancado");
    let iconeA = document.getElementById("aberto");
    let ver = document.getElementById("senha");
    iconeT.style.display = "none";
    ver.type = "text";
    console.log("funcionando");
  }


}
*/}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
