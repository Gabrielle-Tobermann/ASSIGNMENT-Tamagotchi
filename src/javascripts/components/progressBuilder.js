import printToDom from '../helpers/printToDom';

const progressBuilder = () => {
  const domString = '<div id= progress-msg>Progress</div><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div></div>';
  printToDom('#progress', domString);
};

export default progressBuilder;
