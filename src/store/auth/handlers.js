import produce from 'immer';

const initialState = {
  profile: null,
};

export const authenticate = (state, {payload}) => {
  return produce(state, (draft) => {
    draft.profile = payload;
  });
};

export default initialState;
