import React, { useState, useReducer, useCallback } from "react";
import { createGlobalStyle } from "styled-components";

import Table from "./components/Table";

const GlobalStyle = createGlobalStyle`
  table {
    border-collapse: collapse;
  }
  td {
    border: 3px solid black;
    width: 120px;
    height: 120px;
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

const SET_WINNER = "SET_WINNER";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
      };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "O" });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Table onClick={onClickTable} tableData={state.tableData} />
      {state.winner && <div>{state.winner}님의 승리 !</div>}
    </>
  );
};

export default App;
