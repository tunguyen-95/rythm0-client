import { AD_FETCHED, AD_UPDATE_SUCCESS, OFFER_MADE } from '../actions/ads';

export default function(state = null, action) {
  switch (action.type) {
    case AD_FETCHED:
      return action.payload;
    case AD_UPDATE_SUCCESS:
      return action.payload;
    case OFFER_MADE:
      return { ...state, offerMade: true };
    default:
      return state;
  }
}
