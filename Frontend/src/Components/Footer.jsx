// import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button id='bt' className='item-center text-green-500' style={{height:"50px"}} >Contact us</button>
    </div>
    <p style={{color:"white"}}>
    "Empowering Your Journey: Plug in, Power Up - Your Ultimate EV Charge Finder Companion!"</p>
        <p  style={{ color: 'white', marginBottom: '0' }}>Call At: 127-865-586-67</p>
  <p style={{ color: 'white', marginBottom: '0' }}>
  Copyright  &copy; {new Date().getFullYear()} By Ev Charge. <br/>All Rights Reserved.
  </p>
</footer>
</div>
  )
}

export default Footer