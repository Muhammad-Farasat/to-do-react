import React from 'react'
import { BiBorderRadius } from 'react-icons/bi'

function Button(props) {

    const buttonStyle = {
        backgroundColor: props.bgColor || '#444444',
        width: props.width,
    }

    return (
    <>
        <button 
         className='p-2 py-3 ml-2 rounded-md'
         style={buttonStyle}
         name={props.name}
         onClick={props.click}
        >
            {props.children}
        </button>
    </>

)
}

export default Button