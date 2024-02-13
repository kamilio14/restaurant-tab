import { MyContext } from "./Context";
import { React, useContext } from "react";

const SingleOrder = ({ orderName, id, onCancel, date, item, price }) => {
  return (
    <div className="singleOrder">
      <div className="date-hour">
        <p>{date}</p>
        <p>17:57</p>
      </div>

      <div className="item-price">
        <p>1 x {item}</p>
        <p>{price}</p>
      </div>

      <div className="cancel-name">
        <div className="btn-cancel">
          <button onClick={() => onCancel(id)} className="btn-one">
            x
          </button>
          <p>Cancel</p>
        </div>
        <div className="order-name">
          <h4>{orderName}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
