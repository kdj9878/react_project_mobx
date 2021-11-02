import Axios from "axios"

class RequestAxios {
    
    static get = "GET"
    static post = "POST"
    static put = "PUT"
    static delete = "DELETE"

    static requestLogin = async (data) => {

        await Axios.post("/api/user/login",data, {
            headers :{
                'X-XSS-Protection' : '1;mode=block'
            }
        }).then( res =>{
            console.log(res)
        })
    }



}



export default RequestAxios;