import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

console.log('teste');

const form = document.querySelector('.form');

form.addEventListener('submit', event =>{
    
    event.preventDefault();//pausar refresh da pagina
    controller.adiciona();

})