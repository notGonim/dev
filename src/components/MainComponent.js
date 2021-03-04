import React from 'react'
import { useHistory } from 'react-router-dom'
import imgMain from '../img/maindev.png'
import '../styles/mainComponents.scss'
export const MainComponent = () => {

    let history = useHistory()

    const createAccountLink = () => {
        history.push("/signup");
    }

    return (
        <div className="main_component__container">
            <div className="main_text">
                <h2>For Developers</h2>
                <p>Join developers all over the world and get connected with what
                        they share</p>
                <button className="btn_lg" onClick={createAccountLink}>Sign Up & Share Exp ...</button>
            </div>
            <div className="main_img">
                <img src={imgMain} alt="developers " />
            </div>
        </div>
    )
}
