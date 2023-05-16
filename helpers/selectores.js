const $ = (selector) => document.querySelector(selector);

const inputText = $('#input-text');
const outputText = $('#output-text');

const buttonEncriptar = $('#encriptar');
const buttonDesencriptar = $('#desencriptar');
const buttonCopy = $('#copy-text');

const contentOutputMessage = $('#content-output-message');
const contentOutputNoMessage = $('#content-output-no-message');

export {
  inputText,
  outputText,
  buttonEncriptar,
  buttonDesencriptar,
  buttonCopy,
  contentOutputMessage,
  contentOutputNoMessage
}