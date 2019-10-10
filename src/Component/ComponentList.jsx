import React, { Component } from 'react';

function ComponentList(props) {
    return(
        <ul>
            {
                props.items.map( (item, index) => 
                    <li key={index} >{item}</li>
                )
            }
        </ul>
    )
}

export default ComponentList;