import React from 'react'

    
    const WeatherDisplay = ( {temperature, conditions}) => {

    console.log(conditions)
  return (
    <div>Temperature
        {temperature>20 ?(
            <span style={{color:"red"}}>{" " + temperature}</span>
        ): (
            <span style={{color:"blue"}}>{" "+ temperature}</span>
        )}
    </div>
  )
}

export default WeatherDisplay