import {inputText, buttonEncriptar, buttonDesencriptar, buttonCopy, outputText} from './helpers/selectores.js'

import {encriptacion, desencriptacion} from './helpers/replace.js';
import {toggleMessage} from './helpers/toggle-mesagge.js';


buttonEncriptar.addEventListener('click', () => {
  let newText = encriptacion(inputText.value);
  toggleMessage(newText);
})

buttonDesencriptar.addEventListener('click', () => {
  let newText = desencriptacion(inputText.value);
  toggleMessage(newText);
})

buttonCopy.addEventListener('click', () => {

  navigator.clipboard.writeText(outputText.value)
  .then(() => {
    alert('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })

})
