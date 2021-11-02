import Axios from "axios"

class RequestAxios {
    
    static get = "GET"
    static post = "POST"
    static put = "PUT"
    static delete = "DELETE"

    static requestLogin = async (data) => {

        const response = await Axios.post("/api/user/login",data, {
            headers :{
                'X-XSS-Protection' : '1;mode=block'
            }
        }).then(response => response).catch(error => {console.log(error)})

        


        if(response === undefined){
            alert("서버와의 연결이 원활하지 않습니다.")
            return response;
        } else {   
            return response.status === 200 ? response.data : response;
        }


    }



}



export default RequestAxios;