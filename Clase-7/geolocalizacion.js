//API -> Aplication Programing Interfase
//Geolocalizacion -> API incluida HTML5 -> que nos permite unicar al dispositivo en el que se encuentra el usuario(siempre que este nos lo permite )

//coordenadas 
//sintaxis -> navigator.geolocation.metodo(funcionOk,FuncionError,ObjConfig) 
//getCurrentPosition || watchPosition()


const funcionOk=(position)=>{
    console.log(position)
    //timestamp -> tiempo que tardo en ubicar (ms)
    //coords -> info de la ubicacion
    //accuracy -> precision / margen de error en metros
    document.querySelector("p").textContent=` el dispositivo se ubica en la latitud ${position.coords.latitude} y longitud${position.coords.longitude}.Tener en cuenta que contamos con un margen de error de ${position.coords.accuracy} metros`

};

const funcionError=(error)=>{
    console.log("error ")
    console.log(error);

    if(error.code === 1){
        document.querySelector("p").textContent="Lamentablemente no pudimos ubicarlo ya que nos denego el acceso, le pedimos permitirlo..."
    }
    //code -> 1 al 3
    //message -> info sobre el error 
};

const configuracion={
    enableHighAccuracy:true,//tratando de ser lo mas preciso posible 
    timeout:100000//,tiempo limite de espera para ubicar al dispositov ,en ms
   // maximumAge:200unidad en ms  que ponemos como maximo entre busquedas .

};

navigator.geolocation.getCurrentPosition(funcionOk,funcionError,configuracion);