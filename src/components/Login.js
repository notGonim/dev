import { Button } from '@material-ui/core'
import React from 'react'
import '../styles/login.scss'

export const Login = () => {
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
            </form>
        </div>








        /*
        <div className="login_container">
              <h2 className="title">DEV</h2>
              <h4>For Developers </h4>
              <p>Join Us and Enjoy Sharing your Experience  </p>
              <div className="login_form">
                  <input type="text" placeholder="Your email" />
                  <input type="password" placeholder="Your password" />
                  <button >Log In</button>
              </div>
          </div>
        */


    )
}
