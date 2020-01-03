import React from 'react';


class Weather extends React.Component{

  render(props){
    const {temp,city,country,humidity,description,error}= this.props.state;
      return(
        <div className="weather__info">
          {city && country && <p>Location :{city},{country}</p>}
          {temp &&  <p>Temperature :{Math.round(parseFloat(temp)-273.15)}°C</p>}
          {humidity &&  <p>Humidity :{humidity}</p>}
          {description &&  <p>Descrition :{description}</p>}
          {error &&  <p className="weather__error">{error}</p>}
        </div>
      )
  }
} 


export default Weather;