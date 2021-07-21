import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './components/Home';
import Admin from './components/Admin';

export default function BrowserRouter(){
    return(
        <Router>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/Admin" component={Admin} />
        </Switch>
    </Router>
    )
}