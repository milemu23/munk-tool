// package to bring in color
const chalk = require('chalk');

const bump = (currentVer, typeofIncrement) => {
  // major [0]
  // minor [1]
  // patch [2]
  const aryVers = currentVer.split('.');

  for (var i in aryVers) {
    aryVers[i] = parseInt(aryVers[i], 10);
  }

  if (typeofIncrement.toLowerCase() === 'patch') {
    aryVers[2] += 1;
  } else if (typeofIncrement.toLowerCase() === 'minor') {
    aryVers[2] = 0;
    aryVers[1] += 1;
  } else if (typeofIncrement.toLowerCase() === 'major') {
    aryVers[2] = 0;
    aryVers[1] = 0;
    aryVers[0] += 1;
  }
  return aryVers.join('.');
};


// setup output for tool
const debug = (title, object, status) => {
  // if DEBUG=true is set when the server is started
  if (process.env.DEBUG === 'true') {
    const sep = '\n*********DEBUG*********\n';
    const out = sep + title + sep;
    // logs date
    const date = new Date().toLocaleString();

    // set colors to be used
    const success = chalk.bold.white.bgGreen;
    const error = chalk.bold.white.bgRed;
    const warn = chalk.bold.white.bgYellow;

    // store content
    const body = object;
    // not sure why this isn't working below, commenting out for now
    // it causes an error with my unit testing
    // status = status.toLowerCase();

    // if there is no title
    if (!title) {
      title = 'There is no title.'
    }
    // if there is no body
    if (!body) {
      title = 'There is no message.'
    }
    // setup format for the message
    const msgFormat = `${out} Object: "${body}" \n\nTIME: ${date}`;

  // if the status is any of these...
  switch(status) {
    case 'error!':
    case 'error':
    case 'err':
    // status is error
      console.error(error('\n' + status + ' ' + msgFormat + '\n'));
      break;

    case 'success!':
    case 'success':
    // status is success
      console.log(success('\n' + status + ' ' + msgFormat + '\n'));
      break;

    case 'warn':
    case 'warning!':
    case 'warning':
      // status is warning
      console.warn(warn('\n' + status + ' ' + msgFormat + '\n'));
      break;

  }
  }
};

exports.debug = debug;
exports.bump = bump;
