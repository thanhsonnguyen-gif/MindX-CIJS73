import { useState } from "react";
import "./session-5.css";

const TrafficLight = () => {
  const [statering, setStatering] = useState(0);
  const TrafficSignal = () => {
    if (statering === 2) {
      setStatering(0);
    } else {
      setStatering(statering + 1);
    }
  };
  return (
    <div>
      <div>
        <button onClick={TrafficSignal} id="btnTraffic">
          Next
        </button>
      </div>
      <div
        className="light"
        style={{ background: statering === 0 ? "red" : null }}
      ></div>
      <div
        className="light"
        style={{ background: statering === 1 ? "yellow" : null }}
      ></div>
      <div
        className="light"
        style={{ background: statering === 2 ? "green" : null }}
      ></div>
    </div>
  );
};

export default TrafficLight;
