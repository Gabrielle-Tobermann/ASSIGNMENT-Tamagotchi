import printToDom from '../helpers/printToDom';

const progressBuilder = () => {
  const domString = '<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>';

  printToDom('#progress', domString);
};

export default progressBuilder;
