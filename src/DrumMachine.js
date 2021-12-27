import React from "react";
import PadBank from "./PadBank.js";

const DrumMachine = () => {
    return (
        <div id="drum-machine">
            <h1>Drum Machine</h1>
            <PadBank></PadBank>
            <div id="display">
                <h1 id="text">Play a sound!</h1>
            </div>
        </div>
    );
};

export default DrumMachine;
