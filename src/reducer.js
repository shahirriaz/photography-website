export const initialState = {
  user: {},
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SEND_USER":
      return {
        ...state,
        user: action.user,
      };
  }
};

export default reducer;
