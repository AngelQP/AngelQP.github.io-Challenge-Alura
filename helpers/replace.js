import letterReplace from './letters-Replace.js';

const returnLetter = (letter) => {
  return letterReplace[letter] ?? letter;
}

const encriptacion = (text) => {
  const arrayText = text.split(''); // Transforma en un array la palabra
  let newText = '';
  
  for(let i = 0; i < arrayText.length; i++) {
    newText += returnLetter(arrayText[i]); // Reemplaza la vocal por su equivalente
  }

  return newText
}

const desencriptacion = (text) => {
  let newText = text;
  for (const [key, value] of Object.entries(letterReplace)){
    newText = newText.replaceAll(`${value}`,`${key}`); // Recorre el obj buscando reemplaza su equivalente
  }
  return newText
}

export {
  encriptacion,
  desencriptacion
}