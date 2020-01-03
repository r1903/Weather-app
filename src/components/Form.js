import React from 'react';


const Form = (props) => {
  return(
      <form onSubmit={props.getWeather} className="form_info">
          <input type="text" name="city" placeholder="City..."></input>
          <input type="text" name="country" placeholder="Country..."></input>
          <button>Get Weather</button>
      </form>
  )
}



export default Form;