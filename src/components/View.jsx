import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ViewProduct from './ViewProduct'
import { getAllImageAPI,  saveImageAPI, updateCategoryAPI } from '../service/allAPI'

const View = ({ addResponse,deleteImageView,setDeleteResponeFromView }) => {

  // create the state to hold remove image
  const [deleteImageResponse, setDeleteImageResponse] = useState("")

  const [allImage, setAllImage] = useState([])

  useEffect(() => {
    getAllImage()
    
  }, [addResponse,deleteImageView,deleteImageResponse])

  console.log(allImage);

  const getAllImage = async () => {
    try {
      const result = await getAllImageAPI()
      console.log(result);
      if (result.status >=200 && result.status < 300) {
        //  console.log(result.data);
        setAllImage(result.data)

      } else {
        console.log("api call failure");

      }

    } catch (err) {
      console.log(err);

    }
  }
 
  const dragOverView=(e)=>{
    e.preventDefault()
  }


  const categoryImageDragOverView = async(e)=>{
    console.log("inside categoryImageDragOverView ");
  const {image,categoryDetail} = JSON.parse( e.dataTransfer.getData("dragData"))
  console.log(image,categoryDetail);
  const updatedCategoryImageList = categoryDetail?.allImage?.filter(item=>item.id!=image?.id)
 const updatedCategory = {...categoryDetail,allImage:updatedCategoryImageList}
 console.log(updatedCategory);
 
  // updating the category by delete image from category
  const result = await updateCategoryAPI(updatedCategory)
  // state lifing to communicate data from view to category
  setDeleteResponeFromView(result)
  // using API
  await saveImageAPI(image)
  // call getallvideo function
  getAllImage()
  
    
  }
  

  return (
    <>
      <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryImageDragOverView(e)} >
        {
          allImage?.length > 0 ?
            allImage.map(image => (
              <Col key={image?.id} sm={12} md={6} lg={4}>
                <ViewProduct setDeleteImageResponse={setDeleteImageResponse} displayData={image} />
              </Col>
            ))
            :
            <div className='fw-bolder fs-5 text-danger'>No Product are uploaded</div>
        }
      </Row>
    </>
  )
}

export default View