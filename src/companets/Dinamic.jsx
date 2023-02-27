import axios from "axios"

const createData = (url,obj) =>{
    return axios.post(url ,obj)
}
export default createData;