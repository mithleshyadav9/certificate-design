import React from 'react'

function  Middle({name,desc}) {
    return(
        <div>
        <div className="info"><p>This certificate is proudly presented to:</p></div>
        <div className="name">{name}</div>
        <div className="description"><p>{desc}</p></div>
        </div>
    );
}

export default Middle;