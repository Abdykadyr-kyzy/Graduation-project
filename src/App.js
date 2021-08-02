import './App.css';
import {Header} from './components/Header';
import {Home} from './components/Home'
import {First} from "./components/pages/First"
import {Second} from "./components/pages/Second"
import {Three} from './components/pages/Three'
import {Fore} from './components/pages/Fore'
import {Five} from "./components//pages/Five"
import {Six} from "./components/pages/Six"
import {Seven} from "./components/pages/Seven"
import {Eight} from "./components/pages/Eight"


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <First/>
      <Second/>
      <Three/>
      <Fore/>
      <Five/>
      <Six/>
      <Seven/>
      <Eight/>
    </div>
  );
}

export default App;
