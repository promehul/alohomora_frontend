import { AuthTypes } from "../constants/actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case AuthTypes.LOGIN:
      return { ...state, authenticated: true, token: action.payload };
    case AuthTypes.LOGOUT:
      return { ...state, authenticated: false, token: null };
  }
  return state;
}
