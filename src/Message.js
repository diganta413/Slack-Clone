import React from 'react'
import "./Message.css"

function Message({message}) {
    console.log(message)


    return (
        <div className="message">
            <img src={message && message.userimg}></img>
            <div className="message_body">
                <h3>{message && message.user}  <span>{message.time && new Date((message.time).toDate()).toDateString()}</span></h3> 
                <p>{message.message}</p>
            </div>
        </div>
    )
}

export default Message
