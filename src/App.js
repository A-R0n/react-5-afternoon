import React, { Component } from 'react';
import './App.css';
import router from './router';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  constructor(){
    super();

    this.state = {
      loanType: 'Home Purchase',
      propertyType: 'Single Family Home',
      propToBeUsedOn: '',
      city: '',
      found: "false",
      realEstateAgent: "false",
      downPayment: 0,
      cost: 0,
      credit: '',
      history: '',
      addressOne: '',
      addressTwo: '',
      addressThree: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  }

handleChangeLoanType = (event) => {
    this.setState({loanType : event.target.value});
}
handleChangePropertyType = (event) => {
    this.setState({propertyType : event.target.value});
}
handleChangePropertyToBeUsedOn = (event) => {
    this.setState({propToBeUsedOn : event.target.value})
}
handleChangeCity = (event) => {
    this.setState({city : event.target.value});
}
handleChangeFoundTrue = (event) => {
    this.setState({found : "true"});
}
handleChangeFoundFalse = (event) => {
    this.setState({found : "false"});
}
handleChangeRealEstateAgentTrue = () => {
    this.setState({realEstateAgent : "true"});
}
handleChangeRealEstateAgentFalse = () => {
    this.setState({realEstateAgent : "false"});
}
handleChangeUpdateDownPayment = (event) => {
    this.setState({downPayment : event.target.value})
}
handleChangeUpdateCost = (event) => {
  this.setState({cost: event.target.value});
}
handleChangeCreditE = () => {
  this.setState({credit: 'Excellent'})
}
handleChangeCreditG = () => {
  this.setState({credit: 'Good'})
}
handleChangeCreditF = () => {
  this.setState({credit: 'Fair'})
}
handleChangeCreditP = () => {
  this.setState({credit: 'Poor'})
}
handleChangeUpdateHistory = (event) => {
  this.setState({history: event.target.value})
}
handleChangeAddressOne = (event) => {
  this.setState({addressOne: event.target.value})
}
handleChangeAddressTwo = (event) => {
  this.setState({addressTwo: event.target.value})
}
handleChangeAddressThree = (event) => {
  this.setState({addressThree: event.target.value})
}
handleChangeFirstName = (event) => {
  this.setState({firstName : event.target.value})
}
handleChangeLastName = (event) => {
  this.setState({lastName: event.target.value})
}
handleChangeEmail = (event) => {
  this.setState({email: event.target.value})
}


  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          { router(this.state.loanType, this.state.propertyType, this.handleChangeLoanType, this.handleChangeProperty) }

        </HashRouter>
      </Provider>
    );
  }
}

export default App;