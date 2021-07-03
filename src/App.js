// import Modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// import Pages
import Home from './pages/Home';
import Render from './pages/Render';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/render'>
            <Render></Render>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
