import { full } from './eatData';
import { fun } from './playData';
import { strength } from './fightData';
import { energy } from './sleepData';

const progressUpdate = (e) => {
  let average = 0;
  if (e.target.type === 'button') {
    average = (full[full.length - 1] + fun[fun.length - 1] + strength[strength.length - 1] + energy[energy.length - 1]) / 4;
    if (average >= 75) {
      document.querySelector('#progress').innerHTML = `<div id= progress-msg>Progress</div><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="${average}" aria-valuemin="0" aria-valuemax="100" style="width: ${average}%"></div></div>`;
    } else if (average > 50 && average < 75) {
      document.querySelector('#progress').innerHTML = `<div id= progress-msg>Progress</div><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${average}" aria-valuemin="0" aria-valuemax="100" style="width: ${average}%"></div></div>`;
    } else if (average > 25 && average <= 50) {
      document.querySelector('#progress').innerHTML = `<div id= progress-msg>Progress</div><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="${average}" aria-valuemin="0" aria-valuemax="100" style="width: ${average}%"></div></div>`;
    } else if (average <= 25) {
      document.querySelector('#progress').innerHTML = `<div id= progress-msg>Progress</div><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="${average}" aria-valuemin="0" aria-valuemax="100" style="width: ${average}%"></div></div>`;
    }
  }
};

export default progressUpdate;
