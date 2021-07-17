import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './index.css';
import {Home} from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          Login
        </Route>
        <Route exact path="/chat">
          Chat
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
