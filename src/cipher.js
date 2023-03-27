const cipher = {

  encode: function (message, displacement){ 
    // Verifico si el mensaje es nulo o vacío
    if(message === null || message === 0) {
      // Si el mensaje es nulo o vacío, lanzo un TypeError
      throw TypeError("Debes ingresar un mensaje y un desplazamiento");
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJ"
    // Creo una cadena vacía para almacenar el mensaje cifrado
    let encryptedString = "";
    // Convierto el desplazamiento a un número entero
    displacement = parseInt(displacement);

    // Itero por cada letra en el mensaje
    let i = 0;
    while (i< message.length) {
      // Obtengo la letra actual
      const initialLetter = message[i];
      // Obtengo la posición de la letra actual en el alfabeto
      const initialLetterPosition = alphabet.indexOf(initialLetter);
        
      if(initialLetterPosition === -1){encryptedString = encryptedString + initialLetter
      } else{
        // Si la letra actual se encuentra en el alfabeto, calculo su nueva posición en el alfabeto
        const finalLetterPosition = initialLetterPosition + displacement;
        const newLetter = alphabet[finalLetterPosition];
        // Agrego la nueva letra a encryptedString
        encryptedString = encryptedString + newLetter
      }
      i++;
    }
    return encryptedString;
  },

  decode: function (encryptedMessage, displacement) { 
    if(encryptedMessage === null || encryptedMessage === 0 ) {
      throw TypeError("Debes ingresar un mensaje y un desplazamiento");
    }
    //                                                                    52
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Cree una cadena vacía para almacenar la cadena descifrada
    let decryptedString = "";
    // Itero por cada letra en la cadena cifrada
    for (let i = 0; i < encryptedMessage.length; i++) {
      // Obtengo la letra cifrada actual
      const currentLetter = encryptedMessage[i];
      // Obtenemos la posición de la letra actual en el alfabeto
      let currentLetterPosition = alphabet.indexOf(currentLetter);
      
      // Si la letra actual no se encuentra en el alfabeto, la agrego a decryptedString sin cifrarla
      if (currentLetterPosition === -1) {
        decryptedString = decryptedString + currentLetter;
      } else {
        // Si la letra actual se encuentra en el alfabeto, calculo su nueva posición en el alfabeto
        currentLetterPosition = currentLetterPosition + 52
        const newLetter = alphabet[currentLetterPosition - displacement];
        // Agregamos la nueva letra a decryptedString
        decryptedString = decryptedString + newLetter;
      }
    } 
    // Devuelvo la cadena descifrada
    return decryptedString;
  }

};

export default cipher;

