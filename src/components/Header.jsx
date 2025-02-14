import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../assets/logo1.png'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Product from '../Page/Product'


const Header = () => {
  return (
    <Navbar style={{zIndex:1}} className='postion-fixed w-100 bg-danger' >
    <Container>
     <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder'>
     <Navbar.Brand href="#home" style={{color:'white', fontSize:'40px'}}>
      <img src={logo} alt="" width={'50'} height={'50'} className='d-inline-block align-top'/>
        Shopper
        </Navbar.Brand>
     </Link>
      <Nav className="ms-auto ">
        <Nav.Link href="/" className='fw-semibolder'style={{color:'white'}}>Home</Nav.Link>
        <Nav.Link href="#categories" style={{color:'white'}}>Categories</Nav.Link>
        {/* <Link to={/product}>Product</Link> */}
        <Nav.Link href="/product" style={{color:'white'}}>Product</Nav.Link>
        <Nav.Link href="/additem" style={{color:'white'}}>Add Product</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header