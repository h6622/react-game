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
  #result{
    font-size: 3em;
  }
`;

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
      };
    case CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData
      };
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O"
      };
    }
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
      <Table
        onClick={onClickTable}
        tableData={state.tableData}
        dispatch={dispatch}
      />
      {state.winner && <div id="result">{state.winner}님의 승리 !</div>}
    </>
  );
};

export default App;
