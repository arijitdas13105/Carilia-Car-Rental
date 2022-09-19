import axios from "axios";
import { message } from "antd";
import { GET_ALL_BOOKINGS } from "../../constants/allConstant";

export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post("https://carilia.herokuapp.com/api/bookings/bookcar", reqObj);

    message.success("Your car booked successfully");
    setTimeout(() => {
      window.location.href = "/userbookings";
    }, 1000);
  } catch (error) {
    console.log(error);
    message.error("Something went wrong , please try later");
  }
};
export const getallBookings = () => async (dispatch) => {
  try {
    const response = await axios.get("https://carilia.herokuapp.com/api/bookings/getallbookings");
    dispatch({ type: GET_ALL_BOOKINGS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
