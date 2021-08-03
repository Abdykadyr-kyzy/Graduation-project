import './App.css';
import {Header} from './components/Header';
import {Home} from './components/Home'
import {First} from "./components/pages/First"
import {Footer} from "./components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import {Second} from "./components/pages/Second"
// import {Three} from './components/pages/Three'
// import {Fore} from './components/pages/Fore'
// import {Five} from "./components//pages/Five"
// import {Six} from "./components/pages/Six"
// import {Seven} from "./components/pages/Seven"
// import {Eight} from "./components/pages/Eight"
// import { TableFooter } from '@material-ui/core';


function App() {

  return (
    <div className="App">
      <Header/>
      <div>
        <Router>
          <Switch>
            <Route path='/first' component={First} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
