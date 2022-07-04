export const addTask = (value) => {
  return {
    type: "ADD",
    newValue: value,
  };
};
