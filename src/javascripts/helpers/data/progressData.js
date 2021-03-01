import { full } from '../helpers/data/eatData';
import { fun } from '../helpers/data/playData';
import { strength } from '../helpers/data/fightData';
import { energy } from '../helpers/data/sleepData';

const progressUpdate = () => {
  const average = (full[full.length - 1] + fun[fun.length - 1] + strength[strength.length - 1] + energy[energy.length - 1]) / 4;
  document.querySelector('#progress').innerHTML = `<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${average}" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>`;
}

export default progressUpdate;
