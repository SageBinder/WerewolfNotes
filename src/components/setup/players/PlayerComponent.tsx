import React from 'react';

const PlayerComponent = ({name, players, setPlayers}: {name: string, players: Array<string>, setPlayers: any}) => {
    return (
        <tr>
            <td>{name}</td>
            <td><button onClick={() => setPlayers(players.filter(player => player !== name))}>Remove Player</button></td>
        </tr>
    );
}

export default PlayerComponent;