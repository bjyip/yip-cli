const chalk = require('chalk');

const success = (...info) => {
  return chalk.green(info);
}

const error = (...info) => {
  return chalk.red(info);
}

const clear = () => {
  console.clear();
}

module.exports = {
  success,
  error,
  clear
}