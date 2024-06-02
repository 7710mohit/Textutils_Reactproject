import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    //console.log("Uppercase was clicked" + text);
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoclick = () => {
    // console.log("Lowercase was clicked" + text);
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearclick = () => {
    console.log("Clear was clicked" + text);
    //console.log("Clearcase was clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleonChange = (event) => {
    console.log("onChange");
    //console.log("onChange");
    setText(event.target.value);
  };
  // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>{" "}
        </div>
        <button className="btn btn-primary my-3" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3" onClick={handleLoclick}>
          Convert to Lowercase{" "}
        </button>
        <button className="btn btn-primary my-3" onClick={handleClearclick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summery</h2>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {" "}
          {text.length > 0
            ? text
            : "Enter something in the textbox and preview it"}
        </p>
      </div>
    </>
  );
}
