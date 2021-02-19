import './App.css';
import Counter from './Counter.js';
import {ReactComponent as Facebook} from './images/icon-facebook.svg';
import {ReactComponent as Instagram} from './images/icon-instagram.svg';
import {ReactComponent as Pinterest} from './images/icon-pinterest.svg';

function App() {
  return (
    <div className="App-background">
      <div className="tiimer">
        <h1>WE'RE LAUNCHING SOON</h1>
      </div>
      <div> <Counter /> </div>
      <div className="App-icons">
        <Facebook id='fb-icon' alt='Facebook-Icon' />
        <Instagram id='insta-icon' alt='Insta-Icon'/>
        <Pinterest id='pin-icon' alt='Pin-Icon' />
      </div>
    </div>
  );
}

export default App;
