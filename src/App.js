import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import Homepage from './pages/homepage/homepage.component';
function App() {
  return (
    <div>
        <Header></Header>
        <Switch>
            <Route exact path='/' component={Homepage}></Route>
            <Route exact path='/shop' component={ShopPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
