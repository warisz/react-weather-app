import React, { Component } from 'react'
import './App.css';
import Column from './components/Column';
import Header from './components/Header';


export default class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      currentCity: "Toronto"
    }

    this.changeCity = this.changeCity.bind(this);
  }

  changeCity(city){
    

    if(city === ""){
      this.setState({currentCity: "Toronto"});
    }

    this.setState({currentCity: city});
  }

  render() {
    return (
      <div className="App">

        <Header changeCity={this.changeCity}></Header>
        <h6>Current City: {this.state.currentCity}</h6>
        <Column inputtedCity={this.state.currentCity}></Column>
        
      </div>
    )
    
  }
}
