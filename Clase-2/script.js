let video2=document.querySelectorAll("video")[1];

console.dir(video2);
//video y audio -> metodos play() pause()
//propiedad duration (dura en seg )
//propiedad currenTime -> segund actual
let tiempoActual;

const reproducir=()=>{
    video2.play()
    let texto1=document.querySelector(".duracion")
    // texto1.textContent ="00:"+video2.duration.toFixed(0) -> que me permite indicar hasta cuantos decimales mostrar
    texto1.textContent ="00:"+parseInt(video2.duration)// nos ajusta el numero a enteros


    tiempoActual=setInterval(()=>{
    let texto1=document.querySelector(".actual")
    texto1.textContent ="00:"+video2.currentTime.toFixed(0)
},1000)//cada 1 segundo muestra el tiempo actual

}
const pausar=()=>{
    video2.pause()
    clearInterval(tiempoActual)//nos permite pausar el mostrar el tiempo actual del video.
}


const mutedOnOff=()=>{

    video2.muted=true;

}



const transformarTiempo=(tiempo)=>{
    if(tiempo>=60){
        let minutos=parseInt(tiempo/60)
        let segundos=tiempo/60 - minutos

    }
}

//setInterval() -> ejecutar una accion cada un cierto tiempo 
//clearInterval(funcion) -> cortar la ejecucion de un setIterval()


// 1 munito -> 60 segundos
//iniciamos con funcion de pasar de min a segundos y mostrarlo 

//proxima clase : Flex - grid || Git Github