import React, { Component } from 'react';
import axios from "axios";
import DefaultCurrency from "./Component/DefaultCurrency";
import CurrencyList from "./Component/CurrencyList";
import AddCurrency from "./Component/AddCurrency";
import './App.css';

const currencyName = {
  USD: "US Dollar",
  CAD: "Canadian Dollar",
  IDR: "Indonesian Rupiah",
  GBP: "Great British Pound",
  CHF: "Swiss Franc",
  SGD: "Singapore Dollar",
  INR: "Indian Rupee",
  MYR: "Malaysian Ringgit",
  JPY: "Japanese Yen",
  KRW: "South Korean Won"
};

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
      base: "USD",
      baseAmount: 1.00,
      currencies: [],
      currencyRate: "",
      newCurrency: "CAD",
    };

    this.CurrencyList = this.CurrencyList.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.GetNewCurrency = this.GetNewCurrency.bind(this);
    this.addCurrency = this.addCurrency.bind(this);
    this.removeCurrency = this.removeCurrency.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    axios
      .get("https://api.exchangeratesapi.io/latest?base=USD")
      .then(response => {
        this.setState({
          currencyRate: response.data.rates,
        });
      })
      .catch(error => console.log(error)
    );
  }
  changeHandler(event) {
    let amount = 0;
    if(!isNaN(event.target.value)){
      amount = event.target.value;
      this.fetchData();
    }
    this.setState(prevState => ({
      baseAmount: amount,
    }));
  }

  GetNewCurrency(event) {
    this.setState({
      newCurrency: event.target.value
    });
  }

  CurrencyList(e) {
    document.getElementsByClassName("CurrencyForm")[0].removeAttribute("hidden");
    document.getElementsByClassName("addbutton")[0].setAttribute("hidden", "hidden");
    e.preventDefault();
  }

  addCurrency(e) {
    if (this.state.currencies.find(o => o.curr === this.state.newCurrency)) {
      alert("Selected currency was on the list");
    } else {
      this.fetchData();
      this.setState(prevState => ({
        currencies: [
          ...prevState.currencies,
          {
            curr: prevState.newCurrency,
            name: currencyName[prevState.newCurrency],
            rates: prevState.currencyRate[prevState.newCurrency],
          }
        ]
      }));

    }

    document.getElementsByClassName("CurrencyForm")[0].setAttribute("hidden", "hidden");
    document.getElementsByClassName("addbutton")[0].removeAttribute("hidden");
    e.preventDefault();
  }

  removeCurrency(curr) {
    this.setState(prevState => ({
      currencies: prevState.currencies.filter(obj => obj.curr !== curr)
    }));
  }

  render() {
    return (
      <div className="App">
        <DefaultCurrency
          base={this.state.base}
          name={currencyName[this.state.base]}
          amount={this.state.baseAmount}
          changeHandler={this.changeHandler}
        />  
        <div className="ListWrapper">
          <CurrencyList
            amount={this.state.baseAmount}
            base={this.state.base}
            currencies={this.state.currencies}
            removeCurrency={this.removeCurrency}
          />
          <AddCurrency
            changeHandler={this.GetNewCurrency}
            showHandler={this.CurrencyList}
            addCurrency={this.addCurrency}
            currencyCode={Object.keys(currencyName).filter(
              code => code !== this.state.base
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
