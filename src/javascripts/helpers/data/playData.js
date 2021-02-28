const playQuadrant = [
  {
    name: 'PLAY',
    button1: {
      label:'Super Fun Activity',
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
  if (e.target.id === 'super-fun-act') {
    const lastIndex = fun[fun.length - 1];
    const newValue = lastIndex + 2;
    fun.push(newValue);
    document.querySelector('#score--Fun').addEventListener.innerHTML = `Fun Score: ${fun[fun.length - 1]}`;
  }
};

const superFunActivity = (e) => {
  if (e.target.id === 'fun-act') {
    const lastIndex = fun[fun.length - 1];
    const newValue = lastIndex + 50;
    fun.push(newValue);
    document.querySelector('#score--Fun').addEventListener.innerHTML = `Fun Score: ${fun[fun.length - 1]}`;
  }
};

export default playQuadrant;
