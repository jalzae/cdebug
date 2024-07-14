require('dotenv').config();

function log(...args) {
  const newDate = new Date().toLocaleString()
  const nodeEnv = process.env.NODE_ENV || 'development';
  console.log(process.env.NODE_ENV)
  if (nodeEnv == 'development') console.log(`log ${newDate} :`, ...args)
}


module.exports = {
  log
}