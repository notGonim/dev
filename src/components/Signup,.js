import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/signup.scss'
export const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()
    let history = useHistory()




    const createAccountLink = () => {
        history.push("/login");
    }
    return (
        <div className="signup_container">
            <div className="signup_text">
                <h1 className="title">DEV</h1>
                <h4>For Developers </h4>
                <p>Join Us and Enjoy Sharing your Experience with other developers </p>
            </div>
            <form >
                <input type="text" placeholder="Your Username" value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Your email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Photo URL" value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)} />
                <input type="password" placeholder="Your password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button>Sign Up</button>
                <p>If you  have an account <span onClick={createAccountLink}>Log In </span></p>
            </form>
            <div className="footer">
                <p >By signing up you agree to our <span> Terms of Service and Privacy Policy</span></p>
            </div>
        </div>
    )
}
