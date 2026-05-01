import React from "react";
import Delivery from "../assets/delivery.png";
import "./TrackOrder.css";

const TrackOrder = () => {
  return (
    <section className="track-order">
      <h2>Track Your Order!</h2>

      <div className="track-box">
        <img  className="truck-img" src={Delivery} alt="Delivery logo" />
        <p>You have no orders yet.</p>
        <p>Start exploring on our Explore page!</p>
      </div>
    </section>
  );
};

export default TrackOrder;