import React, { useState } from 'react'
import "../components/signup.css"
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonPrimary from './buttonPrimary'
import ButtonSecondary from './buttonSecondary'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { login } from '../features/userSlice';

function Signup() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ fName, setFName ] = useState("");
    const [ lName, setLName ] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const signUp = (e) =>{
      e.preventDefault() // This line prevents a refresh and allows users to sign up

      if (!fName){
        return alert("Please enter your first name")
      }
      if (!lName){
        return alert("Please enter your last name")
      }
      
      auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>{
        //To sign up a profile first update a profile then login a user
        userAuth.user.updateProfile({
            displayName: fName
        }).then(() =>{
          //Have to dispatch an action called login
          dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: fName,
          })
          )
           history.push("./teslaaccount")
        })
      }).catch((error) => alert(error.message))
    }

  return (
    <div className='signup'>
      <div className="signup__header">
        <div className="signup__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signup__language">
          <FontAwesomeIcon icon="mountain" />
          <span>en-US</span>
        </div>
      </div>
      <div className="signup__info">
        <h1>Create Account</h1>
        <form className="signup__form">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor="fName">Last Name</label>
          <input
            type="text"
            id="lName"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="create account" type="submit" onClick={signUp} />
        </form>
        <div className="signup__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="sign in" />
        </Link>
      </div>
    </div>
  )
}

export default Signup
