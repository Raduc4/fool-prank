import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [isTrue, setTrue] = createSignal(false);
  const [coords, setCoords] = createSignal({ top: 145, left: 150 });

  async function changeCoords() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setCoords(await invoke("change_coords"));
  }

  return (
    <div class="container">
      {isTrue() ? (
        <div>
          <h1>Am știut eu !</h1>
          <p>ca esti pidor</p>
          <img
            width={250}
            src="https://steamuserimages-a.akamaihd.net/ugc/943968455599328520/715C5F83407DB77E09B30084A1E62BBD62F07FEB/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
            alt=""
          />
        </div>
      ) : (
        <>
          <h1>Esti Pidar?</h1>
          <div class="row">
            <button type="button" onClick={() => setTrue(true)}>
              Da
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              top: `${coords().top}px`,
              left: `${coords().left}px`,
            }}
          >
            <button type="button" onMouseEnter={() => changeCoords()}>
              Nu
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
