import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import CreateIcon from '@material-ui/icons/Create';
import Sidebaroptions from "./SIdebaroptions";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleIcon from '@material-ui/icons/People';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase.js";
import Chats from './Chats';

function Sidebar() {
    const [channels,setchannels]=useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot(snapshot => {
            setchannels(snapshot.docs.map((doc) => ({
                id:doc.id,
                name:doc.data().name,
            })))
    })
        
    }, [])
    

    return (
        <div className="sidebar"> 
            <div className="sidebar_header">
                <h3>Programming</h3>
                <CreateIcon/>
            </div>
            <div className="sidebar_body">
                <Sidebaroptions Icon={MarkunreadIcon} name="All unreads"/>
                <Sidebaroptions Icon={BookmarkBorderIcon} name="Saved Items" />
                <Sidebaroptions Icon={ListIcon} name="File Browser" />
                <Sidebaroptions Icon={AppsIcon} name="Apps" />
                <Sidebaroptions Icon={PeopleIcon} name="People and user group"/>
                <Sidebaroptions Icon={ExpandLessIcon} name="Show less" className="show"/>
                <hr/>
                <Sidebaroptions Icon={ExpandMoreIcon} name="Channels" />
                <hr/>
                <Sidebaroptions Icon={AddIcon} name="Add Channel"/>
                {channels.map((channel) =>(
                    <Sidebaroptions name={channel.name} id={channel.id}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
