// Drag and Drop -> API incluida HTML5 
//arrastrar elementos dentro del programa/sitio.

//arrastrable es un elemento -> nos permiten arrastrarlo (efecto)
//ancla (<a>) y img -> por defecto son arrastrables
//atributo ->draggable (booleano)

//API nos provee de 7 eventos 
//2 grupos : los que ocurren en el elemento a arrastrar y los que ocurrren en la zona de destino 

//dataTansfer-> objeto propio de la API que vive en los eventos de Drag and Drop, metodos: setData(tipo,dato) getData(tipo) clearData(tipo) 

//"Text" "URL" "text/plain" "text/html" "text/uri-list"

let titulo=document.querySelector("h1")

//------
// los que ocurren en el elemento a arrastrar

//dragstart (inicio de arrastre) - dragend(finaliza el arraste) - drag
//addEventListener("dragstart",()=>{})

const arrastre=(e)=>{
    console.log("inicio arrastre");
    
    let data=e.target.id
    e.dataTransfer.setData("Text",data)
}
const arrastreImg=(e)=>{
    let data=e.target.id;
    e.dataTransfer.setData("Text",data)
}
// titulo.addEventListener("dragend",()=>{
//     console.log("fin de arrastre")
// })

// titulo.addEventListener("drag",()=>{
//     console.log("evento que se ejecuta mientras estemos arrastrando al elemento")
// })

//------
let zonaDestino=document.querySelector(".zona-destino")
//eventos ocurrren en la zona de destino 
//dragenter - dragleave - dragover - drop
// zonaDestino.addEventListener("dragenter",()=>{
//     console.log("se arrastro un elemento sobre esta zona")
// })
// zonaDestino.addEventListener("dragleave",()=>{
//     console.log("salimos de la zona destino con el elemento arrastrado")
// })
zonaDestino.addEventListener("dragover",(event)=>{
    // console.log("dragover -> ejecuta mientras nos estemos moviendo con el elemento arrastrado dentro de la zona destino , inclusive cuando este se");

    event.preventDefault();//saca la accion por defecto
})
zonaDestino.addEventListener("drop",(event)=>{
    console.log("DROP");
    let contenido=event.dataTransfer.getData("Text");
    //una vez obtenida la informacion podemos hacer lo que querramos con ella 
  
    if(contenido === "img1"){
        let imagen= document.getElementById(contenido);
        console.dir(imagen)
        event.target.innerHTML=`<img src=${imagen.src}/>`
    }else{
          event.target.innerHTML=`<h1>${etiqueta.innerText}</h1>`
    }
    
  
    //DROP -> ejectua cuando soltamos un elementos arrastrable en el elemento donde se aplica este evento
})
const noRedirigir=(event)=>{
     event.preventDefault()
    
}
   

//de todos estos eventos : dragstart - drop - dragover 

//proxima clase : web Storage - JSON - dudas trabajo final y plus github ( si quieren)