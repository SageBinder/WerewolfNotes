import React from 'react';
import {Screen} from "../../App";
import ChoosePlayers from "./players/ChoosePlayers";
import ChooseRoles from "./roles/ChooseRoles";

const Setup = ({setScreen}: {setScreen: any}) => {
    return (
        <div>
            <ChoosePlayers/>
            <ChooseRoles/>
            <button onClick={() => setScreen(Screen.Game)}> Start Game </button>
        </div>
    )
}

export default Setup;