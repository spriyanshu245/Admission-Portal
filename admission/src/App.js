import React from 'react';
import Auth from './components/Authentication/Authenticate';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    
    <Container >
    <Router>
      <Switch>
       <Route path="/Authentication/Authenticate" component={Auth}/> 
      <Auth/>

      </Switch>
    </Router>
      
    </Container>
    );
}

export default App;
