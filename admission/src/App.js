import React from 'react';
import Auth from './components/Authentication/Authenticate';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './Registration/Register';
function App() {
  return (
    
    <Container >
    <Router>
      <Switch>
       <Route exact path="/" component={Auth}/> 
       <Route path="/Dashboard" component={Dashboard}/> 
       <Route path="/Register" component={Register}/> 

      </Switch>
    </Router>
      
    </Container>
    );
}

export default App;
