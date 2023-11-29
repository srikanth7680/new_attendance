import React from "react"
import MyImage from './bd_image.png'


function BirthdayCard() {
  return (
    <div>
    <label htmlFor="name">Name:</label>
    <input type="text" id="bd_name" name="Name"/>
    <label htmlFor="age">Age:</label>
    <input type="number" id="bd_age" age = "Age"></input>
    <p>Celebration on <strong>Dec 1st 2023</strong></p>
    <div className="side-img">
    <img src="MyImage" alt="loading" className="bd_image"/>
    </div>
    <br></br>
    <footer>
      <h3 className="venue">venue:</h3>
      <p className="p-tag">Come along with your family to the below location.</p>
      <a href="https://www.google.com/maps/place/London,+UK/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu" className="a-tag">Click Here to see Location</a>
    </footer>
    </div>
  )
}
export default BirthdayCard;