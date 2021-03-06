import './App.css';
import {Header} from './components/Header';
import {Home} from './components/Home'
import {First} from "./components/pages/First"
import {Footer} from "./components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Second} from "./components/pages/Second"
import {Three} from './components/pages/Three'
import {About} from './components/pages/About'
import {Academi} from "./components//pages/Academi"
import Other from "./components/pages/Other/index"
import {Card} from "./components/pages/Other/Card"
import {Vip} from "./components/pages/Other/Vip"
 
import {Login} from "./components/foruser/Login";
import {SignUp} from "./components/foruser/SignUp";
import {UserProfile}  from "./components/foruser/UserProfile/index";

function App() {

  return (
    <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path='/first' component={First} />
            <Route path='/second' component={Second} />
            <Route path='/three' component={Three} />
            <Route path='/fore' component={About} />
            <Route path='/five' component={Academi} />
            <Route path='/other' component={Other} />
            <Route path='/card' component={Card} />
            <Route path='/vip' component={Vip} />
            {/* <Route path='/about' component={About} /> */}
            <Route path='/login' component={Login} />
            <Route path='/sign' component={SignUp} />
            <Route path='/user' component={UserProfile} />
            <Route path='/' exact component={Home} />
          </Switch>
         <Footer/>
        </Router>
    </div>
  );
}

export default App;
