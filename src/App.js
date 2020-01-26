import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import firebase from './firebase'

import './global.css'
import Home from './components/Home'
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Register from './components/Register';


class App extends Component {

  state = {
    firebaseInitialized: false
  }

  componentDidMount(){
    firebase.isInitialized().then(resultado => {
      //devolve o usuário
      this.setState({firebaseInitialized: resultado})
    })
  }

  render() {
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    )
  }
}

export default App;
