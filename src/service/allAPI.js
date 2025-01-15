
import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//save the image -post method is using add component

export const saveImageAPI = async(imageDetail)=>{
  return await commonAPI(`POST`,`${serverURL}/uploadImage`,imageDetail)


}

// getAllImageAPI -Get method claed viewcompent ,when

export const getAllImageAPI =async()=>{
    return await commonAPI(`GET`,`${serverURL}/uploadImage`,"")
}


// save History data- post html method to http://localhost:3000/history

export const saveHistoryAPI = async(historyDetails)=>{
    return await commonAPI(`POST`,`${serverURL}/history`,historyDetails)  
  }

//   getAllHistoryAPI -get http request to http://localhost:3000/history
export const getAllHistoryAPI =async()=>{
    return await commonAPI(`GET`,`${serverURL}/history`,"")
}


// deleteHistoryApi - using delete Method to http://localhost:3000/history/id
export const deleteHistoryAPI =async(id)=>{
    return await commonAPI(`DELETE`,`${serverURL}/history/${id}`,{})
}

// removeImageApi - using delete Method to http://localhost:3000/productView/id
export const removeImageAPI =async(id)=>{
    return await commonAPI(`DELETE`,`${serverURL}/uploadImage/${id}`,{})
}

//save categoriesApi -post request to categories
export const saveCategoriesAPI = async(categoryDetails)=>{
    return await commonAPI(`POST`,`${serverURL}/categories`,categoryDetails)  
  }

// getCategoriesApi
  export const getAllCategoryAPI =async()=>{
    return await commonAPI(`GET`,`${serverURL}/categories`,{})
}

// delete the Categories

export const deleteCategoryAPI =async(id)=>{
    return await commonAPI(`DELETE`,`${serverURL}/categories/${id}`,{})
}

// only particulare change a value by update using Put method

export const updateCategoryAPI =async(categoryDetails)=>{
    return await commonAPI(`PUT`,`${serverURL}/categories/${categoryDetails.id}`,categoryDetails)
}

//   getAllCardsAPI -get http request to http://localhost:3000/history
export const getAllCardsAPI =async()=>{
  return await commonAPI(`GET`,`${serverURL}/cards`,"")
}


// deleteCardsApi - using delete Method to http://localhost:3000/history/id
export const deleteCardsAPI =async(id)=>{
  return await commonAPI(`DELETE`,`${serverURL}/cards/${id}`,{})
}