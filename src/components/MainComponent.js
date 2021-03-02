import React from 'react'
import imgMain from '../img/maindev.png'
import '../styles/mainComponents.scss'
export const MainComponent = () => {
    return (
        <div className="main_component__container">
            <div className="main_text">
                <h2>For Developers</h2>
                <p>Join developers all over the world and get connected with what
                        they share</p>
                        <button className="btn_lg">Sign Up & Share Exp ...</button>
            </div>
            <div className="main_img">
                <img src={imgMain} alt="developers " />
            </div>
        </div>
    )
}
