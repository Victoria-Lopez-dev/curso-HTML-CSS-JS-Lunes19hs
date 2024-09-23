//codigo JS 
//proxima clase : tipo de datos, variables,listas,bucles, eventos, DOM ,funciones 
//audio - video 

//console.log(algo)| table | dir ...

/* tipo de datos */

/* Numbers(numeros) - Strings(caracteres) -Booleans(booleanon : verdadero/falso) */

/*Numbers(numeros) */
3334
22.45
NaN //se concidera dentro de los numbers 
/*  Strings(caracteres) -> comillas : " ", '' , ` `  */

"un texto corto...."
'djh@h3kdub'
"true"

/* si quiero transformar de numero-string y string a numero */

"33"
Number("33")// 33
parseFloat()// a numeros decimales 
parseInt()//a numeros enteros

toString(33)// transforma a String

console.log(parseFloat("hola"))// NaN (not a number )

/* Booleans(booleanon : verdadero/falso) */
false /* falso */
true /* verdadero  */

//variables - guardar data en espacios de memoria de manera temporal 
//sintaxis: res nombre = valor;
// let - const 

//tipo de variables que puedo modificar a lo largo del doc

//crear la variable
//sintaxis: let nombre = valor;
let persona="Juan";
let edad=44;

//modificar
persona="Laura";
//edad="33 años"

//utilizar
console.log(persona)


//constante -> me permite crear una variable pero NO modificarla en el documento
//const descuento=true;

//descuento=22//error 

//operaciones y condiciones

//operaciones -> aritmeticas - logicas - comparacion

//aritmeticas -> + - * / 
33 +44// 77
console.log(33.7 /44)// -11

// + -> suma numerica y concatenacion
console.log("hola"+" " +persona)
console.log(33+"44")
Math //objeto 
console.log(Math.PI)

//comparacion -> devolvernos booleano

//simbolos : > < >= <= !== | != | === | ==
//> < >= <=
// si utilizo valor true(1) - false(0)
console.log(edad >16)

// === | ==

persona = "Bruno";// asignado a la variable persona el nuevo valor :"Bruno"

persona == "Bruno";// comparando si la variable persona es igual a el string "Bruno"

//diferencia entre == y === en que compara
//== -> compara solo el valor 
//=== -> compara tanto el valor como el tipo de dato 
edad == "44"// true 
edad === "44"// false 
//            44
console.log(edad === 44)// false 

//!== | !=  desigualdad 
//!= -> compara solo el valor 
//!== -> compara tanto el valor como el tipo de dato 

console.log(edad != "44")

//logicos : && || !  -> booleano

//&& -> and "y" necesito que ambas se cumplan 

//usuarioIngresado == "usuarioA" && passIngresada == "contraseña"//true caso contrario False 

//|| -> or "o" -> necesita que por lo menos una de todas las operaciones me de true(se cumpla)

//edad >16  || adultoRespons == true 


//! -> not -> nos devuelve el opuesto "que no se cumpla ..."
!(true)// false 

undefined// -> valor que indica que no esta definido 
 
let dia ="Lunes"
//condiciones -> operadore ternario - if/else - switch


//operadore ternario -> sintaxis condicion ? accion-true : accion-false;

dia ==="Martes"? console.log("aplicamos descuentos.."): console.log("no aplico descuento..");

//if - else 

/*sintaxis:

if(condicion){
    accion/es -true
}else{
    accion/es -false
}

puedo no utilizar el else 

*/

if(dia === "Martes"){
    //acciones de descuento...
}

// array - listas [] -> separamos items con coma (,) menos el ultimo item
let lista=[persona,"Marcos",333,true]


// indice - 0 ....
//  0           1   2   3
//[persona,"Marcos",333,true]
//array[indice]-> obtengo el valor de la lista

//length -> largo de la lista (cantidad de items)

console.log(lista[1])
lista.length

//modificar -> metodos  -> array.metodo()
//metodos -> push() unshift() , pop() shift() , splice()

//agregar items push() unshift()

lista.push("nuevo valor")
lista.push(44)
lista.unshift(false)

//sacar items pop() shift()
lista.pop()
lista.shift()

//splice(indice,cantidad,nuevoValor) -> "nuevoValor" opcional 

lista.splice(1,1,"Mariela")

//lista.splice(2,2)
lista.splice(2,2,false, 123)

console.log(lista)
let listaCurso=["html y css","bootstrap","JS"]
//objetos -> describir algo 
/* sintaxis

{
    propiedad:valor,
    propiedad:valor,
    propiedad:valor
}

*/

let alumno={
    nombre :'Lucas',
    edad:33,
    regular:true,
    cursos:listaCurso
}

//acceder a una propiedad
//objeto.propiedad

console.log( alumno.edad)

//modificar la propiedad
// objeto.propiedad=nuevoValor

alumno.edad=35


//crear propiedades en el objeto
//objeto.nuevaPropiedad=valor

alumno.apellido="Martinez"



//eliminar una propiedad
//delete objeto.propiedad

delete alumno.regular

console.log( alumno)

//DOM - Document Object Model 
//document 
console.dir(document)
//metodos obtener elementos del HTML(nodo) -> document.metodo()
//selector -> # . 
//querySelector("selector") (1er elemento )-  
//querySelectorAll("selector") (array)

let h1=document.querySelector("h1")
console.dir(h1)

h1.innerText="Nuevo titulo"
h1.style.color="#F90"

let menu=document.querySelectorAll(".menu")
console.dir(menu)
menu[0].style.display="none"

//funciones -> conjunto de acciones
//definidas de manera tradicional

// function hacerMilanesas(prod) {
//     //mojar en la mezcla con huevo
//     //empanar
    
// }

// //arrow function -> funcion flecha

// const hacerMilanesas= ()=>{
//   //mojar en la mezcla con huevo
//     //empanar  
// }

// //ejecuto nombreFuncion(parametros )

// hacerMilanesas("berenjena")
// hacerMilanesas("pollo")


// eventos 
//addEventListener("evento",()=>{})

    let boton=document.querySelector("button");

boton.addEventListener("click",()=>{
    menu[0].style.display="block"
})

//atributo agregado en el HTML on+evento=funcion()

const cambioColor=()=>{
    h1.style.color="pink"
}

