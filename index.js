require('dotenv').config();

function log(...args) {
  const newDate = new Date().toLocaleString()
  const nodeEnv = process.env.NODE_ENV || 'development';
  if (nodeEnv == 'development') console.log(`log ${newDate} :`, ...args)
}

function note(...args) {
  const newDate = new Date().toLocaleString()
  const nodeEnv = process.env.NODE_ENV || 'development';
  if (nodeEnv == 'production') console.log(`log ${newDate} :`, ...args)
}


module.exports = {
  log, note
}