import cipher from './cipher.js';

// declaracion de funciones
function onSubmit(e){        
    e.preventDefault()
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let passwordStored = USERS[user];

    if( passwordStored ==  password) {
        alert(" Tú sesión ha sido iniciada")
        document.getElementById("welcome").style.display = 'none';
        document.getElementById("data").style.display = 'none';
    } else {
        alert(" Usuario y/o contraseña incorrecta. Intenta de nuevo")
    }
}

function cifrar(mensaje, desplazamiento){
    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    let cadenaCifrada = "";
    desplazamiento = parseInt(desplazamiento);
    
    let t = 0;
    while (t< mensaje.length) {
        const letraInicial = mensaje[t];
        const posicionLetraInicial = abecedario.indexOf(letraInicial);
        
        if(posicionLetraInicial == -1){
            cadenaCifrada = cadenaCifrada + letraInicial 
        } else{
            const posicionLetraFinal = posicionLetraInicial + desplazamiento;
            const nuevaLetra = abecedario[posicionLetraFinal];
            cadenaCifrada = cadenaCifrada + nuevaLetra
        }
        t++;
    }
    
    return cadenaCifrada;
  }
  
  
  function descifrar(text, displacements){
    if(!text) {
        return "";
    }
  
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    displacements = (displacements % 26 - 26) %26;
    return text.replace(/[A-Z]/ig, c=> letters[(letters.indexOf(c)-displacements)%26]);
    
  }

function startEncryptionEvents(){    
    document.getElementById("mensajeaCifrar").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    });
    document.getElementById("cifrar").addEventListener("click", function(){
        let text = document.getElementById("mensajeaCifrar").value;
        let displacements = document.getElementById("displacements").value;
        document.getElementById("mensajeCifrado").value = cifrar(text, displacements)
        document.getElementById('descifrar').disabled = false;
    });
    document.getElementById("descifrar").addEventListener("click", function(){
        let text = document.getElementById("mensajeCifrado").value;
        let displacements = document.getElementById("displacements").value;
        document.getElementById("mensajeCifrado").value = descifrar(text, displacements )
        document.getElementById('descifrar').disabled = true;
    });
}


// empieza el programa cuando carga el javascript

//LOGIN DE INGRESO

// JSON con "clave" : "valor"
let USERS = {
    "julian": "pass1",
    "ivonnefm03": "pass2",
    "antonella": "pass3",
}

let form = document.getElementById('login');
form.addEventListener("submit", onSubmit);


// Dar inicio a los eventos del cifrado
startEncryptionEvents();




  
