let defaultState = {
  arr: [{ id: 0, word: "" }]
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "LOAD_WORDS") {
    return {
      ...state,
      arr: action.arr
    };
  } else {
    return {
      ...state
    };
  }
};

export default mainReducer;
