import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.changeCity(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>./weather-app</h2>
                <br></br>
                <div>
                   
                    <form onSubmit={this.handleSubmit}>
                        <label ><h2 className="cityInput">Enter City:</h2>
                            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                        </label>
                        
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}
