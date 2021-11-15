import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/actions/user/user.action';
import CustomButton from '../Custom-Button/Custom-Button.component'
import FormInput from '../Form-Input/Form-Input.component'
import './SignUp.styles.scss';

const SignUp = ({signUpStart}) => {

    const [credentails, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {displayName, email, password, confirmPassword} = credentails

    const handleSubmit = async(event) => {
        event.preventDefault()

        if(password !== confirmPassword){
            alert('Password not match')
            return
        }

        signUpStart({email, password, displayName})

    }

    const handleChange = event => {
        const {name, value} = event.target;

        setCredentials({...credentails,[name]: value})
    }

        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" >
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={handleChange}
                        label="Display Name"
                        required
                    />

                    <FormInput 
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton onClick={handleSubmit} type="submit">SIGN UP</CustomButton>

                </form>
            </div>
        )
    }

const mapsDispatchToProps = dispatch => ({
    signUpStart:(userCredential) => dispatch(signUpStart(userCredential))
})

export default connect(null, mapsDispatchToProps)(SignUp)