import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch'
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Instructions from './components/Instructions'
import paperbackground from './components/paperbackground.png'
import ShoppingList from './components/ShoppingList'


const App = () => {
  return (
  <div style={{
    // backgroundImage: `url(${paperbackground})`,
    // backgroundSize: 'cover',
    backgroundColor: 'mintcream',
    height: '100vh',
    // overflow: 'hidden',
  }}
  >
    <NavBar />
    <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        {/* <ProtectedRoute exact path='/ShoppingList' component={ShoppingList} /> */}
        <Route exact path='/Instructions' component={Instructions} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Container>
    </FetchUser>
  </div>
  )
}
export default App;
