import React from 'react'
 const Cockpit = props =>{

    return(
        <button type="submit" onClick={props.clickHandel} className={props.btn}>
        click Me...!
      </button>
    )
 }

export default Cockpit;