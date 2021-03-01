import { full } from './eatData';
import { fun } from './playData';
import { strength } from './fightData';
import { energy } from './sleepData';

const progressUpdate = (e) => {
  let average = 0;
  if (e.target.type === 'button') {
    average = (full[full.length - 1] + fun[fun.length - 1] + strength[strength.length - 1] + energy[energy.length - 1]) / 4;
    document.querySelector('#progress').innerHTML = `<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${average}" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>`;
    console.warn(average);
  }
};

export default progressUpdate;
