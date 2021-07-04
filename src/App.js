// import Modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// import Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// import Pages
import Home from './pages/Home';
import Render from './pages/Render';


function App() {

  const [Form, setForm] = useState([]);


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home form={Form} getForm = {Form=>setForm(Form)}></Home>
          </Route>
          <Route path='/render'>
            <Render form={Form}></Render>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
