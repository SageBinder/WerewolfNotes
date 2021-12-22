import React, {useState} from 'react';
import PlayerComponent from "./PlayerComponent";

const ChoosePlayers = ({players, setPlayers}: {players: Array<string>, setPlayers: any}) => {
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
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                    </tr>
                </thead>
                <tbody>
                    { players.map(player => <PlayerComponent name={player} players={players} setPlayers={setPlayers}/>) }
                </tbody>
            </table>
            <br/>
            <div>
                <input value={newPlayer}
                       onInput={(e: React.FormEvent<HTMLInputElement>) => setNewPlayer(e.currentTarget.value)}/>
                <button onClick={onAddPlayer}>Add Player</button>
                <br/>
                {errorMsg}
            </div>
        </div>
    );
}

export default ChoosePlayers;