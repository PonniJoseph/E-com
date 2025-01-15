import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import cat_img2 from '../assets/cat-img2.jpeg'
import { Link } from 'react-router-dom'
import { removeImageAPI, saveHistoryAPI } from '../service/allAPI'

useState
const ViewProduct = ({displayData,setDeleteImageResponse}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    //display modal
    setShow(true);
    // store history in json
    const{caption,categoies,price} = displayData
    const historyDetails ={caption,categoies,price}
    try{
      await saveHistoryAPI(historyDetails)
    }catch(err){
      console.log(err);
      

    }
  }

  const deleteImage = async(id)=>{
    try{
     const result =await removeImageAPI(id)
     setDeleteImageResponse(result)
    }catch(err){
       console.log(err);
       
    }
  }
  const viewImageDragStarted=(e,dragImageDetails)=>{
    console.log("inside viewImageDragStated with imageId:"+dragImageDetails?.id);
    //share data using event drag 
    e.dataTransfer.setData("ImageDetails",JSON.stringify(dragImageDetails))
    
    
  }


  return (
    <>
    {/* card */}
     <Card draggable={true} onDragStart={e=>viewImageDragStarted(e,displayData)} style={{ width: '13rem' }} className='mt-5'>
      <Card.Img onClick={handleShow} height={'150px'} variant="top" src={displayData?.ImgUrl} />
      <Card.Body>
        <Card.Title className='text-center'>{displayData.caption}</Card.Title>
       <div className='d-flex justify-content-between'>
       <h5 style={{fontSize:'15px'}}>{displayData.categoies}</h5>
       <button onClick={()=>deleteImage (displayData?.id)} className='btn '> <i class="fa-solid fa-trash text-danger "></i></button> 
       </div>

        <Card.Text >
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
          <p style={{fontWeight: '900',fontSize:'20px' ,textAlign:'center'}}>{displayData.price}</p>
        </Card.Text>
        <div className='d-flex justify-content-between'>
       
       <Link to={'/wishlist'}> <button className='btn btn-danger'><i class="fa-solid fa-heart"></i></button></Link>
       <Link to={'/cart'}> <button className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></button>
       </Link>
        </div>

       
      </Card.Body>
    </Card>




    {/* modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>View the Product!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img width={"100%"} height={"500px"} src={displayData?.ImgUrl} alt="" />
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ViewProduct