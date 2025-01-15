import axios from "axios"

const commonAPI = async(htppMethod,url,reqBody)=>{
    const reqConfig={
        method: htppMethod,
        url,
        data:reqBody
    }
   return await axios(reqConfig).then(res=>{
        return res
    }).catch(err =>{
        return err
    })

}
export default commonAPI