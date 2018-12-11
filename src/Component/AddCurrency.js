import React from "react";

function AddCurrency(props) {
  return (
    <div className="AddCurrency">
      <div className="CurrencyForm" hidden>
        <select
          value={props.newCurr}
          onChange={props.changeHandler}
        >
          {props.currencyCode.map(code => <option key={code} value={code}>{code}</option>)};
        </select>
        <button onClick={props.addCurrency}>
          Submit
        </button>
      </div>
      <div className="addbutton" onClick={props.showHandler}>
        <span>(+) Add More Currencies</span>
      </div>
    </div>
  );
}

export default AddCurrency;
