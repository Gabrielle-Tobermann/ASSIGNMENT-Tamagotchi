import '../styles/main.scss';
import { healthy, unhealthy } from './helpers/data/eatData';
// import eat from './components/eat';
import printToDom from './helpers/printToDom';

const quadrants = [
  {
    name: 'EAT',
    button1: {
      label: 'Healthy Food',
      id: 'healthy-food'
    },
    button2: {
      label: 'Unhealthy Food',
      id: 'unhealthy-food'
    },
    score: {
      type: 'Fullness',
      val: 100
    }
  },
  {
    name: 'PLAY',
    button1: 'Super fun activity',
    button2: 'Fun activity',
    score: {
      type: 'Fun',
      val: 50
    }
  },
];

const quadBuilder = (arr, i, divId, callback1, callback2) => {
  let domString = '';
  domString += `<div id ="name--${arr[i].name}">${arr[i].name}</div><div><div id="score--${arr[i].score.type}">${arr[i].score.type} Score: ${arr[i].score.val} </div><button type="button" class="btn btn-primary" id="${arr[i].button1.id}">${arr[i].button1.label}</button><button type="button" class="btn btn-primary" id="${arr[i].button2.id}">${arr[i].button2.label}</button></div>`;
  printToDom(divId, domString);
  document.querySelector(`#${arr[i].button1.id}`).addEventListener('click', callback1);
  document.querySelector(`#${arr[i].button2.id}`).addEventListener('click', callback2);
};

const init = () => {
  quadBuilder(quadrants, 0, '#eat', healthy, unhealthy);
  // quadBuilder(quadrants, 1, '#play');
};

init();
