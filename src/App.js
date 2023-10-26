import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./components/menu";
import Landing from "./pages/landing";
import Login from "./components/login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Signup from "./components/signup";
import TeslaAccount from "./pages/teslaaccount";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  //persistence login
  //runs under a specific condition and [] makes it run once when components load
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
          //onAuthStateChanged checks if user is logged in or logged out
      if (userAuth) {
        // User is signed in
        dispatch(
           //if user is signed in we dispatch login action
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        //user is signed out, we have to dispatch an action
        dispatch(logout())
      }
    })
  }, [dispatch])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <Landing />
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/teslaaccount" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/teslaaccount">
            {!user ? (
              <Redirect to="/login" />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
