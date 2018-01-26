var begin = () => {
  const SPACES_RIGHT = 33;

  var validateText = (event) => {
    const PATTERN_TEXT = /^[a-zA-Z_áéíóúñ_ÁÉÍÓÚÑ ]*$/;
    var centinel = false;
    if (PATTERN_TEXT.test(event.key)) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  };

  var cipher = (text, space) => {
    var encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        encryptedText += String.fromCharCode((text.charCodeAt(i) - 65 + space) % 26 + 65);
      } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        encryptedText += String.fromCharCode((text.charCodeAt(i) - 97 + space) % 26 + 97);
      } else if (text.charCodeAt(i) === 32) {
        encryptedText += ' ';
      }
    }
    return encryptedText;
  };
  var decipher = (encryptedText, space) => {
    var decryptText = '';
    for (let j = 0; j < encryptedText.length; j++) {
      if (encryptedText.charCodeAt(j) >= 65 && encryptedText.charCodeAt(j) <= 90) {
        decryptText += String.fromCharCode((encryptedText.charCodeAt(j) + 65 - space) % 26 + 65);
      } else if (encryptedText.charCodeAt(j) >= 97 && encryptedText.charCodeAt(j) <= 122) {
        decryptText += String.fromCharCode((encryptedText.charCodeAt(j) + 97 + space) % 26 + 97);
      } else if (encryptedText.charCodeAt(j) === 32) {
        decryptText += ' ';
      }
    }
    return decryptText;
  };

  var clear = () => {
    $('#text').val('');
    $('#text').focus();
  };

  $('.btn-accept').click(() => {
    let text = $('#text').val();
    let optionModdificar = $('input[name="optionsText"]:checked').val();
    var menssage = '';
    // Validación de la opción seleccionada del radio, ya sea cifrado o decifrado
    switch (optionModdificar) {
    case 'cifrado':
      menssage = cipher(text, SPACES_RIGHT);
      break;
    case 'decifrado':
      menssage = decipher(text, SPACES_RIGHT);
      break;
    }
    // Texto cifrado o decifrado
    $('#text-modified').html(`Su frase es : <i> ${text} </i > <br> y el  ${optionModdificar}  es : <b> ${menssage} </b> `);
    clear();
  });
  $('#text').on('keypress', validateText);
};
$(document).ready(begin);
