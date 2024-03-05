import React, { useState } from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
export const Display = ({ props }) => {

    const handledelete = () => {
        fetch(`http://localhost:5000/delete/${props.value._id}`, { method: "DELETE" }).then((res) => res.json()).then((data) => {
            props.gettingdata();
            console.log(data);
        });


    }
    return (
        <div>
            <div style={ { display: "flex", direction: "row" } }>
                <h2>Name: </h2>
                <h2>{ props.value.name }</h2>
            </div>
            <div style={ { display: "flex", direction: "row" } }>
                <h2>Age: </h2>
                <h2>{ props.value.age }</h2>
            </div>
            <div style={ { display: "flex", direction: "row" } }>
                <h2>occupation/Work : </h2>
                <h2>{ props.value.occupation }</h2>
                <button onClick={ handledelete }> <AiTwotoneDelete /></button>
            </div>
            <hr></hr>
        </div>
    )
}
