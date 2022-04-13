const descripcion = (obj)=>{
    
    let data = new String();
    Object.values(obj.descripcion).forEach(element => {
        data += element;
    });
    return data;
}

const lista = (obj,atrr,val)=>{
    let data = [];
    Object.values(obj.enlace).forEach(element => {
        let obj = [];
        let value = Object.values(element);
        obj[`${val }`] = value[0];
        obj[`${atrr}`] = value[1];
        data.push({...obj})
        
    });
    return data;
}

const tituloDiseno = (obj,ubicacion=0,cantidad=1)=>{
    let palabras = obj.split(" ");
    let extraer = palabras[ubicacion].slice(0, cantidad);
    palabras[ubicacion] = palabras[ubicacion].replace(extraer, '');
    palabras[ubicacion] = `<span>${extraer}</span>${palabras[ubicacion]}`;
    palabras = `<h2 class="titleText">${palabras.join(" ")}</h2>`;
    return palabras; 
} 
const listaAperitivos =(obj)=>{
    let plantilla ="";
    obj.comidas.forEach(element=>{
     plantilla +=`
        <div class="box">
            <div class="imgBx">
           <img src="${element.img} " >
            </div>
            <div class="text">
             <h3>${element.titulo} </h3>
            </div>
        </div>`;  
    });  
    return plantilla;
}
const listaExpert =(obj)=>{
    let plantilla ="";
    obj.equipo.forEach(element=>{
     plantilla +=`
        <div class="box">
            <div class="imgBx">
           <img src="${element.img} " >
            </div>
            <div class="text">
             <h3>${element.titulo} </h3>
            </div>
        </div>`;  
    });  
    return plantilla;
}
const listaTestimonios =(obj)=>{
    let plantilla ="";
    obj.testimonios.forEach(element=>{
     plantilla +=`
        <div class="box">
            <div class="imgBx">
           <img src="${element.img} " >
            </div>
            <div class="text">
            <p>${element.descriptcion}</p>
             <h3>${element.titulo} </h3>
            </div>
        </div>`;  
    });  
    return plantilla;
}
const listaContactos =(obj)=>{
    let plantilla ="";
    obj.contactame.forEach(element=>{
     plantilla +=`
        <h3>${element.titul} </h3>
            <div class="inputBox">
               <input type ="text" placeholder="Nombre :">
            </div>
            <div class="inputBox">
               <input type ="text" placeholder="Email :">
            </div>
            <div class="inputBox">
               <textarea placeholder="Nombre :"></textarea>
            </div>
            <div class="inputBox">
               <input type ="submit" value="SEND ">
            </div>`;  
    });  
    return plantilla;
}
export const fn = {
    descripcion,
    lista,
    tituloDiseno,
    listaAperitivos,
    listaExpert,
    listaTestimonios,
    listaContactos
}