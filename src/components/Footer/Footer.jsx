import React from 'react'

function Footer() {
  return (
    <div className=' mt-5 py-1'>
    <div className=' col-md-12 col-12 d-flex p-3 mt-5 py-4'>
        
    <div className='col-8'>  &copy; Markatty 2022</div>
    <div className='col-3'>
   <div className='d-flex justify-content-center align-items-center'>
   <img src={require('../../assets/Icon.png')} height={10.67}/>
   <span className=' ms-2'>support@markatty.com</span>
   
   </div>
    </div>
 
   
    
    </div>
    
    </div>
  )
}

export default Footer