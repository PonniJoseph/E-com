import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAllHistoryAPI } from '../service/allAPI'

const History = () => {
const [allImageHistory,setAllImageHistory]=useState([])
useEffect(()=>{
    getAllHistory()
},[])
const getAllHistory=async()=>{
    try{
     const result =await getAllHistoryAPI()
     if(result.status>=200 && result.status<300){
       setAllImageHistory(result.data)
     }else{
        console.log(result);
        
     }

    }catch(err){
      console.log(err);
      
    }
}

const removeHistory = async(id)=>{
    try{
     await deleteHistoryAPI(id)
     getAllHistory()
    }catch(err){
        console.log(err);
        
    }
}


  return (
    <div style={{paddingTop:'100px'}}>
        <div className='d-flex justify-content-between container'>
            <h3>Watch Product Details</h3>
            <Link to={'/additem'}>Back..</Link>
        </div>
        <table className='container my-5 table'>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Title</td>
                    <td>Categoie</td>
                    <td>Price</td>
                    <td>...</td>
                </tr>
            
            </thead>
            <tbody>
                {
                    allImageHistory?.length>0?
                   allImageHistory?.map((imageDetail,index)=>(
                    <tr key={imageDetail?.id}>
                    <td>{index+1}</td>
                    <td>{imageDetail.caption} </td>
                    <td>{imageDetail.categoies}</td>
                    <td>{imageDetail.price}</td>
                    <td >
                     <button onClick={()=>removeHistory(imageDetail?.id)} className='btn '> <i class="fa-solid fa-trash text-danger "></i></button> </td>
                </tr>
                 )):
                 <div className='fw-bolder text-danger fs-5'>You didn't view any product!!!</div>
                }
            </tbody>
        </table>
    </div>
  )
}

export default History