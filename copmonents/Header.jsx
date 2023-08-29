import React, { useState } from 'react'

function Header(props) {
    
  return (
    <header>
        <div className="container">
        {props.text}
        </div>
      
    </header>
  )
}

export default Header
