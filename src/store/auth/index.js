import {handleActions, createActions} from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  AUTHENTICATE: (user) => user,
});

const reducer = handleActions(
  new Map([[actions.authenticate, handlers.authenticate]]),
  initialState,
);

export default reducer;
