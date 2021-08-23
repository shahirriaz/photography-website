export const initialState = {
  user: {},
  ref: null,
  inputUser: {},
  date: null,
  timePicked: null,
  errorInput: {},
  timeIsVisible: false,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SEND_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SEND_REF":
      return {
        ...state,
        ref: action.ref,
      };

    case "SEND_DATE":
      return {
        ...state,
        date: action.date,
      };
    case "SEND_TIME":
      return {
        ...state,
        timePicked: action.timePicked,
      };
    case "SEND_INPUTUSER":
      return {
        ...state,
        inputUser: action.inputUser,
      };
    case "SEND_INPUT_ERROR":
      return {
        ...state,
        errorInput: action.errorInput,
      };
    case "SEND_TIMEISVISIBLE":
      return {
        ...state,
        timeIsVisible: action.timeIsVisible,
      };

    default:
      return state;
  }
};

export default reducer;
