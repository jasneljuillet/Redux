
const Redux = require('redux');

const reducer = (state = 5) => {
  return state;
};

// Define the store
let store = Redux.createStore(reducer);
console.log(store);
  