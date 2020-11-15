const Redux = require("redux");

const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:
const dispatchActionToStore = store.dispatch(loginAction());
console.log(dispatchActionToStore);
