import React from 'react'
import "./Message.css"

function Message({message}) {
    return (
        <div className="message">
            <img src={message.userimg}></img>
            <div className="message_body">
                <h3>{message.user}  <span>{new Date((message.time).toDate()).toDateString()}</span></h3> 
                <p>{message.message}</p>
            </div>
        </div>
    )
}

export default Message
