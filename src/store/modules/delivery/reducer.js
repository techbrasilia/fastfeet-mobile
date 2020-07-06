import produce from 'immer';

const INITIAL_STATE = {
  delivery: null,
  loading: false,
  retorno: null,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/UPDATE_REQUEST': {
        draft.delivery = action.payload;
        draft.loading = true;

        break;
      }
      case '@delivery/UPDATE_SUCCESS': {
        draft.delivery = action.payload.delivery;
        draft.loading = false;
        break;
      }
      case '@delivery/UPDATE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
