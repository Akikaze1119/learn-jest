const { getUserName } = require('./user');

function greetUser() {
  const name = getUserName();
  return `Hello, ${name}!`;
}

module.exports = { greetUser };
