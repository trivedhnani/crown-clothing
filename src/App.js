import React from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import Homepage from './pages/homepage/homepage.component';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
          <Header currentUser={this.state.currentUser}></Header>
          <Switch>
              <Route exact path='/' component={Homepage}></Route>
              <Route exact path='/shop' component={ShopPage}></Route>
              <Route exact path='/signin' component={SignInSignUp}></Route>
          </Switch>
      </div>
    );
    }
}

export default App;
