import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './components/Home';
import Blog from './components/Blog';

export default function BrowserRouter(){
    return(
        <Router>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/Blog" component={Blog} />
        </Switch>
    </Router>
    )
}