import '../styles/main.scss';
import printToDom from './helpers/printToDom';
import {
  eatQuadrant, healthy, unhealthy
} from './helpers/data/eatData';
import {
  playQuadrant, funActivity, superFunActivity
} from './helpers/data/playData';
import { fight, fightQuadrant, runAway } from './helpers/data/fightData';
import { sleepQuadrant, nap, deepSlumber } from './helpers/data/sleepData';
import progressBuilder from './components/progressBuilder';

const quadBuilder = (arr, i, divId, callback1, callback2) => {
  let domString = '';
  domString += `<div id ="name--${arr[i].name}">${arr[i].name}</div><div><div id="score--${arr[i].score.type}">${arr[i].score.type} Score: ${arr[i].score.val} </div><button type="button" class="btn btn-outline-dark btn-sm m-2 rounded-0" id="${arr[i].button1.id}">${arr[i].button1.label}</button><button type="button" class="btn btn-outline-dark btn-sm m-2 rounded-0" id="${arr[i].button2.id}">${arr[i].button2.label}</button></div>`;
  printToDom(divId, domString);
  document.querySelector(`#${arr[i].button1.id}`).addEventListener('click', callback1);
  document.querySelector(`#${arr[i].button2.id}`).addEventListener('click', callback2);
};

const init = () => {
  progressBuilder();
  quadBuilder(eatQuadrant, 0, '#eat', healthy, unhealthy);
  quadBuilder(playQuadrant, 0, '#play', funActivity, superFunActivity);
  quadBuilder(fightQuadrant, 0, '#fight', runAway, fight);
  quadBuilder(sleepQuadrant, 0, '#sleep', nap, deepSlumber);
};

init();
