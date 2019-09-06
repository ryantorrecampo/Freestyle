let defaultState = {
    word: "houston"
};

const mainReducer = (state = defaultState, action) => {
    if (action.type === "CHANGE_WORD") {
        return {
            ...state,
            word: action.word
        };
    } else {
        return {
            ...state
        };
    }
};

export default mainReducer;
