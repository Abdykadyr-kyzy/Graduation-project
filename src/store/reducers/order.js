import { ADD_ORDER, DELETE_ORDER } from "../actions";

const orderLocal = JSON.parse(localStorage.getItem('orders'))
const defaultState = {
  orders: orderLocal || [],
  totalPrice: 0,
  totalCount: 0,
};
export const orderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      // findIndex
      let is_chosen1 = state.orders.findIndex(
        (item) => item.title === action.payload.title
      );
      if (is_chosen1 !== -1) {
        //стордун orders ключтун копиясын жасайбыз
        let arr1 = [...state.orders];
        // orders тен is_chosen индекс менен бизге керектуу элементтти таап count деген ключун перезапись кылабыз
        arr1[is_chosen1].count = arr1[is_chosen1].count + 1;
        arr1[is_chosen1].sum = arr1[is_chosen1].sum + action.payload.price;
        return {
          ...state,
          orders: arr1,
        };
      } else {
        return {
          ...state,
          orders: [
            ...state.orders,
            {
              title: action.payload.title,
              price: action.payload.price,
              count: 1,
              sum: action.payload.price
            },
          ],
        };
      }
      case DELETE_ORDER:
      let is_chosen = state.orders.findIndex(
        (item) => item.title === action.payload.title
      );
      let arr = [...state.orders];
      if (is_chosen !== -1) {
        if(arr[is_chosen].count > 1) {
          arr[is_chosen].count = arr[is_chosen].count - 1;
          arr[is_chosen].sum = arr[is_chosen].sum + action.payload.price;
        return {
          ...state,
          orders: arr,
        };
        } else {
          return {
            ...state,
            orders: arr.filter(el => el.title !== arr[is_chosen].title)
          }
        }
      };
    default:
      return state;
  }
};