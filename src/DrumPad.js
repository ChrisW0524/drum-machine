import React from "react";

const DrumPad = (props) => {
    const { source, code , setPlayed} = props;
    const playAudio = (e) => {
        document.getElementById(code).play();
        document.getElementById('text').innerHTML=code;
    };
    const keyHandler = (e)=>{
     console.log("key CLicked");
    }
    return (
        <div
            className="drum-pad"
            id={code + "-pad"}
            onClick={playAudio}
            onKeyPress={playAudio}
        >
            <p>{code}</p>
            <audio className="clip" src={source} type="audio/mpeg" id={code}>
                {code}
            </audio>
        </div>
    );
};

export default DrumPad;
