import React,{useContext, useEffect} from 'react'
import "./Login.css"
import {auth,provider} from "./firebase";
import {DataLayer} from "./Datalayer";

function Login() {

    const [state,dispatch] = DataLayer();

    

    const log = async () => {
        await auth.signInWithPopup(provider)
        .then((result) => dispatch({type: "SET_USER",user: result}))
        .catch((err) => console.log(err));
    }


    return (
        <div className="login">
            <div className="container">
                <img src="https://img.icons8.com/color/452/google-logo.png"></img>
                <h3>Welcome to The Programming Server</h3>
                <button onClick={log}>Log in with Google</button>
            </div>
        </div>
    )
}

export default Login
