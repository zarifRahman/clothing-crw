import React from 'react';
import HomePage from './pages/homepage/homepage.compnent';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ShopPage from './shop/shop.component';
import Header from './header/header.compoent';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up';
import {auth}  from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App;
