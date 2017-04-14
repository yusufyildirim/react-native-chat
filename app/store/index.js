import { createStore } from 'redux';
import { goToPage } from 'app/reducers';

const store = createStore(goToPage);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
