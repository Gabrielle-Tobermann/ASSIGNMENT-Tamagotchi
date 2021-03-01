const energy = [50];

const sleepQuadrant = [
  {
    name: 'SLEEP',
    button1: {
      label: 'Nap',
      id: 'nap'
    },
    button2: {
      label: 'Deep Slumber',
      id: 'deep-slumber'
    },
    score: {
      type: 'energy',
      val: 50
    }
  }
];

const nap = (e) => {
  if (e.target.id === 'nap') {
    const lastIndex = energy[energy.length - 1];
    let newValue = lastIndex + 50;
    if (newValue > 100) {
      newValue = 100;
    }
    energy.push(newValue);
    document.querySelector('#score--energy').innerHTML = `Energy Score: ${energy[energy.length - 1]}`;
  }
};

const deepSlumber = (e) => {
  if (e.target.id === 'deep-slumber') {
    const lastIndex = energy[energy.length - 1];
    let newValue = lastIndex + 60;
    if (newValue > 100) {
      newValue = 100;
    }
    energy.push(newValue);
    document.querySelector('#score--energy').innerHTML = `Energy Score: ${energy[energy.length - 1]}`;
  }
};

export { sleepQuadrant, nap, deepSlumber };
