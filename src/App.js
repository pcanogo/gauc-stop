import logo from './logo.svg';
import './App.scss';
import ColorGame from "./components/color-game/color-game.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ColorGame />
    </div> 
  );
}

export default App;
