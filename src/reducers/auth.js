import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  LOGOUT,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  USER_PROFILE_LOADED_SUCCESS,
USER_PROFILE_LOADED_FAIL,
} from "../actions/types";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
  loading: true,
  verified: false,
  success: false,
  profile:null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);

      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      };

      case USER_PROFILE_LOADED_SUCCESS:
        return {
          ...state,
          profile: payload,
        };

    case USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    case PASSWORD_RESET_CONFIRM_SUCCESS:
      return {
        ...state,
        verified: true,
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };

    case LOGIN_FAIL:
    case LOGOUT:
    case SIGNUP_FAIL:
      localStorage.removeItem("access", payload?.access);
      localStorage.removeItem("refresh", payload?.refresh);
      return {
        ...state,
        acess: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };
    case USER_PROFILE_LOADED_FAIL:
      return{
        ...state,
        profile:null,
      }
    case USER_LOADED_FAIL:
      return {
        ...state,
        user: null,
      };

    case PASSWORD_RESET_FAIL:
      return {
        ...state,
        success: false,
      };

    case PASSWORD_RESET_CONFIRM_FAIL:

    case ACTIVATION_SUCCESS:
    case ACTIVATION_FAIL:
      return {
        ...state,
        verified: false,
      };

    default:
      return state;
  }
}
