// import Modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// import Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// import Pages
import Home from './pages/Home';
import Render from './pages/Render';


function App() {

  const [Tools, setTools] = useState([]);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home getForm = {Tools=>setTools(Tools)}></Home>
          </Route>
          <Route path='/render'>
            {Tools}
            <Render></Render>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
