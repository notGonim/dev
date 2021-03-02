import React from 'react'
import '../styles/header.scss'




export const Header = () => {
    return (
        <div className="header_container">
            <div className="icon">
                <p>DEV</p>
            </div>
            <div className="btn_container">
                <button className="btn_login">Login</button>
                <button className="btn_signup">Sign Up</button>
            </div>
        </div>
    )
}
