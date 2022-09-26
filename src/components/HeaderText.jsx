import React from 'react'
import './Header.css'
function HeaderText() {
  return (
    <div  className='main_header' >


    <div className='header_bg'>
    <div  className='header_main_text'>
    <p>
  
  <span className='let_1'>DR</span>eam <span className='let_2'>dES</span>ign<br/>
  compete<span className='let_3'>TE</span> w<span className='let_4'>IN</span></p>
    </div>
    <div className='timer'> 
      12<span>days</span> 35<span>hrs</span><br/> 45<span>mins</span>
    </div>

      </div>

      <div className='header_btn'>

     <button className='register_now' ><span>register now</span></button>
      </div>


      </div>
  )
}

export default HeaderText