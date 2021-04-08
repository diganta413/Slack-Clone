import React from 'react'
import "./Sidebaroptions.css"
import db from "./firebase";
import {useHistory} from "react-router-dom";

function SIdebaroptions({ Icon,name,id }) {
    let history = useHistory();

    const add = () => {
        if(!Icon)
        {
            if(id)
            {
                history.push(`/room/${id}`);
            }
            
        }
        else
        {
            const channel = prompt("Enter channel name");
            db.collection("channels").add({
                name: channel
            })

        }
    }

    return (
        <div className={Icon ? "sidebaroptions" : "sidebaroptions_channel"} onClick={add}>
            {Icon && <Icon />}
            {Icon ? (<p>{name}</p>):(<p><span>#</span> {name}</p>)}
        </div>
    )
}

export default SIdebaroptions
