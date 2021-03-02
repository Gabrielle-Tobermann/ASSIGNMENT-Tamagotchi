import '/Users/gabri/Desktop/tamagotchi.gif'
const petProfile = () => {
  const domImage = `<img src="${GinjiCloseup}" alt="Tamagotchi gif"/>`;
  document.querySelector('#pet').innerHTML = domImage;
};

export default petProfile;
