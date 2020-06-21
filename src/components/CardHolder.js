import React, { Component } from 'react'

export class CardHolder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info;
        let high = parseInt(info.highTemperature, 10);
        let low = parseInt(info.lowTemperature, 10);
        
        return (
           
            <div className="Card border rounded"  onClick={(e) => this.props.changeDay(info, e)}>
                <h4 className="weekday">{info.weekday}</h4>
                <img src={info.iconLink}></img>

                <div>
                    <h4 className="Temperature first">{high}°</h4>
                    <h4 className="Temperature">{low}°</h4>
                </div>
                
            </div>
           
        )
    }
}

export default CardHolder;