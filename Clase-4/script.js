const mover=(el)=>{
el.classList.add("mover")
}

const girarCuadrado=()=>{
   let padre= document.querySelector(".padre");

   padre.style.animation="none";

   // document.querySelector("h1").style.animation="cambioColor 5s cubic-bezier(.75,.07,.79,.21) 2s infinite alternate"
}
// eventos -> objeto event - this -> nodo del elemento en el que ocurre el evento