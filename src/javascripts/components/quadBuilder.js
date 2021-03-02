import printToDom from '../helpers/printToDom';
import progressUpdate from '../helpers/data/progressData';

const quadBuilder = (arr, i, divId, callback1, callback2) => {
  let domString = '';
  domString += `<div id ="name--${arr[i].name}">${arr[i].name}</div><div><div id="score--${arr[i].score.type}">${arr[i].score.type} Score: ${arr[i].score.val} </div><button type="button" class="btn btn-outline-dark btn-sm m-2 rounded-0" id="${arr[i].button1.id}">${arr[i].button1.label}</button><button type="button" class="btn btn-outline-dark btn-sm m-2 rounded-0" id="${arr[i].button2.id}">${arr[i].button2.label}</button></div>`;
  printToDom(divId, domString);
  document.querySelector(`#${arr[i].button1.id}`).addEventListener('click', callback1);
  document.querySelector(`#${arr[i].button2.id}`).addEventListener('click', callback2);
  document.querySelector(`#${arr[i].button1.id}`).addEventListener('click', progressUpdate);
  document.querySelector(`#${arr[i].button2.id}`).addEventListener('click', progressUpdate);
};

export default quadBuilder;
