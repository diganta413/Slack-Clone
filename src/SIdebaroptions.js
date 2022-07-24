import React from 'react'
import "./Sidebaroptions.css"
import db from "./firebase";
import {useHistory} from "react-router-dom";
import {DataLayer} from "./Datalayer";

function SIdebaroptions({ Icon,name,id }) {
    let history = useHistory();
    const [{room},dispatch] = DataLayer();

    const add = () => {
        if(!Icon)
        {
            if(id)
            {
                db.collection("channels").onSnapshot((snapshot) => { 
                snapshot.docs.forEach((doc)=> {
                    if(doc.id==id)
                    {
                        dispatch({type: "SET_ROOM",room: doc.data()})
                    }
                })})
                history.push(`/room/${id}`);
            }
            
        }
        if(name=="Add Channel")
        {
            const channel = prompt("Enter channel name");
            if(channel)
            {db.collection("channels").add({
                name: channel
            })
        }
        }
    }

    console.log(room);

    return (
        <div className={Icon ? "sidebaroptions" : "sidebaroptions_channel"} onClick={add}>
            {Icon && <Icon />}
            {Icon ? (<p>{name}</p>):(<p><span>#</span> {name}</p>)}
        </div>
    )
}

export default SIdebaroptions
