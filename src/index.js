import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App title={"Card of Housekeeping Guys"} />, document.getElementById("root"));
serviceWorker.unregister();
