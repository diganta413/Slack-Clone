import React,{useState,useEffect} from 'react'
import './Chats.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import {useParams} from "react-router-dom";
import db from "./firebase";
import Message from "./Message";

function Chats() {

    const { roomid } = useParams();
    const [messages,setmessages] = useState([]);
    const [room,setroom] = useState("");

    useEffect(() => {
        db.collection("channels").doc(roomid).collection("messages").onSnapshot((snapshot) => {
            setmessages(snapshot.docs.map((doc) => doc.data()));
        })
        db.collection('channels').doc(roomid).get()
        .then(snapshot => setroom(snapshot.data().name))
    }, [roomid])


    console.log(messages);
    
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
                {messages?.map((message) => <Message message={message}/>)}
            </div>
            
        </div>
    )
}

export default Chats