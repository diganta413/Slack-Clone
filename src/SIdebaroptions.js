import React from 'react'
import "./Sidebaroptions.css"

function SIdebaroptions({ Icon,name }) {
    return (
        <div className="sidebaroptions">
            <Icon />
            <p>{name}</p>
        </div>
    )
}

export default SIdebaroptions
