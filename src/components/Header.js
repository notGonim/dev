import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/header.scss'




export const Header = () => {

    let history = useHistory()

    const createAccountLink = () => {
        history.push("/signup");
    }

    const mainLink = () => {
        history.push('/')
    }
    const loginLink = () => {
        history.push("/login");
    }


    return (
        <div className="header_container">
            <div className="icon">
                <p onClick={mainLink}>DEV</p>
            </div>
            <div className="btn_container">
                <button className="btn_login" onClick={loginLink}>Login</button>
                <button className="btn_signup" onClick={createAccountLink}>Sign Up</button>
            </div>
        </div>
    )
}
