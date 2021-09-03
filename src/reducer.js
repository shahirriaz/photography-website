export const initialState = {
  user: {},
  ref: null,
  inputUser: {},
  date: null,
  timePicked: null,
  errorInput: {},
  service: [],
  serviceFromShowCase: [],
  storeDate: null,
  storeTimeStamp: null,
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
    case "SEND_SERVICE":
      return {
        ...state,
        service: action.service,
      };
    case "SEND_SERVICE_FROM_SHOWCASE":
      return {
        ...state,
        serviceFromShowCase: action.serviceFromShowCase,
      };
    case "SEND_DATE-TO-GLOBAL": //sendng it here so it persists on form/page navigation
      return {
        ...state,
        storeDate: action.storeDate,
      };
    case "SEND_SELECTED-TIMESTAMP":
      return {
        ...state,
        storeTimeStamp: action.storeTimeStamp,
      };

    default:
      return state;
  }
};

export default reducer;
