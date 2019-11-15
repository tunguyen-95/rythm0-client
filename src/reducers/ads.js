import { ALL_ADS, NEW_AD, AD_DELETE_SUCCESS } from "../actions/ads";

export default function(state = [], action = {}) {
  switch (action.type) {
    case ALL_ADS:
      return action.payload;
    case NEW_AD:
      return [action.payload, ...state];
    case AD_DELETE_SUCCESS:
      return state && state.filter(ad => ad.id !== action.payload);
    default:
      return state;
  }
}
