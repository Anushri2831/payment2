import React from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  return (
    <div className="payment-container">
      {/* Left Side Form */}
      <div className="payment-form">
        <div className="header">
          <h2>AceCoinPay</h2>
          <div className="timer">
            <span style={{border:"5px solid black",color:"white", padding:"5px", borderRadius:"6px", marginLeft:"12px", backgroundColor:"black"}}>0</span>
            <span style={{border:"5px solid black",color:"white", padding:"5px", borderRadius:"6px", marginLeft:"4px", backgroundColor:"black"}}>1</span>
            <span style={{padding:"3px", margin:"5px"}}>:</span>
            <span style={{border:"5px solid black",color:"white", padding:"5px", borderRadius:"6px", marginLeft:"12px", backgroundColor:"black"}}>1</span>
            <span style={{border:"5px solid black",color:"white", padding:"5px", borderRadius:"6px", marginLeft:"4px", backgroundColor:"black"}}>9</span>
          </div>
        </div>

        <label>Card Number</label>
        <div className="input-group">
          <input type="text" value="2412 - 7512 - 3412 - 3456" disabled />
          <img src="mastercard-logo.png" alt="Card Logo" />
        </div>

        <label>CVV Number</label>
        <div className="input-group">
          <input type="text" placeholder="Enter CVV" />
        </div>

        <label>Expiry Date</label>
        <div className="expiry-group">
          <input type="text" placeholder="MM" />
          <span>/</span>
          <input type="text" placeholder="YY" />
        </div>

        <label>Password</label>
        <div className="input-group">
          <input type="password" placeholder="Enter your password" />
          <img src="lock-icon.png" alt="Lock" />
        </div>

        <button className="pay-btn">Pay Now</button>
      </div>

      {/* Right Side Summary */}
      <div className="payment-summary">
        <div className="card-preview">
          <div className="chip"></div>
          <p>**** 3456</p>
          <p>09/22</p>
        </div>

        <div className="order-details">
          <p>Company: Apple</p>
          <p>Order Number: 126401</p>
          <p>Product: MacBook Air</p>
          <p>VAT (20%): $100.00</p>
          <h3>You have to Pay: <span>$549.99 USD</span></h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;