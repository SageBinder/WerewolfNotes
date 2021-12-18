import React, {useState} from 'react';
import PlayerComponent from "./PlayerComponent";

const ChoosePlayers = () => {
    const [ players, setPlayers ] = useState<Array<string>>([]);
    const [ newPlayer, setNewPlayer ] = useState("");
    const [ errorMsg, setErrorMsg ] = useState("");

    const onAddPlayer = () => {
        if(players.filter(player => player === newPlayer).length > 0) {
            setErrorMsg("Error: Player " + newPlayer + " is already in your players list");
            return;
        }
        setErrorMsg("");
        setPlayers(players.concat(newPlayer));
        setNewPlayer("");
    }

    return (
        <div>
            <h2>Players</h2>
            <ul>
                { players.map(player => <li><PlayerComponent name={player} players={players} setPlayers={setPlayers}/></li>) }
            </ul>
            <br/>
            <div>
                <input value={newPlayer}
                       onInput={(e: React.FormEvent<HTMLInputElement>) => setNewPlayer(e.currentTarget.value)}/>
                <button onClick={onAddPlayer}>Add Player</button>
                <br/>
                {errorMsg}
            </div>
        </div>

    )
}

export default ChoosePlayers;