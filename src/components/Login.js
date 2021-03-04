import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/login.scss'

export const Login = () => {
    let history = useHistory()

    const createAccountLink = () => {
        history.push("/signup");
    }
    return (
        <div className="login_container">
            <div className="login_text">
                <h1 className="title">DEV</h1>
                <h4>For Developers </h4>
                <p>Join Us and Enjoy Sharing your Experience with other developers </p>
            </div>
            <form >
                <input type="text" placeholder="Your email" />
                <input type="password" placeholder="Your password" />
                <button>Log In</button>
                <p>If you don`t have an account <span onClick={createAccountLink}>Create Account</span></p>
            </form>
         
        </div>
    )
}
