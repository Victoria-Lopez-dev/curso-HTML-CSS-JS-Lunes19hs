//CANVAS - es una API grafica incorporada a HTML5

//API?? - Aplication Programing Interfase (Iterfaz de Programacion de aplicaciones)
//funciones complejas que nos ayudan a resolver situaciones de manera mas simple.
//conectores entre servidor y el navegador

//figuras primitivas: rectangulos y trazos

let canvas=document.querySelector("canvas");


let lienzo=canvas.getContext("2d");
console.dir(lienzo);

//--------------- rectangulos
//fillRect(x,y,width,height)
//strokeRect(x,y,width,height)
//clearReact(x,y,width,height)

//colores
//fillStyle -> color de relleno
//strokeStyle -> color del contorno
lienzo.fillRect(20,20,100,10);
lienzo.fillStyle="#FF8833";

lienzo.strokeStyle="rgb(10,200,33)";//color del contorno

lienzo.fillRect(20,100,100,10);
lienzo.strokeRect(40,40,100,10);
lienzo.clearRect(10,22,100,10)

//--------------- trazos
//moveTo(x,y) | lineTo(x,y)
//arc(cx,cy,r,ang.inicio,ang.final,direccion)

//quadraticCurveTo(pcx,pcy,x,y)
//bezierCurveTo(pcx1,pcy1,pcx2,pcy2,x,y)

//Math.PI/180* ang -> Math.PI=180deg


let grado40=Math.PI/ 180 *40


lienzo.beginPath();//iniciar el trazo
lienzo.strokeStyle="rgb(44,20,233)"
lienzo.lineWidth=3;//ancho de borde
lienzo.globalAlpha=1;//transparencia 0-1 
lienzo.moveTo(30,20);//trasladarme hacia la zona en que quiero dibujar
lienzo.lineTo(100,100);
lienzo.lineTo(160,100);
lienzo.lineTo(90,10);
lienzo.stroke();
lienzo.closePath();//fin de trazo ( si uso el metodo fill() , no necesito colocare el metodo closePath() )

lienzo.beginPath();//iniciar el trazo
lienzo.arc(200,100,30,grado40,Math.PI,true);
lienzo.lineTo(150,10);
lienzo.fill();
lienzo.stroke();
lienzo.closePath();


lienzo.beginPath();//iniciar el trazo
lienzo.strokeStyle="brown";
lienzo.lineWidth=2;
lienzo.moveTo(190,10);
lienzo.quadraticCurveTo(270,20,190,90)
lienzo.stroke();
lienzo.closePath();

lienzo.clearRect(0,0,150,150);//tape lo anterior con el clearReact()

lienzo.beginPath();//iniciar el trazo
lienzo.fillStyle="gold";
lienzo.lineWidth=2;
lienzo.moveTo(190,100);
lienzo.bezierCurveTo(140,70,180,150,100,100)
lienzo.bezierCurveTo(10,70,140,150,50,170)
lienzo.fill();



//texto
//fillText(texto,x,y)
//strokeText(texto,x,y)

lienzo.beginPath();
lienzo.fillStyle="#6F1E51";
lienzo.font="20px Verdana ";
lienzo.strokeText("Chau",160,50)
lienzo.closePath();


//-----------
let puntoY=30;
let moverPalabra;
const iniciar=()=>{

   
    moverPalabra=setInterval(()=>{
        lienzo.beginPath();
        lienzo.clearRect(0,puntoY-40,100,100)
        lienzo.font="30px cursive ";
        lienzo.fillText("Hola",0,puntoY);
        lienzo.closePath();
        puntoY=puntoY+5

    },100) 

}
const finalizar=()=>{

    clearInterval(moverPalabra)
}