import React from "react";
import Options from "./Components/Options";

function Question({ Question, dispatch, answer }) {
  return (
    <div>
      <h1>{Question.question}</h1>

      <Options Question={Question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
