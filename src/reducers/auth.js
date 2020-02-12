import { UPDATE_FIELD_AUTH,
  REGISTER,REDIRECT,APP_LOAD,LOGIN } from "../constants/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
      case REDIRECT:
        return {
          ...state,
          redirectTo:null
        }
      case LOGIN:
      case REGISTER:
        return {
          ...state,
          inProgress: false,
          currentUser:action.error ? null:action.payload.user,
          errors:action.error ? action.payload.errors :null,
          redirectTo:action.error ? null : '/'
        };
      case UPDATE_FIELD_AUTH:
        return {
          ...state,
          [action.key]:action.value
        }
      case APP_LOAD:
        return {
          ...state,
          token:action.token ? action.token : null,
          currentUser:action.error ? null : action.payload.user,
          errors: action.error ? action.payload.errors : null
        }
      default:
        return state;
    }
  };