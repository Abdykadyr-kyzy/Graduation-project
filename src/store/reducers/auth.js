import  {RU,EN}  from "../actions"
import {data} from '../enru'

const initialState = {
  data: data.ru,
};

export const authReducer = (state = initialState, action) => {

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