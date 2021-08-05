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
import {Second} from "./components/pages/Second"
import {Three} from './components/pages/Three'
import {Organization} from './components/pages/Organization'
import {Academi} from "./components//pages/Academi"
import Other from "./components/pages/Other/index"
import {Card} from "./components/pages/Other/Card"
import {Vip} from "./components/pages/Other/Vip"


function App() {

  return (
    <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path='/first' component={First} />
            <Route path='/second' component={Second} />
            <Route path='/three' component={Three} />
            <Route path='/fore' component={Organization} />
            <Route path='/five' component={Academi} />
            <Route path='/other' component={Other} />
            <Route path='/card' component={Card} />
            <Route path='/vip' component={Vip} />
            <Route path='/' component={Home} />
          </Switch>
         <Footer/>
        </Router>
    </div>
  );
}

export default App;
