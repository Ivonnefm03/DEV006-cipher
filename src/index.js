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


function cifrar(text, displacements){
    let result = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    displacements = (displacements % 26 + 26) %26 ;
    if(text){
        for( let i = 0; i<text.length; i++){
            if(letters.indexOf(text[i])!= -1){
                let position = ((letters.indexOf(text[i])+displacements)%26);
                result += letters[position];
            }
            else {
                result += text[i];
            }
        }
        return result;
    }
}

function descifrar(text, displacements){
    if(!text){
        return "";
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        displacements = (displacements % 26 - 26) %26;
        return text.replace(/[A-Z]/ig, c=> letters[(letters.indexOf(c)-displacements)%26]);
    } 
}


function startEncryptionEvents(){    
    document.getElementById("mensajeaCifrar").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    });
    document.getElementById("cifrar").addEventListener("click", function(){
        let text = document.getElementById("mensajeaCifrar").value;
        let displacements = document.getElementById("displacements").value;
        document.getElementById("mensajeCifrado").value = cifrar(text, displacements )
    });
    document.getElementById("descifrar").addEventListener("click", function(){
        let text = document.getElementById("mensajeCifrado").value;
        let displacements = document.getElementById("displacements").value;
        document.getElementById("mensajeCifrado").value = descifrar(text, displacements )
    });
}


// empeza el programa cuando carga el javascript

//LOGIN DE INGRESO

// JSON con "clave" : "valor"
let USERS = {
    "julian": "pass1",
    "ivonnefm03": "pass2",
    "antonella": "pass3",
}

let form = document.getElementById('login');
form.addEventListener("submit", onSubmit);

// MENSAJE CIFRADO

// Dar inicio a los eventos del cifrado

startEncryptionEvents();




  
