import { userActionType } from "../../types/user/user.type";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action?.payload,
        error: null
      };
    case userActionType.SIGN_OUT_SUCCESS:
      return{
        ...state,
        currentUser: null,
        error: null
      }
    case userActionType.SIGN_IN_FAILURE:
    case userActionType.SIGN_OUT_FAILURE: 
    case userActionType.SIGN_UP_FAILURE: 
        return {
            ...state,
            error: action?.payload
        }
    default:
      return state;
  }
};
