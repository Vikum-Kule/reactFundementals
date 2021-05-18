import React from 'react';

function ItemList(props){
    return(
        <React.Fragment>
            <li>
                <p><img src={props.picture}  /></p>
                <p>{props.name}</p>
                <p>{props.city}</p>
                <p>{props.email}</p>
                <p>{props.birthday}</p>
                <p>{props.picture}</p>
            </li>
        </React.Fragment>


    );
}
export default ItemList;