import React from "react";

function CurrencyList(props) {
  return (
    <div className="CurrencyList">
      {props.currencies.map(currency => (
	    <div className="Currency" key = {currency.name}>
	        <div className="WrapDetail">
	          <div className="row">
	            <h4>{currency.curr}</h4>
	            <span>{(props.amount * currency.rates).toLocaleString("en-US",{ minimumFractionDigits: 2 })}</span>
	          </div>
	          <div className="row">
	            <p className="CurrencyInfo">
	              {currency.curr} - {currency.name}
	            </p>
	          </div>
	          <div className="row">
	            <p className="ratesInfo">
	              1 {props.base} = {currency.curr} {currency.rates.toLocaleString("en-US",{ minimumFractionDigits: 2 })}
	            </p>
	          </div>
	        </div>
	        <div
	          className="removeButton"
	          onClick={() => props.removeCurrency(currency.curr)}
	        >
	          ( - )
	        </div>
	      </div>
	    
	  ))}
    </div>
  );
}

export default CurrencyList;
