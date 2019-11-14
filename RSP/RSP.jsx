import React, { Component } from "react";
import styled from "styled-components";
import img from "./src/images/rsp.jpg";

const RspImg = styled.div`
  background-image: url(${img});
  width: 152px;
  height: 148px;
`;

class RSP extends Component {
  state = {
    result: "",
    imgCoord: 0,
    score: 0
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <RspImg id="computer" />
        <div>
          <button id="rock" className="btn" onClick={() => onClickBtn("Rock")}>
            Rock
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={() => onClickBtn("Scissor")}
          >
            Scissor
          </button>
          <button
            id="paper"
            className="btn"
            onClick={() => onClickBtn("Paper")}
          >
            Paper
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
