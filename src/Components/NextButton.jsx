import React from "react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  //   console.log(answer);
  if (answer === null) return null;

  //   console.log(index, numQuestions);
  if (index < numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  //   console.log(index, numQuestions);

  if (index === numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finished
        </button>
      </div>
    );
}

export default NextButton;
