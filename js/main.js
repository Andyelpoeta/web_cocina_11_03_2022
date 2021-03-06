import {fn} from './modules/funciones.js';
// backend/php/api.php
addEventListener("DOMContentLoaded", async()=>{
    //Peticion al archivo PHP
    let peticion = await fetch("https://andyelpoeta.000webhostapp.com/web_cocina_11_03_2022/backend/php/api.php");
    let obj = await peticion.json();
    
    
    // selecion del DOM 'maquetacion web'
    let content = document.querySelector(".content");
    let header = document.querySelector("header");
    let titulo = document.querySelector(".content h2");
    let parrafo = document.querySelector(".content p");
    let menu = document.querySelector("header .navigation ");
    
    let sobreContainer = document.querySelector("#about .row .col50 ");
    let sobreParrafo = document.querySelector("#about .row .col50 p");
    let sobreimg = document.querySelector("#about .row .col50 .imgBox");
    let aperitivosContainer = document.querySelectorAll(".menu .title");
    let aperitivosParrafos = document.querySelector(".menu .title p");
    let listaAperitivos= document.querySelector(".menu .content ");
    let expertContainer = document.querySelectorAll(".expert .title");
    let expertParrafos = document.querySelector(".expert .title p");
    let listaExpert= document.querySelector(".expert .content ");
    let testimoniosContainer = document.querySelectorAll(".testimonios .titlewhite");
    let testimoniosParrafos = document.querySelector(".testimonios .titlewhite  p");
    let listaTestimonios= document.querySelector(".testimonios .content");
    let contactoContainer = document.querySelectorAll(".contactos .title ");
    let contactoParrafos = document.querySelector(".contactos .title p ");
    let listaContactos= document.querySelector(".contactos .contac ");
    console.log(obj);

    

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
    parrafo.insertAdjacentText("beforeend", fn.descripcion(obj.inicio));
    let a = document.createElement('A');
    a.insertAdjacentText("beforeend", obj.inicio.boton.nombre);
    a.href = obj.inicio.boton.ruta;
    a.classList = "btn";
    content.insertAdjacentElement("beforeend", a);
    //Menu//
  
    menu.append(listaMenu(fn.lista(obj.menu,"href","innerText")));
    // Sobre nosotros
    sobreContainer.insertAdjacentHTML("afterbegin",fn.tituloDiseno(obj.aboutUs.titulo));
    sobreParrafo.insertAdjacentText("beforeend", fn.descripcion(obj.aboutUs));
    let img = document.createElement('IMG');
    img.src = obj.aboutUs.img;
    sobreimg.insertAdjacentElement("beforeend",img);

    //lista de aperitivos//
    aperitivosContainer[0].insertAdjacentHTML("afterbegin", fn.tituloDiseno(obj.ourMenu.titulo));
    aperitivosParrafos.insertAdjacentText("beforeend", fn.descripcion(obj.ourMenu));
    listaAperitivos.insertAdjacentHTML("afterbegin", fn.listaAperitivos(obj.ourMenu));
    
    a = document.createElement('A');
    a.insertAdjacentText("beforeend", obj.ourMenu.boton.nombre);
    a.href = obj.ourMenu.boton.ruta;
    a.classList = "btn";
    listaAperitivos.insertAdjacentElement("beforeend", a);

   //lista de expertos//
   expertContainer[0].insertAdjacentHTML("afterbegin", fn.tituloDiseno(obj.ourKitchenExpert.titulo));
   expertParrafos.insertAdjacentText("beforeend", fn.descripcion(obj.ourKitchenExpert));
   listaExpert.insertAdjacentHTML("afterbegin", fn.listaExpert(obj.ourKitchenExpert));
   
   //Testimonios//
   testimoniosContainer[0].insertAdjacentHTML("afterbegin", fn.tituloDiseno(obj.theySaidAboutUs.titulo));
   testimoniosParrafos.insertAdjacentText("beforeend", fn.descripcion(obj.theySaidAboutUs));
   listaTestimonios.insertAdjacentHTML("afterbegin", fn.listaTestimonios(obj.theySaidAboutUs));

   //Contactos//
   contactoContainer[0].insertAdjacentHTML("afterbegin", fn.tituloDiseno(obj.contaCto.titulo));
   contactoParrafos.insertAdjacentText("beforeend", fn.descripcion(obj.contaCto));
   listaContactos.insertAdjacentHTML("afterbegin", fn.listaContactos(obj.contaCto));

   
})
