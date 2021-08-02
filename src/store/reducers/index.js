import { RU,EN } from "../actions";
import { data } from "../data";

const initialState = {
  data: data.ru,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RU:
      return {
        ...state,
        data: data.ru,
      };

    case EN:
      return {
        ...state,
        data: data.en,
      };

    default:
      return state;
  }
};
