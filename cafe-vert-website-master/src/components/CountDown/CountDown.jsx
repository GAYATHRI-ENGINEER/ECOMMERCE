import React, { useState, useEffect, useRef } from "react";
import "./CountDown.css";


const FLIP_DURATION = 1000;

function CountDown({title}) {

  const [time, setTime] = useState({
    value: getRndInteger(1 * 60 * 60, 3 * 60 * 60),
    swich: false
  });

  const prev_readable = useRef(getReadableSeconds(time.value));

  useInterval(() => {
    if(!time.swich)
      prev_readable.current = getReadableSeconds(time.value);
    setTime({
      value: time.swich ? time.value : time.value - 1,
      swich: !time.swich
    });
  }, FLIP_DURATION / 2);

  const { seconds, minutes, hours } = getReadableSeconds(time.value);
  const {
    seconds: prevSeconds,
    minutes: prevMinutes,
    hours: prevHours
  } = prev_readable.current;

  return (
    <div className="countdown-section">
<div className="countdown-title">{title}</div>
    <div className="countdown-container">
      <Card prevTime = {prevHours} time = {hours} swich={time.swich} />
      <Card prevTime = {prevMinutes} time = {minutes} swich={time.swich} />
      <Card prevTime={prevSeconds} time={seconds} swich={time.swich} />
      </div>
</div>
  );
}

function Card({ prevTime, time, swich }) {
  let render_time = time <= 9 ? "0" + time : time;
  let render_prevTime = prevTime <= 9 ? "0" + prevTime : prevTime;
  const isNewValue = render_time !== render_prevTime;
  
  //console.log(render_time, render_prevTime, swich);
  
  return (
    <div className="card-container">
      <div className="upper-part">
        <span>{render_time}</span>
      </div>
      <div className="bottom-part">
        <span>{render_prevTime}</span>
      </div>
      {
        isNewValue &&
        <>
          {swich && (
            <div className="upper-part absolute-positioned upper-animation">
              <span>{render_prevTime}</span>
            </div>
          )}
          {!swich && (
            <div
              className="bottom-part absolute-positioned bottom-animation"
              style={{ top: "50%" }}
            >
              <span>{render_time}</span>
            </div>
          )}
        </>
      }
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function getReadableSeconds(seconds) {
  let readable = {};
  readable.hours = Math.floor(seconds / (60 * 60));
  readable.minutes = Math.floor(seconds / 60) - readable.hours * 60;
  readable.seconds = seconds - readable.hours * 60 * 60 - readable.minutes * 60;
  return readable;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default CountDown;
