import '../styles/main.scss';
import printToDom from './helpers/printToDom';

const full = [100];
const healthy = (e) => {
  if (e.target.id === 'healthy-btn') {
    const lastIndex = full[full.length - 1];
    const newValue = lastIndex + 10;
    full.push(newValue);
    document.querySelector('#full').innerHTML = full[full.length - 1];
  }
};

const unhealthy = (e) => {
  if (e.target.id === 'unhealthy-btn') {
    const lastIndex = full[full.length - 1];
    const newValue = lastIndex - 3;
    full.push(newValue);
    document.querySelector('#full').innerHTML = full[full.length - 1];
  }
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