import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import RSP from "./RSP";
import RSPHooks from "./RSPHooks";

const Hot = hot(RSPHooks);

ReactDOM.render(<Hot />, document.querySelector("#root"));
