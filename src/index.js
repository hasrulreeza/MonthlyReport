import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

function App2() {
  return <Dashboard />;
}

ReactDOM.render(<App2 />, document.querySelector("#app"));
//ReactDOM.render(<App2 />, document.querySelector("#app2"));
