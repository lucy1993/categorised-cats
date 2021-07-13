import { HashRouter, Switch, Route } from "react-router-dom";
// pages
import Home from './pages/Home';
//css
import './App.css';

function App() {
  return (
    <div className="main-app">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*" component={() => "404 Not found."} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
