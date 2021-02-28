const eatQuadrant = [
  {
    name: 'EAT',
    button1: {
      label: 'Healthy Food',
      id: 'healthy-food'
    },
    button2: {
      label: 'Unhealthy Food',
      id: 'unhealthy-food'
    },
    score: {
      type: 'Fullness',
      val: 100
    }
  }
];

const full = [100];
const healthy = (e) => {
  if (e.target.id === 'healthy-food') {
    const lastIndex = full[full.length - 1];
    let newValue = lastIndex + 10;
    if (newValue > 100) {
      newValue = 100;
    }
    full.push(newValue);
    document.querySelector('#score--Fullness').innerHTML = `Fullness Score: ${full[full.length - 1]}`;
  }
};

const unhealthy = (e) => {
  if (e.target.id === 'unhealthy-food') {
    const lastIndex = full[full.length - 1];
    const newValue = lastIndex - 3;
    full.push(newValue);
    document.querySelector('#score--Fullness').innerHTML = `Fullness Score: ${full[full.length - 1]}`;
  }
};

export {
  eatQuadrant, full, healthy, unhealthy
};
