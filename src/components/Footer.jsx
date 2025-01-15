import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../assets/logo1.png'


const Footer = () => {
  return (
    <div style={{height:'300px',paddingLeft:'20px'}} className='container w-100 mt-5'>
    <div className='d-flex justify-content-between'>
      {/*intro */}
      <div style={{width:'400px'}}>
         
        <h5> <img src={logo} alt="" width={'40'} height={'40'} className='d-inline-block align-top'/>
        Shopper</h5>
        <p>Designed and built with all the love in the world by the luminar team with the help of our contributors</p>
        <p>code licensed </p>
      </div>
      {/* links */}
      <div className='d-flex flex-column'>
        <h5>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'black'}}>Landing</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'black'}}>Home Page</Link>
        <Link to={'/history'} style={{textDecoration:'none',color:'black'}}>History Page</Link>
      </div>
      {/*guides */}
      <div className='d-flex flex-column'>
        <h5>Guides</h5>
        <Link to={''} style={{textDecoration:'none',color:'black'}} target='_blank'>React</Link>
        <Link to={''} style={{textDecoration:'none',color:'black'}} target='_blank'>React Bootstrap</Link>
        <Link to={''} style={{textDecoration:'none',color:'black'}} target='_blank'>React Router</Link>
      </div>
      {/*contact */}
      <div className='d-flex flex-column'>
        <h5>Contacts</h5>
        <div className='d-flex'>
        <input type='text' placeholder='enter your email here' className='form-control me-2'/>
        <button className='btn btn-danger'><i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className='d-flex justify-content-between mt-2 '>
        <Link to={'https://x.com'} style={{textDecoration:'none',color:'black'}} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
        <Link to={'https://www.instagram.com'} style={{textDecoration:'none',color:'black'}} target='_blank'><i className="fa-brands fa-instagram"></i></Link>
        <Link to={'https://www.linkedin.com/home?originalSubdomain=in'} style={{textDecoration:'none',color:'black'}} target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
        <Link to={'https://github.com'} style={{textDecoration:'none',color:'black'}} target='_blank'><i className="fa-brands fa-github"></i></Link>
        <Link to={'https://www.facebook.com'} style={{textDecoration:'none',color:'black'}} target='_blank'><i className="fa-brands fa-facebook"></i></Link>
        <Link to={'https://www.truecaller.com'} style={{textDecoration:'none',color:'black'}} target='_blank'><i className="fa-solid fa-phone"></i></Link>
        </div>
       </div>

    </div>
    <hr />
    <p className='text-center mt-4'>Copyright &copy;Jan 2025,Shopper,Built with React </p>
  </div>
 
 



  )
}

export default Footer