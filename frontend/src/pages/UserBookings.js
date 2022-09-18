import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getallBookings } from "../redux/actions/bookingActions";
import moment from "moment";

const UserBookings = () => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingReducer);
  const user=JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    dispatch(getallBookings());
  }, []);

  return (
    <>
      {/* {bookings.filter(o=>o.user ==user._id).map((booking) => {
        return <h1>{booking.car.name }</h1>;
      })} */}

      <div className="car-details-container">
        <div className="car-details-items">
          {bookings.filter(o=>o.user ==user._id) .map((item) => {
           
            return (
              <>
                <div className="single-car-details-item" >
                 <div className="single-car-details-image" >
               <Link to={`/booking/${item.car._id}`} >
               <img src={item.car.image} />
               </Link> 

                 </div>
                    <div className="product-info">
                      <h3 className="product-name">Car Name : {item.car.name}</h3>
                      <h4 className="product-price">
                      <p>Transaction Id : <b>{item.transactionId}</b></p>

                      <p>Total hours : <b>{item.totalHours}</b></p>
                    <p >Rent per hour : <b>{item.car.rentPerHour}</b></p>
                    <p>Total amount : <b>{item.totalAmount}</b></p>
                    <p>Date of booking: <b>{moment(item.createdAt).format('MMM DD yyyy')}</b></p>

                      </h4>
                     
                    </div>
                  
                </div>
              </>
            );
          })}
        </div>

        
      </div>

    </>
  );
};

export default UserBookings;
