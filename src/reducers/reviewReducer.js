import { LOAD_REVIEWS } from "../actions/reviewActions";

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_REVIEWS:
      let newState = {};
      action.list.reviews.forEach((review) => (newState[review.id] = review));
      return Object.assign(nextState, newState);
    default:
      return state;
  }
};

export default reviewReducer;
