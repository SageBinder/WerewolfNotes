import React from 'react';
import {Screen} from "../../App";

const Game = ({setScreen}: {setScreen: any}) => {
    return <button onClick={() => setScreen(Screen.Setup)}> Back to Setup </button>
}

export default Game;