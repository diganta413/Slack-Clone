import React,{useContext} from 'react'
import "./Login.css"
import {auth,provider} from "./firebase";
import {DataLayer} from "./Datalayer";

function Login() {

    const [state,dispatch] = DataLayer();

    const log = () => {
        auth.signInWithPopup(provider)
        .then((result) => dispatch({type: "SET_USER",user: result}))
        .catch((err) => console.log(err));
    }

    console.log(state.user);

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
