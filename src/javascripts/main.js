import '../styles/main.scss';
import printToDom from './helpers/printToDom';

let full = 100;
const healthy = (e) => {
  if (e.target.id === 'healthy-btn') {
    full += 10;
  }
  document.querySelector('#full').innerHTML = full;
};

const unhealthy = (e) => {
  if (e.target.id === 'unhealthy-btn') {
    full -= 3;
  }
  document.querySelector('#full').innerHTML = full;
};

const eatButtons = () => {
  const domString = `<div id="full">${full}</div><div><button type="button" class="btn btn-primary" id="healthy-btn">Healthy food</button><button type="button" class="btn btn-primary" id="unhealthy-btn">Unhealthy food</button></div>`;

  printToDom('#eat', domString);
  document.querySelector('#healthy-btn').addEventListener('click', healthy);
  document.querySelector('#unhealthy-btn').addEventListener('click', unhealthy);
};

const init = () => {
  eatButtons();
};

init();
