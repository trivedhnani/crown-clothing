import React, { useEffect } from "react";
// import logo from './logo.svg';
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import Homepage from "./pages/homepage/homepage.component";
import { connect } from "react-redux";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { selectCollectionForPreview } from "./redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        ></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
      </Switch>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectCollectionForPreview,
});
const mapDispatchToProps = (disaptch) => ({
  checkUserSession: () => disaptch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
