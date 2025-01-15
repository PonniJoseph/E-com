import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { saveImageAPI } from '../service/allAPI';
const Add = ({setAddResponse}) => {
// create state add image
const [imageDetails,setImageDetails] = useState({
  ImgUrl:"",caption:"" ,categoies:"",price:""

})
console.log(imageDetails);


const handleUploadImage = async()=>{
  // destructuring in object
  const {ImgUrl,caption,categoies,price }=imageDetails
  if(ImgUrl && caption && categoies  && price){
      // alert("procced storing data")
     try{
      const result=await saveImageAPI(imageDetails)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert("Product is add successfully")
        handleClose()
        // pass the result to view component
        setAddResponse(result)
      }
      else{
       console.log(result);
      }
     }catch(err){
      console.log(err);

     }
      
  }else{
    alert('Please Fill The Form......')
  }
}


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-flex align-items-center'>
        <h5>Upload Your Product</h5>
        <button onClick={handleShow} className='btn btn-danger  ms-3 rounded-circle fw-bolder fs-3'>+</button>
    </div>

{/* modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your product details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            {/* floatin label */}
            <FloatingLabel onChange={e=>setImageDetails({...imageDetails,ImgUrl:e.target.value})} controlId="floatingImgURL" label="Enter your product image" >
        <Form.Control type="text" placeholder="Enter your product image URL" />
      </FloatingLabel>

      <FloatingLabel onChange={e=>setImageDetails({...imageDetails,caption:e.target.value})} className='mt-2' controlId="floatingCaption" label="Enter your product Caption" >
        <Form.Control type="text" placeholder="Enter your product Caption" />
      </FloatingLabel>

      <FloatingLabel onChange={e=>setImageDetails({...imageDetails,categoies:e.target.value})} className='mt-2' controlId="floatingCategoies" label="Enter your product categoies" >
        <Form.Control type="text" placeholder="Enter your product categoies" />
      </FloatingLabel>

      {/* <FloatingLabel onChange={e=>setImageDetails({...imageDetails,description:e.target.value})} className='mt-2' controlId="floatingDescription" label="Tell about your product" >
        <Form.Control type="text" placeholder="Tell about your product" />
      </FloatingLabel> */}

      <FloatingLabel onChange={e=>setImageDetails({...imageDetails,price:e.target.value})} className='mt-2' controlId="floatingPrice" label="Enter your product Price" >
        <Form.Control type="text" placeholder="Enter your product Price" />
      </FloatingLabel>
      
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadImage} variant="danger">ADD</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add