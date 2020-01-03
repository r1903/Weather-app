import React from 'react';
import './App.css';
import Weather from "./components/Weather";
import Form from "./components/Form";
import Titles from "./components/Titles";


class App extends React.Component{
  state = {
    temp:"",
    city:"",
    country:"",
    humidity:"",
    description:"",
    error:""
  }
  
  getWeather =  (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if(city && country){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
            if (!response.ok) { throw Error(response.statusText) }
            return response.json()
          })
      .then(data => {
            this.setState({
            temp:data.main.temp,
            city:data.name,
            country:data.sys.country,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            error:""
            }) 
          })
      .catch(err=>this.setState({temp:"",
            city:"",
            country:"",
            humidity:"",
            description:"",
            error:`City or Country ${err.message}`}
            ))
    }
    else {
            this.setState({
            temp:"",
            city:"",
            country:"",
            humidity:"",
            description:"",
            error:"Please enter the City and Country name"
          })
    } 
  }
    
  
  render() {
    return(
    <div className="wrapper">
     <div className="main">
       <Titles/>
       <Form getWeather={this.getWeather}/>
       <Weather state={this.state}/>
     </div>
    </div>
    )
  }

}

export default App;
