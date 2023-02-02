import React, { useState } from 'react'



function Item({name, translation, color}) {

    const [open, setOpen] = useState(false)
  return (
    <>
    {!open && <div onClick={() => setOpen(!open)} className='cart' style={{background: color}}>
        <h1>{name}</h1>
    </div>
   }

    {open && (
        <div  onClick={() => setOpen(!open)} className='cart' style={{background: color}}>
        <h1>{translation}</h1>
    </div>
    )}
    </>
  )
}

export default Item