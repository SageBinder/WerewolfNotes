import React, {useState} from 'react';
import './App.css';
import Setup from './components/setup/Setup';
import Game from './components/game/Game'
import {Player} from "./werewolf/Player";
import {Role} from "./werewolf/Role";
import {Artifact} from "./werewolf/Artifact";

const App = () => {
    const onStartGame = (players: Array<Player>, roles: Array<Role>, artifacts: Array<Artifact>) => {
        setCurrentScreen(<Game key={"game"} players={players} roles={roles} artifacts={artifacts} onExitGame={onExitGame}/>);
    }

    const setupScreen = <Setup key={"setup"} onStartGame={onStartGame}/>;

    const onExitGame = () => {
        setCurrentScreen(setupScreen);
    }

    const [ currentScreen, setCurrentScreen ] = useState(setupScreen);

    return (
        <div>
            {currentScreen}
        </div>
    );
}

export default App;
