import React from 'react';
import Auth from './components/Authentication/Authenticate';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    
    <Container >
    <Router>
      <Switch>
       <Route path="/Authenticate" component={Auth}/> 
       <Route path="/Dashboard" component={Dashboard}/> 

      </Switch>
    </Router>
      
    </Container>
    );
}

export default App;
