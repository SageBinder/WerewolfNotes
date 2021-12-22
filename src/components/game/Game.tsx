import React from 'react';
import {Role} from "../../werewolf/Role";
import {Player} from "../../werewolf/Player";
import {Artifact} from "../../werewolf/Artifact";

const Game = ({players, roles, artifacts, onExitGame}:
                  {players: Array<Player>, roles: Array<Role>, artifacts: Array<Artifact>, onExitGame: any}) => {
    return <button onClick={onExitGame}> Back to Setup </button>
}

export default Game;