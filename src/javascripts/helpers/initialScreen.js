import {
  eatQuadrant, healthy, unhealthy
} from './data/eatData';
import {
  playQuadrant, funActivity, superFunActivity
} from './data/playData';
import {
  fight, fightQuadrant, runAway
} from './data/fightData';
import {
  sleepQuadrant, nap, deepSlumber
} from './data/sleepData';
import progressBuilder from '../components/progressBuilder';
import petProfile from '../components/petProfile';
import quadBuilder from '../components/quadBuilder';

const initialScreen = () => {
  progressBuilder();
  quadBuilder(eatQuadrant, 0, '#eat', healthy, unhealthy);
  quadBuilder(playQuadrant, 0, '#play', funActivity, superFunActivity);
  quadBuilder(fightQuadrant, 0, '#fight', runAway, fight);
  quadBuilder(sleepQuadrant, 0, '#sleep', nap, deepSlumber);
  petProfile();
};

export default initialScreen;
