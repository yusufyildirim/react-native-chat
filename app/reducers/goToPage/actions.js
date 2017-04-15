import { GO_TO_PAGE } from './actionTypes';

module.exports = {
  goToPage: (from, to) => {
    return {
      type: GO_TO_PAGE,
      from,
      to,
    };
  },
};
