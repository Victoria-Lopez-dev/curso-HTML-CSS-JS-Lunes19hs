let cantidadProd=localStorage.getItem('contador');
let silla=JSON.parse(localStorage.getItem("silla"))//transformamos el objeto de JSON  a objeto
console.log(silla);

let lista=document.querySelector("ol")

for(let cant=1;cant<=cantidadProd;cant++){
    let li=document.createElement("li");

    li.textContent=`Producto modelo: ${silla.modelo} - precio: ${silla.precio}`;
    lista.appendChild(li)

}

///------ definir tema 

const temaNoche=()=>{
    document.querySelector("body").classList.add("fondo");//cambio de color de fondo del body

    let botones=document.querySelectorAll("button");
    for(let boton of botones){
        boton.classList.add("botonNight")
    }
    sessionStorage.setItem("tema","noche")
}

const temaDia=()=>{
    document.querySelector("body").classList.remove("fondo");
    let botones=document.querySelectorAll("button");
    for(let boton of botones){
        boton.classList.remove("botonNight")
    }
    sessionStorage.setItem("tema","dia")
}

//cuando cargo la pagina

let tema=sessionStorage.getItem("tema");

if(tema === "noche"){
    temaNoche()
}