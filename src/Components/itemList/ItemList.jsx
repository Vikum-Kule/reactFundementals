import React from 'react';
import './ItemList.css';
function ItemList(props){
    return(
        <React.Fragment>
            <li className="list-group-item shadow-sm">
                <div className= "row align-items-center shadow-sm">
                    <div className="col-2">
                        <p ><img src={props.picture} alt= {props.name} className="border rounded-circle shadow-sm" /></p>
                    </div>
                    <div className="col-10">
                        <p className="redtext">{props.name}</p>
                        <p>{props.city}</p>
                        <p>{props.email}</p>
                        <p>{props.birthday}</p>
                        <p>{props.picture}</p>
                    </div>
                </div>
            </li>
        </React.Fragment>


    );
}
export default ItemList;