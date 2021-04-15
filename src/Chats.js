import React,{useState,useEffect} from 'react'
import './Chats.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import {useParams} from "react-router-dom";
import db from "./firebase";
import Message from "./Message";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import {DataLayer} from "./Datalayer";
import firebase from "firebase";


function Chats() {
    const [{user},dispatch] = DataLayer();
    const { roomid } = useParams();
    const [messages,setmessages] = useState([]);
    const [room,setroom] = useState("");
    const [input,setinput] = useState("");

    useEffect(() => {
        db.collection("channels").doc(roomid).collection("messages").orderBy("time").onSnapshot((snapshot) => {
            setmessages(snapshot.docs.map((doc) => doc.data()));
        })
        db.collection('channels').doc(roomid).get()
        .then(snapshot => setroom(snapshot.data().name))
    }, [roomid])

    const addmessage = () => {
        db.collection("channels").doc(roomid).collection("messages").add({
              message: input,
              user: user.user.displayName,
              userimg: user.user.photoURL,
              time: firebase.firestore.FieldValue.serverTimestamp()    
        })
        console.log("Heloo")
    }
    console.log(user);

    
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_header_left">
                    <p><span>#</span>{room}</p>
                    <StarBorderIcon className="icon"/>
                </div>
                <div className="chat_header_right">
                    <p>Details</p>
                    <InfoIcon className="icon"/>
                </div>
            </div>
            <hr/>
            <div className="chat_body">
                <div className="messages">
                    {messages?.map((message) => <Message message={message}/>)}
                </div>
                
                <div className="input">
                    <TextField id="standard-basic" label="Enter message" className="text" value={input} onChange={(e) => setinput(e.target.value)}/>
                    <button className="button" onClick={addmessage} disabled={!input}>Send</button>
                    
                    
                </div>
            </div>
            
        </div>
    )
}

export default Chats