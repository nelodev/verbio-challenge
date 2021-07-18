import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './index.css';
import {Home, Login, Chat} from './pages/index';
import MarginLayout from './components/ui/MarginLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MarginLayout>
            <Home />
          </MarginLayout>
        </Route>
        <Route exact path="/login">
          <MarginLayout>
            <Login />
          </MarginLayout>
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
