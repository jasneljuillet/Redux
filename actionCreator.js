const action = {
  type: "LOGIN",
};
// Define an action creator here:

function actionCreator(action) {
  return action;
}

console.log(actionCreator(action)); // { type: 'LOGIN' }
