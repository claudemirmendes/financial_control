import React ,{useState} from 'react'


export default function Button(props) {
    return(
        <button type="button" class={props.class} >{props.text}</button>
    );
}