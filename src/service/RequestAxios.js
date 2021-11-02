import Axios from "axios"

class RequestAxios {
    
    static get = "GET"
    static post = "POST"
    static put = "PUT"
    static delete = "DELETE"

    static requestLogin = async (data) => {
        await Axios.post("/api/user/login",data, {
            headers :{
                'content-type': 'application/json'
            }
        }).then( res =>{
            console.log(res)
        })
    }



}



export default RequestAxios;