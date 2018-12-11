import React from "react";

function DefaultCurrency(props) {
  return (
    <div className="DefaultCurrency fixed-top">
      <h3>
        {props.base} - {props.name}
      </h3>
      <div className="InputWrapper">
        <label>{props.base}</label>
        <input         
          value={props.amount.toLocaleString("en-US",{ minimumFractionDigits: 2 })}
          onChange={props.changeHandler}
        />
      </div>
    </div>
  );
}

export default DefaultCurrency;
