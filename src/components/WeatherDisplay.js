import React from 'react'

    
    const WeatherDisplay = ( {temperature, conditions}) => {

    console.log(conditions)
  return (
    <>
    <p>Temperature
        {temperature>20 ?(
            <span style={{color:"red"}}>{" " + temperature}</span>
        ): (
            <span style={{color:"blue"}}>{" "+ temperature}</span>
        )}
    </p>
    <p>
        conditions: {conditions}
    </p>
        </>
  )
}

export default WeatherDisplay