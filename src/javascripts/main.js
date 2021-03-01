import '../styles/main.scss';
import printToDom from './helpers/printToDom';
import {
  eatQuadrant, healthy, unhealthy
} from './helpers/data/eatData';
import {
  playQuadrant, funActivity, superFunActivity
} from './helpers/data/playData';

const quadBuilder = (arr, i, divId, callback1, callback2) => {
  let domString = '';
  domString += `<div id ="name--${arr[i].name}">${arr[i].name}</div><div><div id="score--${arr[i].score.type}">${arr[i].score.type} Score: ${arr[i].score.val} </div><button type="button" class="btn btn-primary" id="${arr[i].button1.id}">${arr[i].button1.label}</button><button type="button" class="btn btn-primary" id="${arr[i].button2.id}">${arr[i].button2.label}</button></div>`;
  printToDom(divId, domString);
  document.querySelector(`#${arr[i].button1.id}`).addEventListener('click', callback1);
  document.querySelector(`#${arr[i].button2.id}`).addEventListener('click', callback2);
};

const init = () => {
  quadBuilder(eatQuadrant, 0, '#eat', healthy, unhealthy);
  quadBuilder(playQuadrant, 0, '#play', funActivity, superFunActivity);
};

init();
