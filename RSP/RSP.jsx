import React, { Component } from "react";

const scores = {
  rock: 0,
  scissors: 1,
  paper: -1
};

class RSP extends Component {
  state = {
    result: "",
    rsp: "rock",
    score: 0
  };

  interval;

  componentDidMount() {
    this.interval = setInterval(this.changeHand, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { rsp } = this.state;
    if (rsp === "rock") {
      this.setState({
        rsp: "scissors"
      });
    } else if (rsp === "scissors") {
      this.setState({
        rsp: "paper"
      });
    } else if (rsp === "paper") {
      this.setState({
        rsp: "rock"
      });
    }
  };

  onClickBtn = choice => () => {
    const { rsp } = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[rsp];

    const diff = myScore - cpuScore;

    if (diff === 0) {
      this.setState({
        result: "비겼습니다."
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState(prevState => {
        return {
          result: "이겼습니다!",
          score: prevState.score + 1
        };
      });
    } else {
      this.setState(prevState => {
        console.log(cpuScore);
        return {
          result: "졌습니다...",
          score: prevState.score - 1
        };
      });
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 1000);
  };

  render() {
    const { result, score, rsp } = this.state;
    return (
      <>
        <h1>{rsp}</h1>
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn("rock")}>
            Rock
          </button>
          <button
            id="scissors"
            className="btn"
            onClick={this.onClickBtn("scissors")}
          >
            Scissor
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("paper")}>
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
