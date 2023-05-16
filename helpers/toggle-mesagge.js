import {outputText, contentOutputMessage, contentOutputNoMessage} from '../helpers/selectores.js'

const toggleMessage = (text) => {
  if(text !== "") {
    outputText.value = "";
    outputText.value = text;
    contentOutputMessage.classList.remove('invisible');
    contentOutputNoMessage.classList.add('invisible');
  } else {
    outputText.value = "";
    contentOutputMessage.classList.add('invisible');
    contentOutputNoMessage.classList.remove('invisible');
  }
}

export {
  toggleMessage
}