import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Gun from "gun/gun";
import map from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";

const radix = require("gun/lib/radix");
const radisk = require("gun/lib/radisk");
const store = require("gun/lib/store");
const rindexed = require("gun/lib/rindexed");
const webrtc = require("gun/lib/webrtc");

var gun = Gun({
  peers: ["https://aarondotwork-gun-server.herokuapp.com/gun"],
  radisk: radisk || false,
  localStorage: false,
});
let gunBase = gun.get("simple_mice").get("test_instance_2");

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  let [mice, setMice] = useState({});
  let [myUid, setMyUid] = useState(uuidv4());
  let [timer, setTimer] = useState(0);
  
  useEffect(() => {
    let miceCache = {};
    let unmounted = false;
    let gunRef = null;

    function updateTimer() {
      if (unmounted) return;
      setTimer(Date.now());
      requestAnimationFrame(updateTimer);
    }
    requestAnimationFrame(updateTimer);

    gunBase.map().on((el, key, g) => {
      gunRef = g;
      console.log("ya");
      miceCache[key] = el;
      setMice((old) => {
        return { ...old, [key]: el };
      });
      if (unmounted) {
        gunRef.off();
        return;
      }
    });
    return () => {
      unmounted = true;
      gunRef?.off();
    };
  }, []);
  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", background: "none" }}
      onMouseMove={(e) => {
        gunBase.get(myUid).put({
          x: e.clientX,
          y: e.clientY,
          t: Date.now(),
          k: myUid,
        });
        console.log("ya");
      }}
    >
      <div>
        {Object.values(mice).map((el) =>
          Date.now() - el.t < 5000 && el.k != myUid ? (
            <FontAwesomeIcon
              icon={faMousePointer}
              style={{
                pointerEvents: "none",
                position: "absolute",
                top: el.y + "px",
                left: el.x + "px",
                opacity: Math.min(1 - (Date.now() - el.t)/5000, 1)
              }}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
