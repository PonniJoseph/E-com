import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ViewProduct from './ViewProduct'
import { getAllImageAPI } from '../service/allAPI'

const View = ({ addResponse,deleteImageView }) => {

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
      if (result.status >= 200 && result.status < 300) {
        //  console.log(result.data);
        setAllImage(result.data)

      } else {
        console.log("api call failure");

      }

    } catch (err) {
      console.log(err);

    }
  }

  






  return (
    <>
      <Row>
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