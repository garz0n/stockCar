var autos = []; //Arreglo indeterminado
    
    function carros (modelo, aModelo, marca, caracteristicas ){
        this.modelo = modelo;
        this.aModelo = aModelo;
        this.marca = marca;
        this.caracteristicas = caracteristicas;
    }

function agregarCarros(){
    let modelo = document.getElementById('modelo').value;
    let aModelo = document.getElementById('aModelo').value;
    let marca = document.getElementById('marca').value;
    let caracteristicas = document.getElementById('char').value;
    let carroNuevo = new carros(modelo, aModelo, marca, caracteristicas);//Creamos un objeto mediante los datos ingresados
    autos.push(carroNuevo);//Agregamos objeto a un arreglo
    console.log(JSON.stringify(autos));//Imprimimos datos de tipo JSON en consola
    mostrarTabla();
}

function mostrarTabla(){
    document.getElementById('tabla').innerHTML='';
    for (let i=0; i < autos.length; i++){//Iniciamos a recorrer el arreglo
        document.getElementById('tabla').innerHTML= document.getElementById('tabla').innerHTML
        +`<tr>
            <td> ${autos[i].modelo}</td>
            <td> ${autos[i].aModelo}</td>
            <td> ${autos[i].marca}</td>
            <td> ${autos[i].caracteristicas}</td>
        </tr>`//Ingresamos los valores a la tabla
    }    
}
 
function mostrarDatosAston(){
var monza = new carros('DB11', '2016','ASTON MARTIN', `Motor de gasolina 9.9, maletero de 270L, potencia de 530 CV - 610 CV` );
alert(`Modelo : ${monza.modelo},
Año del modelo : ${monza.aModelo},
Marca : ${monza.marca}
Caracteristicas : ${monza.caracteristicas}`);
}

function mostrarDatosHonda(){
    var honda = new carros('Coupe','2020','HONDA', `Motor turbo de 4 cilindros, Transmision de velocidad continuamente variable, `)
    alert(`Modelo : ${honda.modelo},
Año del modelo : ${honda.aModelo},
Marca : ${honda.marca}
Caracteristicas : ${honda.caracteristicas}`);
}

function mostrarDatosCamaro(){
    var chevrolet = new carros('Camaro','2019','CHEVROLET', `Motor 6.2L V8 11km/L`);
    alert(`Modelo : ${chevrolet.modelo},
    Año del modelo : ${chevrolet.aModelo},
    Marca : ${chevrolet.marca}
    Caracteristicas : ${chevrolet.caracteristicas}`);
}

function mostrarDatosHellcat(){
    var dodge = new carros('Charger hellcat','2020','DODGE', `Rendimiento de combustible combinado 8L/km, Motor 6.2L V8, Potencia de 707 CV`);
    alert(`Modelo : ${dodge.modelo},
    Año del modelo : ${dodge.aModelo},
    Marca : ${dodge.marca}
    Caracteristicas : ${dodge.caracteristicas}`);    
}

function mostrarDatosShelby(){
    var shelby = new carros(`Mustang Shelby gt500`,'2020','FORD', `Potencia de 760 CV, Motor 5.2L V8, 0-100km/h en 3 segundos`);
    alert(`Modelo : ${shelby.modelo},
Año del modelo : ${shelby.aModelo},
Marca : ${shelby.marca}
Caracteristicas : ${shelby.caracteristicas}`); 
}

function mostrarDatosRange(){
    var range = new carros('Range rover', '2021', 'LAND ROVER', `Motor de 4 cilindros turbo de 2 litros, Tracción integral, Transmisión automática de 9 velocidades`);
        alert(`Modelo : ${range.modelo},
Año del modelo : ${range.aModelo},
Marca : ${range.marca}
Caracteristicas : ${range.caracteristicas}`); 
}