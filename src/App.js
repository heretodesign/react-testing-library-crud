import React from 'react'
import './App.css'
import ListUserComponent from "./user/ListUserComponent"
import AddUserComponent from "./user/AddUserComponent"
import EditUserComponent from "./user/EditUserComponent"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <Container maxWidth="md">
      <Navbar />
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
