const initialState = {
  newValue: "hehe",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        newValue: action.newValue,
      };
    default:
      return state;
  }
};
export default taskReducer;
