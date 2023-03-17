const cipher = {
  // ...
};

export default cipher;

// MENSAJE CIFRADO

// Dar inicio a los eventos del cifrado



function darInicio(){
  document.getElementById("mensajeaCifrar").addEventListener("keyup", function(){
      this.value = this.value.toUpperCase();
      
  });
}