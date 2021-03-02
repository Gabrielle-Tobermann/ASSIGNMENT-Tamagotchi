const playQuadrant = [
  {
    name: 'PLAY',
    button1: {
      label: 'Super Fun Activity',
      id: 'super-fun-act'
    },
    button2: {
      label: 'Fun Activity',
      id: 'fun-act'
    },
    score: {
      type: 'Fun',
      val: 50
    }
  }
];

const fun = [50];

const funActivity = (e) => {
  if (e.target.id === 'fun-act') {
    const lastIndex = fun[fun.length - 1];
    let newValue = lastIndex + 2;
    if (newValue > 100) {
      newValue = 100;
    }
    fun.push(newValue);
    document.querySelector('#score--Fun').innerHTML = `Fun Score: ${fun[fun.length - 1]}`;
  }
};

const superFunActivity = (e) => {
  if (e.target.id === 'super-fun-act') {
    const lastIndex = fun[fun.length - 1];
    let newValue = lastIndex + 50;
    if (newValue > 100) {
      newValue = 100;
    }
    fun.push(newValue);
    document.querySelector('#score--Fun').innerHTML = `Fun Score: ${fun[fun.length - 1]}`;
  }
};

export {
  playQuadrant, funActivity, superFunActivity, fun
};
