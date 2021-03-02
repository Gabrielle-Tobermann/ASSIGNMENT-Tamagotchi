import Tama from '../../../Tama.gif';

const petProfile = () => {
  const domImage = `<div id="pet-image"><img src="${Tama}" alt="Tamagotchi gif"/></div>`;
  document.querySelector('#pet').innerHTML = domImage;
};

export default petProfile;
