import React from 'react'
import './Header.css'
import dresteinlogo from '../logo_bgremove.png'
function Header({seclogo}) {
  return (
    <div className='container2' >
    <div className='sec_logo_container'>
    
            <img src={seclogo} className='sec_logo' alt='logo'/>
    </div>
    <div className='nav_items'>
    
    <span className='Active'>HOME</span>
    <span className=''>EVENTS</span>
    <span className=''>REGISTER</span>
    <span className=''>ABOUT</span>
    </div>
            <div className="logo_head">
              
            <img
              src={dresteinlogo}
              alt="Not Found"
              className="logo-bgremove"
            />
            <div className="event-logo">
              <p className="txt-297 flex-hcenter">DRESTEIN</p>
              <p className="txt-384 flex-hcenter">2 0 2 2</p>
    
          </div>
    
          </div>
       
       </div>
  )
}

export default Header