// import progressUpdate from './progressData';

const strength = [100];

const fightQuadrant = [
  {
    name: 'FIGHT',
    button1: {
      label: 'Run Away',
      id: 'run-away'
    },
    button2: {
      label: 'Fight',
      id: 'fight',
    },
    score: {
      type: 'Strength',
      val: 100
    }
  }
];

const runAway = (e) => {
  if (e.target.id === 'run-away') {
    const lastIndex = strength[strength.length - 1];
    let newValue = lastIndex + 1;
    if (newValue > 100) {
      newValue = 100;
    }
    strength.push(newValue);
    document.querySelector('#score--Strength').innerHTML = `Strength Score: ${strength[strength.length - 1]}`;
    // progressUpdate();
  }
};

const fight = (e) => {
  if (e.target.id === 'fight') {
    const lastIndex = strength[strength.length - 1];
    const newValue = lastIndex - 10;
    strength.push(newValue);
    document.querySelector('#score--Strength').innerHTML = `Strength Score: ${strength[strength.length - 1]}`;
    // progressUpdate();
  }
};

export {
  fightQuadrant, runAway, fight, strength
};
