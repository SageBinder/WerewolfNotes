import React from 'react';

const PlayerComponent = ({name, players, setPlayers}: {name: string, players: Array<string>, setPlayers: any}) => {
    return (
        <div>
            <text>{name}</text>
            <button onClick={() => setPlayers(players.filter(player => player !== name))}>Remove Player</button>
        </div>
    );
}

export default PlayerComponent;