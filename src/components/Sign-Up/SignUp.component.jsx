import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/actions/user/user.action';
import CustomButton from '../Custom-Button/Custom-Button.component'
import FormInput from '../Form-Input/Form-Input.component'
import './SignUp.styles.scss';

class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        const {signUpStart} = this.props
        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword){
            alert('Password not match')
            return
        }

        signUpStart({email, password, displayName})

    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" >
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />

                    <FormInput 
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />

                    <CustomButton onClick={this.handleSubmit} type="submit">SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}

const mapsDispatchToProps = dispatch => ({
    signUpStart:(userCredential) => dispatch(signUpStart(userCredential))
})

export default connect(null, mapsDispatchToProps)(SignUp)