import React from 'react'
import {useHistory} from "react-router-dom";
import './Header.css'
import HistoryIcon from '@material-ui/icons/History';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { AvTimerSharp } from '@material-ui/icons';
import {DataLayer} from "./Datalayer";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {auth} from "./firebase";

function Header() {

    const [{user},dispatch] = DataLayer();
    let history = useHistory();

    const signout = () => {
        auth.signOut().then(() =>
            window.location.assign('https://accounts.google.com/Logout')
        ).catch((err) => console.log(err))
    }

    return (
        <div className="Header">
            <div className="header_left">
                <HistoryIcon />
            </div>
            <div className="header_middle">
                <input placeholder="Search"/>
            </div>
            <div className="header_right">
                <HelpOutlineIcon />
                <div className="avatar">
                    <Avatar variant="square" className="avatar" src={user?.user?.photoURL}/>
                    <span></span>
                </div>
                <IconButton onClick={signout} className="sign_out">
                        <ExitToAppIcon/>
                </IconButton>
                
                
            </div>
            
        </div>
    )
}

export default Header
