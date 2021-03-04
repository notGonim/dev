import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import { LogInAction } from '../reducers/user/userAction'
import '../styles/login.scss'

export const Login = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   

    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(LogInAction(
                    {
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoURL: userAuth.user.photoURL
                    }
                ))
            }).catch(err => alert(err))

    }


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
                <input type="text" placeholder="Your email"  value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Your password"  value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={login}>Log In</button>
                <p>If you don`t have an account <span onClick={createAccountLink}>Create Account</span></p>
            </form>

        </div>
    )
}
