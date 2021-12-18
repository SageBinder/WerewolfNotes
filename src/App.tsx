import React, {useEffect, useState} from 'react';
import './App.css';
import Setup from './components/setup/Setup';
import Game from './components/game/Game'

export enum Screen {
    Setup,
    Game,
}

const App = () => {
    const [ screen, setScreen ] = useState(Screen.Setup);


    if(screen === Screen.Setup) {
        return (
            <Setup key={"setup"} setScreen={setScreen}/>
        );
    } else {
        return (
            <div>
                <h2>tits2</h2>
                <Game key={"game"} setScreen={setScreen}/>
            </div>
        );
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload cunt.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
