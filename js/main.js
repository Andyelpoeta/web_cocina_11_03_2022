import {fn} from './modules/funciones.js';
// backend/php/api.php
addEventListener("DOMContentLoaded", async()=>{
    //Peticion al archivo PHP
    let peticion = await fetch("backend/php/api.php");
    let obj = await peticion.json();
    
    
    // selecion del DOM 'maquetacion web'
    let content = document.querySelector(".content");
    let header = document.querySelector("header");
    let titulo = document.querySelector(".content h2");
    let parrafo = document.querySelector(".content p");
    let menu = document.querySelector("header ul  ");
    
    let sobreContainer = document.querySelector("#about .row .col50 ");
    let sobreParrafo = document.querySelector("#about .row .col50 p");
    let sobreimg = document.querySelector("#about .row .col50 .imgBx");
    let aperitivosContainer = document.querySelectorAll(".menu .title");
    let aperitivosParrafos = document.querySelector(".menu .title p");
    let listaAperitivos= document.querySelector(".menu .content ");
    //let listaExpertos=document.querySelector("")//
    console.log(obj);

    let sobre= document.querySelector(".about")
    let Aperitivos= document.querySelector(".menu")

    //Lista de menu del Dom//
    let listaMenu = (lista, container="LI", hijo="A")=>{
        let frag = new DocumentFragment();
        for (let i = 0; i < lista.length; i++) {
            let cont = document.createElement(container);
            let a = document.createElement(hijo);
            Object.assign(a, lista[i]);
            cont.insertAdjacentElement("beforeend", a);
            frag.append(cont);
        }
        return frag;   
    }
    // Implemetacion del modulo

    // inicio//
    titulo.insertAdjacentText("beforeend", obj.inicio.titulo);
    parrafo.insertAdjacentText("beforeend", fn.descriptcion(obj.inicio));
    let a = document.createElement('A');
    a.insertAdjacentText("beforeend", obj.inicio.boton.nombre);
    a.href = obj.inicio.boton.ruta;
    a.classList = "btn";
    content.insertAdjacentElement("beforeend", a);
    
    menu.append(listaMenu(fn.lista(obj.menu,"href","innerText")));
    // Sobre nosotros
    sobreContainer.insertAdjacentHTML("afterbegin",fn.tituloDiseno(obj.aboutUs.titulo));
    sobreParrafo.insertAdjacentText("beforeend", fn.descriptcion(obj.aboutUs));
    let img = document.createElement('IMG');
    img.src = obj.aboutUs.img;
    img.width ="";
    sobreimg.insertAdjacentElement("beforeend",img);

    //lista de aperitivos//
    aperitivosContainer[0].insertAdjacentHTML("afterbegin", fn.tituloDiseno(obj.ourMenu.titulo,1));
    aperitivosParrafos.insertAdjacentText("beforeend", fn.descriptcion(obj.ourMenu));
    listaAperitivos.insertAdjacentHTML("afterbegin", fn.listaAperitivos(obj.ourMenu));
    
    a = document.createElement('A');
    a.insertAdjacentText("beforeend", obj.ourMenu.boton.nombre);
    a.href = obj.ourMenu.boton.ruta;
    a.classList = "btn";
    listaAperitivos.insertAdjacentElement("beforeend", a);
   //lista de expertos//
})
