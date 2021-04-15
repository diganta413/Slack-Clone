import React from 'react'
import './Header.css'
import HistoryIcon from '@material-ui/icons/History';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { AvTimerSharp } from '@material-ui/icons';
import {DataLayer} from "./Datalayer";

function Header() {

    const [{user},dispatch] = DataLayer();



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
                    <Avatar variant="square" className="avatar" src={user.user.photoURL}/>
                    <span></span>
                </div>
                
                
                
            </div>
            
        </div>
    )
}

export default Header
