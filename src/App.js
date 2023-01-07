import "./App.css";
import musicData from "./musicData";
import { useState, useEffect } from "react";
function App() {
  const [music, setMusic] = useState("--------");
  const playMusic = (event) => {
    const [musicName] = musicData.filter((data) => {
      if (event.target.id) {
        return event.target.id === data.name;
      } else {
        return event.key.toUpperCase() === data.represent;
      }
    });
    setMusic(musicName.name);
    const chosenAudio = document.getElementById(musicName.represent);
    chosenAudio.play();
  };
  useEffect(() => {
    window.addEventListener("keydown", (selector) => playMusic(selector));
    return () => {
      window.removeEventListener("keydown", (selector) => playMusic(selector));
    };
  }, []);
  return (
    <div className="App">
      <div className="Drum">
        <div id="drum-machine">
          <div className="pad-bank">
            {musicData.map((data) => {
              return (
                <div
                  key={data.name}
                  className="drum-pad"
                  id={data.name}
                  onClick={(event) => playMusic(event)}
                >
                  <audio
                    src={data.audio}
                    className="clip"
                    id={data.represent}
                  ></audio>
                  {data.represent}
                </div>
              );
            })}
          </div>
        </div>
        <div className="control-contain">
          <p id="display">{music}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
