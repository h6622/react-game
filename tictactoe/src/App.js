import React, { useState, useReducer } from "react";
import { createGlobalStyle } from "styled-components";

import Table from "./components/Table";

const GlobalStyle = createGlobalStyle`
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
`;

const initialState = {
  winner: "",
  turn: "0",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
};

const reducer = (state, action) => {

}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <GlobalStyle />
      <Table />
      {winner && <div>{winner}님의 승리 !</div>}
    </>
  );
};

export default App;
