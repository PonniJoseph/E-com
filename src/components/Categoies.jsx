import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { deleteCategoryAPI, getAllCategoryAPI, removeImageAPI, saveCategoriesAPI, updateCategoryAPI } from '../service/allAPI';
import ViewProduct from './ViewProduct';

const Categoies = ( {setDeleteImageView,deleteResponeFromView}) => {

  
const [allCategories,setAllCategories]=useState([])
const [categoryName,setCategoryName]=useState("")
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    getAllCategories()
  },[deleteResponeFromView])

const handleSaveCategory = async()=>{
  if(categoryName){
      const categoryDetails={categoryName,allImage:[]}
      try{
         const result =await saveCategoriesAPI(categoryDetails)
         alert("category Created")
         getAllCategories()
         handleClose()
      }catch(err){
        console.log(err);
        
      }
  }else{
    alert("Please Provide category name")
  }
}
 

const getAllCategories =async()=>{
  try{
    const result =await getAllCategoryAPI()
    if(result.status>=200 && result.status<300){
     setAllCategories(result.data)
    }else{
      alert("Please provide category Name")
    }
  }catch(err){
    console.log(err);
    
  }
}
console.log(allCategories);

const removeCategory = async(id)=>{
  try{
    await deleteCategoryAPI(id)
    getAllCategories()
  }catch(err){
    console.log(err);
    
  }
} 

const dragOverCategory = (e)=>{
  e.preventDefault()
}

const imageCardDropOverCategory= async(e,categoryDetails)=>{
  console.log("inside ImageCardDropOverCategory");
  // console.log(categoryDetails);
 const imageDetails= JSON.parse( e.dataTransfer.getData("imageDetails"))
 console.log(imageDetails);

//  update category by add image
categoryDetails.allImage.push(imageDetails)
console.log(categoryDetails);
// categoryDetails.allImage.push(imageDetails)
// console.log(categoryDetails);

// Api call to update the Category
 await  updateCategoryAPI(categoryDetails)
  getAllCategories()
  const result =await removeImageAPI(imageDetails?.id)
  setDeleteImageView(result)


 
}

const categoryImageDragStarted=(e,dragImageDetails,categoryDetails)=>{
  console.log("inside categoryImageDragStarted");
  let dragData ={image:dragImageDetails,categoryDetails}
  e.dataTransfer.setData("dragData",JSON.stringify(dragData))

}


  return (
   
   <>
    <div className='d-flex justify-content-between align-items-center'>
      <h3>All Categories</h3>
      <button onClick={handleShow} className='btn btn-danger  ms-3 rounded-circle fw-bolder fs-3'>+</button>
    </div>
    {/* displaying all categories */}
    <div className='container-fluid mb-3'>
      {/* single category view */}

    {

      allCategories?.length>0 ?
      allCategories?.map(categoryDetails=>(
        <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>imageCardDropOverCategory(e,categoryDetails)} 
        key={categoryDetails?.id} className='border rounded p-3 mb-3 mt-3'>
      <div className="d-flex justify-content-between">
        <h5>{categoryDetails?.categoryName}</h5>
        <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn '> <i class="fa-solid fa-trash text-danger "></i></button>
      </div>
      {/* display category video */}
      <div className='row mt-2'>
           {
            categoryDetails?.allImage?.length>0 &&
            categoryDetails?.allImage?.map(image=>(
              <div  key={image?.id} className="col-lg-4" draggable={true} onDragStart={e=>categoryImageDragStarted(e,image,categoryDetails)}>
                <ViewProduct insideCategory={true} displayData={image}/>
              </div>
            ))
           }
      </div>
    </div>
      ))
      :
      <div className='fw-bolder fs-5 text-danger'>No Categories are added yet!!</div>
    }
 
    </div>

    {/* modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Categories Details!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingCategories"
        label="Categories Details"
        className="mb-3"
      >
        <Form.Control onChange={e=>setCategoryName(e.target.value)}  type="text" placeholder="Categories Details" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
        
      </Modal>
   </>
  )
}

export default Categoies