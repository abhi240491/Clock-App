import "./../css/ClockApp.css";
import clock_img from "./../img/clock.svg";
import React, { useState, useEffect } from "react";

const ClockApp = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // const d = new Date();
      // // const h = d.getHours()-12;
      // const m =  30;//d.getMinutes();
      // const s = d.getSeconds();
      if (minutes === 60) {
        setMinutes(0);
      }
      if (seconds === 60) {
        setMinutes((minutes) => minutes + 1);
        setSeconds((seconds) => seconds % 60);
      } else {
        setSeconds((seconds) => seconds + 1);
      }
      const secondsD = seconds * 6;
      document.querySelector(
        "#clock-seconds"
      ).style.transform = `rotate(${secondsD}deg)`;
      const minutesD = minutes * 6;
      document.querySelector(
        "#clock-minutes"
      ).style.transform = `rotate(${minutesD}deg)`;
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes]);
  const handleChange = (evt) => {
    if (evt.target.name === "ss") {
      if (evt.target.value > 60) alert("value can't me greater thant 60");
      else setSeconds(parseInt(evt.target.value ?? seconds));
    }
    if (evt.target.name === "mm") {
      if (evt.target.value > 60) alert("value can't me greater thant 60");
      else setMinutes(parseInt(evt?.target?.value));
    }
  };
  const handleDrag = (evt) =>{
    //evt.stopProgagation();
    console.log(Math.atan(evt.clientY/ evt.clientX));
  }
  return (
    <>
      <div id="Clock-body">
        <div className="analog-clock">
          {/* <div id='clock-hours' className="clock-index clock-hour"></div> */}
          <div id="clock-minutes" className="clock-index clock-min" name={'minutes'} onDrag={(evt)=>handleDrag(evt)}></div>
          <div id="clock-seconds" className="clock-index clock-sec" name={'seconds'} onDrag={(evt)=>handleDrag(evt)}></div>
          <div className="clock-mid"></div>
          <img src={clock_img} alt="" className="clock" />
        </div>
        <div className="digital-display">
          <div className="digi">
            <p>mm</p>
            <input
              className="mm-input"
              id="mm"
              name="mm"
              value={isNaN(minutes) ? "" : minutes}
              onChange={(evt) => handleChange(evt)}
            />
          </div>
          <div className="digi">
            <p>ss</p>
            <input
              className="mm-input"
              id="ss"
              name="ss"
              value={isNaN(seconds) ? "" : seconds}
              onChange={(evt) => handleChange(evt)}
              
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockApp;
