import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Helloworld = (props) => {
  const [cnt, setCnt] = React.useState(0);
  return (
    <div>
      <div>Hello, world! {cnt}</div>
      <button onClick = {() => setCnt(cnt + 1)}>PUSH</button>
    </div>
  );
};

const Clock = (props) => {
  return (
    <div>
      {props.hour}:{props.min}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Helloworld />);
