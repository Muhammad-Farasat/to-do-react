import React from 'react'
import { BiBorderRadius } from 'react-icons/bi'

function Button(props) {

    const buttonStyle = {
        backgroundColor: props.bgColor || '#444444',
        width: props.width,
    }


    return (
    <>
        
        <style>
            {
                `
                @media (max-width: 600px){
                    .btn{
                        width: 20% !important;
                        padding: 0.5rem 0.5rem

                    }
                }
                
                
                
                `
            }
        </style>

        <button 
         className='btn p-2 py-3 ml-2 rounded-md font-bold text-lg max-sm:text-[16px]'
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