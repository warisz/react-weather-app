import React, { Component } from 'react'
import './Components.css';
import 'bootstrap/dist/css/bootstrap.css';
import CardHolder from './CardHolder';
import DepthInfo from './DepthInfo';

export class Column extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            currentDayInfo: 'Loading', 
            data: null,
            hasError: false
        };

        this.changeDay = this.changeDay.bind(this);
      }

    componentDidMount(){


        fetch(`https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&name=toronto&app_id=devportal-demo-20180625&app_code=9v2BkviRwi9Ot26kp2IysQ`)
            .then(res => res.json())
            .then(data => {
                this.setState({data})
                this.setState({currentDay: data.dailyForecasts.forecastLocation.forecast[0].weekday})
            });
    }

   
    componentDidUpdate(){

        try{
            const city = this.props.inputtedCity;
            fetch(`https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&name=` + city + `&app_id=devportal-demo-20180625&app_code=9v2BkviRwi9Ot26kp2IysQ`)
            .then(res => res.json())
            .then(data => {
                this.setState({data})
            });
        }finally{
            console.log("error");
        }
        
    }


    componentDidCatch(error, info) {
        // Display fallback UI

      }

    changeDay(dayJson){
        this.setState({currentDayInfo: dayJson});
       
    }
    
    render() {
        let dataSize = 0;
        for (var item in this.state.data){
            dataSize++;
        }
        if(dataSize > 2){
            
            const info = this.state.data.dailyForecasts.forecastLocation.forecast;
            return (

                <div className="Column border rounded">
                    <CardHolder info={info[0]} changeDay={this.changeDay}></CardHolder>
                    <CardHolder info={info[1]} changeDay={this.changeDay}></CardHolder>
                    <CardHolder info={info[2]} changeDay={this.changeDay}></CardHolder>
                    <CardHolder info={info[3]} changeDay={this.changeDay}></CardHolder>
                    <CardHolder info={info[4]} changeDay={this.changeDay}></CardHolder>
                    <CardHolder info={info[5]} changeDay={this.changeDay}></CardHolder>
                    <CardHolder info={info[6]} changeDay={this.changeDay}></CardHolder>

                    
                    <p>{this.state.currentDayInfo.weekday}</p>

                    <DepthInfo info={this.state.currentDayInfo}></DepthInfo>
                </div>
                
            )
        }

        
        return(
            <div></div>
        )
        

    }
}

export default Column;

