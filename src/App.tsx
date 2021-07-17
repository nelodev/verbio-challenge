import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './index.css';
import {Home} from './pages/index';
import Heading from './components/typography/Heading';
import MarginLayout from './components/ui/MarginLayout';

function App() {
  return (
    <MarginLayout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Heading text="Login" as="h1" />
          </Route>
          <Route exact path="/chat">
            Chat
          </Route>
        </Switch>
      </Router>
    </MarginLayout>
  );
}

export default App;
