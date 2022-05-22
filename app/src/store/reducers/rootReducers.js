import { FECTH_PRODUCTS, SET_LOADING, SET_ERROR, SET_INCREMENT, SET_DECREMENT } from "../actions/actionType";

const initialState = {
  products: null,
  page: 1,
  isLoading: true,
  isError: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FECTH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SET_INCREMENT:
      return {
        ...state,
        page: state.page + 1,
      };

    case SET_DECREMENT:
      return {
        ...state,
        page: state.page - 1,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
}
