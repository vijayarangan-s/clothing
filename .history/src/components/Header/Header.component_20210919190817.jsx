import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../images/crown.svg'
import { auth } from '../firebase/firebase.utils'
import './Header.styles.scss'

export const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ?
                     <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                     :
                     <Link to='/signin'> SIGN IN</Link>
                }
            </div>
        </div>
    )
}
