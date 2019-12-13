import React from 'react'
import './App.css'
import ListUserComponent from "./user/ListUserComponent"
import AddUserComponent from "./user/AddUserComponent"
import EditUserComponent from "./user/EditUserComponent"
import { Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'


const App = () => {
  return (
    <Container maxWidth="md">
      <Router>
        <Switch>
            <Route path="/" exact component={ListUserComponent} />
            <Route path="/users" component={ListUserComponent} />
            <Route path="/add-user" component={AddUserComponent} />
            <Route path="/edit-user" component={EditUserComponent} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
