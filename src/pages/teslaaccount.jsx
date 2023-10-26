import React from 'react'
import "../pages/teslaaccount.css"
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from 'react-redux';
import Car from '../components/car';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function TeslaAccount({ isMenuOpen,setIsMenuOpen }) {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutOfApp = () =>{
        auth.signOut().then(() =>{
            dispatch(logout())
            history.push('/')
        }).catch((error) => alert(error.message))
    }

  return (
    <div className='teslaAccount'>
        <div className="teslaAccount__header">
            <div className="teslaAccount__logo">
                <Link to="/">
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="" />
                </Link>
            </div>
            <div className="teslaAccount__links">
                <Link className='link__hidden' to="/teslaaccount"> Model S</Link>
                <Link className='link__hidden' to="/teslaaccount"> Model 3</Link>
                <Link className='link__hidden' to="/teslaaccount"> Model X</Link>
                <Link className='link__hidden' to="/teslaaccount"> Model Y</Link>
                <Link className='link__hidden' to="/teslaaccount"> Solar Roof</Link>
                <Link className='link__hidden' to="/teslaaccount"> Solar Panels</Link>
                <Link className='link__hidden' to="/teslaaccount"> Shop</Link>
                <Link to="/teslaaccount"> Tesla Account</Link>
                <Link onClick={logoutOfApp} to="/"> Logout</Link>
                <div className="teslaAccount__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FontAwesomeIcon icon="xmark" className='teslaAccount__closeMenu'/> : <FontAwesomeIcon icon="bars" />}
                </div>
            </div>
        </div>
        <div className="teslaAccount__info">
            <div className="teslaAccount__person">
                <h4>{user?.displayName + "'s Tesla"}</h4>
            </div>
            <div className="teslaAccount__infoRight">
                <Link>Home</Link>
                <Link>Account</Link>
                <Link>History</Link>
                <Link onClick={logoutOfApp} to="/">Sign Out</Link>
            </div>
        </div>
        <div className="teslaAccount__car">
            <Car imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815" model="model S" testDrive/>
            <Car imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815" model="model X" testDrive/>
        </div>
    </div>
  )
}

export default TeslaAccount
