import logo from './logo.svg';
import './App.css';
import List from './Components/List'
import Details from './Components/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
