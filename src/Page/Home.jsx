import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import home_img from '../assets/home-img.jpeg'
import { Button, Card, Col, Row } from 'react-bootstrap'
import cat_img from '../assets/cat-img.jpg'
import cat_img1 from '../assets/cat-img1.jpeg'
import cat_img2 from '../assets/cat-img2.jpeg'
import cat_img3 from '../assets/cat-img3.jpeg'
import Product from './Product'
import View from '../components/View'
import ViewProduct from '../components/ViewProduct'
useState
useEffect
Row
Col



const Home = () => {

  // const [allImage,setAllImage]=useState([])
    
  //     useEffect(()=>{
  //        getAllImage()
  //     },[])
    
  //     console.log(allImage);
      
  //   const getAllImage = async()=>{
  //       try{
  //           const result =await getAllImageAPI()
  //           console.log(result);
  //           if(result.status>=200 && result.status<300){
  //             //  console.log(result.data);
  //             setAllImage(result.data)
               
  //           }else{
  //             console.log("api call failure");
              
  //           }
            
  //       }catch(err){
  //         console.log(err);
          
  //       }
  //   }
  return (

   <div className='container' style={{paddingTop:'100px'}}>
     <div className='d-flex justify-content-center align-items-center'>
      <div className="col-lg-5 ">
        <h2>MODERN COLLECTION</h2>
        <h4>Grab Upto  <span className='text-danger'> 50% Off</span>  On Selected Product</h4>
        <p style={{textAlign:'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In beatae possimus rerum! Dolorem porro eveniet laboriosam vitae officia architecto quis minus unde temporibus, nulla, ratione magnam suscipit. Nulla, aliquam minus?</p>
<Link to={'/product'} className='btn btn-danger '>Popular Product<i class="fa-solid fa-arrow-right ms-2"></i></Link>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
  <img src={home_img}alt="" style={{width:'100%'}} className='img-fluid'/>
      </div>
    </div>
    {/* getting from */}
<div className='d-flex justify-content-around  m-5 border p-4 shadow '>
<div className="col-lg-3 ">
<p>
<i class="fa-solid fa-truck-fast me-2"></i>Free Shipping<br></br>
On above 100 oder
</p>
</div>
<div className="col-lg-3">
  <p>
  <i class="fa-solid fa-percent me-2"></i>
  Member Discount <br />
  Discount For elite member
  </p>
</div>
<div className="col-lg-3">
  <p>
  <i class="fa-solid fa-headset me-2"></i>
  Fast Support <br />
  24/7 Customer Support
  </p>
</div>
<div className="col-lg-3">
<i class="fa-solid fa-rotate-left me-2"></i> 
Easy Return <br />
14 Day Easy Return
</div>
</div>

{/* caetegories */}
<div className="d-flex justify-content-around align-items-center mt-5 border p-5 shadow">
  <div className="row text-center">
<h4>Select</h4>
<h2>Categories</h2>
  <div className="col-lg-4 mt-5">
    
  <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={cat_img }   style={{height:'220px'}}/>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Women</Card.Title>
      </Card.Body>
    </Card>
  </div>
  <div className="col-lg-4 mt-5">
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cat_img1 } style={{height:'220px'}} />
      <Card.Body>
        <Card.Title  style={{textAlign:'center'}}>Men</Card.Title>
      </Card.Body>
    </Card>
  </div>
  <div className="col-lg-4 mt-5">
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cat_img2 } style={{height:'220px'}} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>kids</Card.Title>
      </Card.Body>
    </Card>
  </div>
  {/* <div className="col mt-5">
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cat_img3 } style={{height:'220px'}} />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Cosmetrics</Card.Title>
      </Card.Body>
    </Card>
  </div> */}
 

</div>
</div>

{/* product */}
<div className="d-flex justify-content-between text-center mt-5 border p-3 shadow ">
<div className="row text-center">
<h4>See</h4>
<h2>Products</h2>
  <div className="col mt-3">
    <View />
  </div>
  </div>
</div>

  

  </div>
  )
}

export default Home