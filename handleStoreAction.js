const Redux = require("redux");

const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type == "LOGIN") {
    return (state = { login: true });
  }
  // Change code above this line

  // return the current state
  return state;
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};


