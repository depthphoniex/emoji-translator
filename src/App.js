import React, { useState } from "react";
import "./styles.css";

// declaration of dictionary
var emojidictionry = {
  "😀": "Giring face",
  "😊": "smile",
  "💘": "heart",
  "💌": "love letter",
  "🥺": "pleading face",
  "🔥": "fire",
  "✔️": "check mark",
  "😢": "crying face",
  "😔": "sad face",
  "☮️": "peace",
  "😕": "confused",
  "😨": "fearful face",
  "😠": "angry",
  "🕧": "twelve-thirty",
  "✌️": "victory hand",
  "🙌": "rasing hands"
};

// declaration of emojilist for printing dictionry value
var emojilist = Object.keys(emojidictionry);
// processing part
export default function App() {
  // calling of usestate function
  var [translator, settranslator] = useState("");
  function emojiinputhandler(event) {
    var userinput = event.target.value;
    var translator = emojidictionry[userinput];
    if (translator === undefined) {
      translator = "please check the input";
    }
    // set the value of settranslartor
    settranslator(translator);
  }
  function emojiclickhandler(emoji) {
    var translator = emojidictionry[emoji];
    settranslator(translator);
  }
  return (
    <div className="App">
      <h1>emoji translator</h1>
      {/* taking input in input area */}
      <input onChange={emojiinputhandler}></input>
      {/* output part */}
      <h2 style={{ textTransform: "capitalize" }}>{translator}</h2>
      <h3 style={{ textTransform: "capitalize" }}>emoji list</h3>
      {/* print the emoji in emoji dictionary */}
      {emojilist.map(function (emoji) {
        return (
          <h4
            onClick={() => emojiclickhandler(emoji)}
            style={{
              // styling part
              display: "inline",
              fontSize: "25px",
              padding: "5px 0px 5px 0px",
              margin: "0px 10% 0px 10%",
              cursor: "pointer",
              lineHeight: "3"
            }}
            key={emoji}
          >
            {emoji}
          </h4>
        );
      })}
    </div>
  );
}
