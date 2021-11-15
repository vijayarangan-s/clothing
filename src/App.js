import React,{ Component, useEffect } from "react";
import HomePage from "./components/Pages/HomePage/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./components/Pages/Shop/Shop.component";
import { useSelector, useDispatch } from "react-redux";
import { SignInAndSignUp } from "./components/Pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./utils/Selectors/user.selectors";

import Header from "./components/Header/Header.component";
import Checkout from "./components/Checkout/Checkout";

import "./App.css";
import { checkUserSession } from "./redux/actions/user/user.action";


const App = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])


    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default App;
