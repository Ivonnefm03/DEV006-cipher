import {decode, encode} from "./cipher"

// declaracion de funciones
function onSubmit(e){        
  e.preventDefault()
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const passwordStored = USERS[user];

  if( passwordStored ===  password) {
    alert(" Tú sesión ha sido iniciada")
    document.getElementById("welcome").style.display = 'none';
    document.getElementById("data").style.display = 'none';
  } else {
    alert(" Usuario y/o contraseña incorrecta. Intenta de nuevo")
  }
}


function startEncryptionEvents(){    
  document.getElementById("mensajeaCifrar").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  });
  document.getElementById("cifrar").addEventListener("click", function(){
    const text = document.getElementById("mensajeaCifrar").value;
    const displacements = document.getElementById("displacements").value;
    document.getElementById("mensajeCifrado").value = decode(text, displacements)
    document.getElementById('descifrar').disabled = false;
  });
  document.getElementById("descifrar").addEventListener("click", function(){
    const text = document.getElementById("mensajeCifrado").value;
    const displacements = document.getElementById("displacements").value;
    document.getElementById("mensajeCifrado").value = encode(text, displacements )
    document.getElementById('descifrar').disabled = true;
  });
}


// empieza el programa cuando carga el javascript

//LOGIN DE INGRESO

// JSON con "clave" : "valor"
const USERS = {
  "julian": "pass1",
  "ivonnefm03": "pass2",
  "antonella": "pass3",
}

const form = document.getElementById('login');
form.addEventListener("submit", onSubmit);


// Dar inicio a los eventos del cifrado
startEncryptionEvents();




  
