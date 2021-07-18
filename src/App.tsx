import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './index.css';
import {Home, Login, Chat} from './pages/index';
// import MarginLayout from './components/ui/MarginLayout';

function App() {
  return (
    // <MarginLayout>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
    // </MarginLayout>
  );
}

export default App;
