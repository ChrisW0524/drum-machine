import React from "react";
import data from "./audioData.js";
import DrumPad from "./DrumPad.js";

const PadBank = () => {
    return (
        <div id="pad-bank">
            {data.map((audio) => {
                return (
                    <DrumPad
                        key={audio.code}
                        {...audio}
                    ></DrumPad>
                );
            })}
        </div>
    );
};

export default PadBank;
