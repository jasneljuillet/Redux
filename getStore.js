
const Redux = require('redux');

const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Get State from the Redux StorePassed
  const currentState = store.getState()
  console.log(currentState) //5
  