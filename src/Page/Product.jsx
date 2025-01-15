import React, { useEffect, useState } from 'react'
import ViewProduct from '../components/ViewProduct'
import { getAllImageAPI } from '../service/allAPI'
import { Col, Row } from 'react-bootstrap'
Col
getAllImageAPI
useState
useEffect
const Product = () => {
  const [allImage,setAllImage]=useState([])
  
    useEffect(()=>{
       getAllImage()
    },[])
  
    console.log(allImage);
    
  const getAllImage = async()=>{
      try{
          const result =await getAllImageAPI()
          console.log(result);
          if(result.status>=200 && result.status<300){
            //  console.log(result.data);
            setAllImage(result.data)
             
          }else{
            console.log("api call failure");
            
          }
          
      }catch(err){
        console.log(err);
        
      }
  }
  return (
    <>
    <Row>
       {
        allImage?.length>0?
        allImage.map(image=>(
          <Col key={image?.id} sm={12} md={6} lg={3}>
          <ViewProduct displayData={image}/>
          </Col>
        ))
        :
        <div className='fw-bolder fs-5 text-danger'>No Product are uploaded</div>
       }
    </Row>
    </>
  )
}

export default Product