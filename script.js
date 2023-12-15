// ELEMENTOS
const FACIL = document.getElementById("facil");
const NORMAL = document.getElementById("normal");
const DIFICIL = document.getElementById("dificil");
const NIVELES = document.getElementById("niveles");
const MSJE_NIVEL = document.getElementById("mensaje-nivel");
const JUEGO = document.getElementById("juego");
const BOTON = document.getElementById("intentar");
const PISTA = document.getElementById("pista");
const DISP= document.getElementById("num-intentos");
const REINICIAR = document.getElementById("reiniciar");
const FIN = document.getElementById("fin");

// VARIABLES GLOBALES
let intentos = 5;
let rango;
let NUMERO;

// INICIO y DEFINICION DE LOS NIVELES
window.onload = () => {
    niveles();
}

function niveles(){
    NIVELES.style.display = "block";
    JUEGO.style.display = "none";
}

// EVENTOS
BOTON.addEventListener('click', () => {intentar()});
FACIL.addEventListener('click', () => {jugar(20)});
DIFICIL.addEventListener('click', () => {jugar(100)});
NORMAL.addEventListener('click', () => {jugar(50)});

function jugar(r){
    rango = r;
    MSJE_NIVEL.innerHTML = `Ingrese un numero en un rango del 1 al ${r}`;
    NIVELES.style.display = "none";
    JUEGO.style.display = "block";

    NUMERO = genNumero();
}

function genNumero(){
    return Math.floor(Math.random() * rango);
}

function leerIntento(){
    let intento = document.getElementById("num");
    return intento.value;
}

function intentar(){
    const INTENTO = leerIntento();
 
    if (INTENTO == NUMERO) {
        terminar("Ganaste!")
        return
    }
    else{

        if(INTENTO>NUMERO){
            PISTA.innerHTML = "Mas Bajo";
            PISTA.style.display = 'block';
        }else{
            PISTA.innerHTML = "Mas Alto";
            PISTA.style.display = 'block';
        }
        intentos--; 
    }
    DISP.innerHTML=intentos;
    if (intentos==0){
        terminar(`Perdiste! El numero era ${NUMERO}`)
    }
}

function terminar(mensaje){
    const INPUT = document.getElementById("num");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('mensaje-final');
    contenedor.innerHTML = mensaje;
    FIN.style.display = "block";
    REINICIAR.addEventListener("click", ()=>{
        location.reload();
    });
}
