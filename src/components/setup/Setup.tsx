import React, {useState} from 'react';
import ChoosePlayers from "./players/ChoosePlayers";
import ChooseRoles from "./roles/ChooseRoles";
import {Role} from "../../werewolf/Role";
import {Player} from "../../werewolf/Player";
import {ChooseArtifacts} from "./artifacts/ChooseArtifacts";
import {Artifact} from "../../werewolf/Artifact";

const Setup = ({onStartGame}: {onStartGame: any}) => {
    const [ players, setPlayers ] = useState<Array<string>>([]);
    const [ roles, setRoles ] = useState<Array<Role>>([]);
    const [ artifacts, setArtifacts ] = useState<Array<Artifact>>([]);
    const [ error, setError ] = useState<string>("");

    return (
        <div>
            <ChoosePlayers players={players} setPlayers={setPlayers}/>
            <ChooseRoles roles={roles} setRoles={setRoles}/>
            <ChooseArtifacts artifacts={artifacts} setArtifacts={setArtifacts}/>
            <button onClick={() => tryStartGame(players, roles, artifacts, setError, onStartGame)}>Start Game</button>
            <br/>
            {error}
        </div>
    )
}

const tryStartGame = (players: Array<string>, roles: Array<Role>, artifacts: Array<Artifact>, setError: any, onStartGame: any) => {
    if (players.length !== roles.length) {
        setError("Error: The number of players must equal the number of roles");
        return;
    }

    onStartGame(players.map(playerName => new Player(playerName)), roles, artifacts);
};

export default Setup;