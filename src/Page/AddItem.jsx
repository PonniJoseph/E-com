import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Categoies from '../components/Categoies'

const AddItem = () => {
  const [deleteResponeFromView,setDeleteResponeFromView]=useState("")

  const [deleteImageView,setDeleteImageView] = useState("")
  
  const [addResponse,setAddResponse]=useState("")
  return (
    <div style={{paddingTop:"100px"}}>
      <div className='d-flex justify-content-between container mb-5'>
        <Add setAddResponse={setAddResponse}/>
        {/* <Link to={'/history'}>Watch Products</Link> */}
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6" >
        <h3>All Products</h3>
        <View setDeleteResponeFromView={setDeleteResponeFromView} deleteImageView={deleteImageView} addResponse={addResponse} />
        </div>
        <div className="col-lg-6">
          
          <Categoies  deleteResponeFromView={deleteResponeFromView} setDeleteImageView={setDeleteImageView}/>
        </div>
      </div>

    </div>
  )
}

export default AddItem