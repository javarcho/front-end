import React from 'react';

function Item ({itm}) {
    
    return(
        <div className = 'item container'>
            <h2>{itm.name}</h2>
            <p>{itm.location}</p>
            <p>{itm.description}</p>
            <p>{itm.price}</p>
        </div>
    )
}

export default Item