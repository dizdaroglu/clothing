import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="email"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                        label="password"
                        handleChange={this.handleChange}
                    />

                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign in
                         </CustomButton>
                        <CustomButton
                            isGoogleSignIn
                            onClick={signWithGoogle}
                            type="submit">
                            Sign in with Google
                          </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn