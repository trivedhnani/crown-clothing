import React from 'react';
// import logo from './logo.svg';
import {Switch, Route,Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import Homepage from './pages/homepage/homepage.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
class App extends React.Component {
  unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
       const userRef= await createUserProfileDocument(userAuth);
         userRef.onSnapshot(snapShot=>{
              setCurrentUser({
                id:snapShot.id,
                ...snapShot.data()
            });
         });
      }
    setCurrentUser(userAuth); //if user logs out we set currentUser to null
  });
}
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
          <Header ></Header>
          <Switch>
              <Route exact path='/' component={Homepage}></Route>
              <Route path='/shop' component={ShopPage}></Route>
              <Route exact path='/signin' render={()=>(this.props.currentUser?<Redirect to='/' />:<SignInAndSignUp/>)}></Route>
              <Route exact path='/checkout' component={CheckoutPage}></Route>
          </Switch>
      </div>
    );
    }
} 
const mapStateToProps=({user})=>(
{
  currentUser:user.currentUser
}  
);
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user)) //Setcurrentuser is a property different from imported function
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
