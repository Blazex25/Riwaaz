import { api } from "../../config/apiConfig";
import { 
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_SUCCESS,
    UPDATE_PAYMENT_SUCCESS,
} from "./ActionType";

export const createPayment = (orderID) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.post(`/api/payments/${ orderID }`, {});
        dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
        console.log("createPayment data", data);
        if (data.paymentLinkUrl) {
            window.location.href = data.paymentLinkUrl;
        }
    } catch (error) {
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
};

export const updatePayment = (reqdata) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST });
    try {
        const { data } = await api.get(`/api/payments?paymentid=${reqdata.paymentId}&orderid=${reqdata.orderId}`)
        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data });
        console.log("updatePayment data", data);
    }catch (error) {
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
}