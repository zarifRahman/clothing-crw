import React from 'react';
import HomePage from './pages/homepage/homepage.compnent';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ShopPage from './shop/shop.component';
import Header from './header/header.compoent';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
