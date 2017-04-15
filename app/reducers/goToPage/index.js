import { GO_TO_PAGE } from './actionTypes';

const goToPageReducer = (state = {}, action) => {
  switch (action.type) {
    case GO_TO_PAGE:
      return {
        from: action.from,
        to: action.to,
      };

    default:
      return state;
  }
};

module.exports = goToPageReducer;
