import React from "react";
import ReactDOM from "react-dom/client";
// import Drawer from '@mui/material/Drawer';
// import Button from "@mui/material/Button";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./style.css";

const fillZero = (num: Number) => {
  return num < 10 ? "0" + num : num;
};

const DigiClock = (props: any) => {
  let date = new Date();
  const [time, setTime] = React.useState([
    fillZero(date.getHours()),
    fillZero(date.getMinutes()),
    fillZero(date.getSeconds()),
  ]);
  const [colon, setFlag] = React.useState(" ");
  React.useEffect(() => {
    const timer = setInterval(() => {
      let date = new Date();
      setTime([
        fillZero(date.getHours()),
        fillZero(date.getMinutes()),
        fillZero(date.getSeconds()),
      ]);
      if (colon === ":") {
        setFlag(" ");
      } else {
        setFlag(":");
      }
    }, 500);
    return () => clearInterval(timer);
  }, [colon]);
  return (
    <div>
      <span>{time[0].toString()}</span>
      <span style={{ fontFamily: "Roboto Mono" }}>{colon}</span>
      <span>{time[1].toString()}</span>
    </div>
  );
};

const AnalogClock = (props: any) => {
  let date = new Date();
  const [degs, setDegs] = React.useState([
    90 + (date.getHours() / 12) * 360 + (date.getMinutes() / 60) * 30,
    90 + (date.getMinutes() / 60) * 360,
  ]);
  React.useEffect(() => {
    const timer = setInterval(() => {
      let date = new Date();
      let hourDeg =
        90 + (date.getHours() / 12) * 360 + (date.getMinutes() / 60) * 30;
      let minDeg = 90 + (date.getMinutes() / 60) * 360;
      setDegs([hourDeg, minDeg]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="clock">
        <div
          className="hour"
          style={{ transform: `rotate(${degs[0]}deg)` }}
        ></div>
        <div
          className="min"
          style={{ transform: `rotate(${degs[1]}deg)` }}
        ></div>
      </div>
    </div>
  );
};

serviceWorkerRegistration.register();

const root = ReactDOM.createRoot(document.getElementById("root") || document.createElement("div"));
root.render(
  <div>
    <br />
    <AnalogClock />
    <br />
    <DigiClock />
  </div>
);
