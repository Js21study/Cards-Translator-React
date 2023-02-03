import React, { useState } from 'react'
import { TfiClose} from "react-icons/tfi"



function Item({id, name, translation, color, onDelete}) {

    const [open, setOpen] = useState(false)
  return (
    <>
    {!open && (<div onClick={() => setOpen(!open)} className='cart' style={{background: color}}>
        <span onClick={(e) => {
          e.preventDefault()
          onDelete(id)}
          } className='close-card'><TfiClose/></span>
     
        <h1>{name}</h1>
    </div>)
   }

    {open && (
        
        <div  onClick={() => setOpen(!open)} className='cart' style={{background: color}}>
          <span onClick={(e) => {
          e.preventDefault()
          onDelete(id)}
          } className='close-card'><TfiClose/></span>
        <h1>{translation}</h1>
    </div>
    )}
    </>
  )
}

export default Item