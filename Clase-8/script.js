
//pliegue y despliegue del navegador
function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}

//Web Storage
//API que nos permite almacenar info en el browser.
//2 mecanismos : localStorage y SessionStorage
//siempre almacena strings 

//3 metodos : 
//setItem(key,dato) ->guardar info 

localStorage.setItem("dato","soy un dato...")
//getItem(key)  -> obtenerla
let info=localStorage.getItem("dato")
console.log(info)
//removeItem(key) ->eliminarla
localStorage.removeItem("dato")

localStorage.setItem("dato","soy un dato...")

localStorage.setItem("dato","376876.")
localStorage.setItem("dato1","soy un dato...")
localStorage.setItem("dato",[{numero:333}])//[Object,Object] ya que no estoy almacenando string

console.log(localStorage.getItem("dato"))

//--------
let silla={
    modelo:"pepito",
    precio:2500,
    stock:20
}

//----JSON (JavaScript Object Notation)
//formato basado en texto 
//el intercambio de informacion 
//muy liviano -  distintos lenguajes lo pueden interpretar 
//formato similiar a un array de objetos o un objeto de objetos

//transformar algo (array o un objeto) a JSON -> stringify

let array1=[{
    dato:"hola",
    numero:123

},
{
    dato:"hola",
    numero:123

}]
console.log(array1)
localStorage.setItem("ejemplo",array1)

let dataJSON=JSON.stringify(array1);
localStorage.setItem("ejemplo2",dataJSON)
console.log(dataJSON)
localStorage.setItem('silla',JSON.stringify(silla))
// metodo para transformar JSON a array/objeto
//parse() -> JSON.parse(dataEnFormatoJSON)

console.log(JSON.parse(dataJSON))


///-------------------------------------


//--------- cantidad de productos

//contador de productos en changuito de compra

//cada vez que pulse una de las tarjeta,sume en 1 unidad al carrito de compra
let totalContador=0

let infoCantidad=localStorage.getItem("contador")//fui a buscar la informacin
if(infoCantidad != null){
 totalContador=infoCantidad//modificando el valor total
}
document.querySelector("#cantidad").textContent=totalContador;//actualiza la cantidad de productos en el contador 


console.log(infoCantidad)

//funcion que me permite actualizar la cantidad de producto 
const sumarProducto=()=>{
   // sumar en 1 al total de productos seleccionados
    let cantidad=document.querySelector("#cantidad");
    totalContador++
    cantidad.textContent =totalContador

    localStorage.setItem("contador",totalContador)//almaceno en web storage
}

//--------------- tema dia y noche



//cuando se ejecuta el evento
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


/// uso de clear() y de removeItem();

let botonBorrar=document.querySelector("#borrarCompra");
let botonBorrarTodo=document.querySelector("#borrarTodo");

botonBorrar.addEventListener("click",()=>{
    localStorage.removeItem("contador");//eliminamos la cantidad de productos en el canasto
    document.querySelector("#cantidad").textContent=0
});

botonBorrarTodo.addEventListener("click",()=>{
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload()// refrescar la pagina
})

