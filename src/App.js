import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😐": "Neutral Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "🤤": "Drooling Face",
  "🤧": "Sneezing Face",
  "😒": "Unamused Face",
  "😲": "Astonished Face",
  "😀": "Grinning Face",
  "😏": "Smirking Face",
  "😉": "Winking Face",
  "😴": "Sleeping Face",
  "😊": "Smiling Face",
  "🤡": "Clown Face",
  "❤️": "Red Heart",
  "🥳": "Partying Face",
  "🙌": "Raising Hands",
  "🎂": "Birthday Cake",
  "🍰": "Shortcake",
  "🎈": "Balloon",
  "🎉": "Party Popper",
  "🎁": "Wrapped Gift",
  "✨": "Sparkles",
};

let emojiList = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];
    // console.log(meaning);
    if (meaning === "undefined") {
      meaning = "We don't have it in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  //or
  //   function emojiInputHandler(event){
  //   let userInput = event.target.value;
  //   if(userInput in emojiDictionary){
  //     setMeaning(emojiDictionary[userInput]);
  //   }else{
  //     setMeaning("failure to recognise this emoji");
  //   }
  // }
  return (
    <div className="App">
      <h1>Emojination</h1>
      <input placeholder="Enter your emoji here" onChange={emojiInputHandler} />
      <div
        style={{
          fontSize: "1.5rem",
          padding: "2rem",
          fontWeight: "700",
        }}
      >
        {meaning}
      </div>
      <div>
        <div
          style={{
            fontSize: "1.3rem",
            padding: "0 1rem 2rem",
            fontWeight: "600",
          }}
        >
          Emojis we know
        </div>
        <div>
          {emojiList.map(function (emoji) {
            return (
              <span
                onClick={() => emojiClickHandler(emoji)}
                style={{
                  fontSize: "2rem",
                  padding: "0.8rem",
                  cursor: "pointer",
                  lineHeight: "3.5rem",
                }}
                key={emoji}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
