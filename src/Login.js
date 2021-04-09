import React from 'react'
import "./Login.css"
import {auth,provider} from "./firebase";

function Login() {

    const log = () => {
        auth.signInWithPopup(provider)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }

    return (
        <div className="login">
            <div className="container">
                <img src="https://www.flaticon.com/svg/vstatic/svg/2111/2111615.svg?token=exp=1617903620~hmac=ec5a2967b45329498e526230c72987e2"></img>
                <h3>Welcome to The Programming Server</h3>
                <button onClick={log}>Log in with Google</button>
            </div>
            
            
        </div>
    )
}

export default Login
