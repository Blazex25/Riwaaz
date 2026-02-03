import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE
} from "./ActionType";

const initialState = {
  paymentLink: null,     
  paymentUpdate: null,  
  loading: false,
  error: null
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {

 
    case CREATE_PAYMENT_REQUEST:
    case UPDATE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentLink: action.payload,
        error: null
      };

    case UPDATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentUpdate: action.payload,
        error: null
      };

    case CREATE_PAYMENT_FAILURE:
    case UPDATE_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
