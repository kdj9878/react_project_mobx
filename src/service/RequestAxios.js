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

            return await this.sendResponseData(response);
    }

    static requestData = async (url, data, type, contentType) =>{

        //일단은 GET방식은 추가적인 파라미터가 없다고 생각하고 코드를 짬
        if(type === undefined && contentType === undefined){
          const response = await Axios.get(url)
                .then(res => res)
                .catch(error => {console.log(error)})

                return await this.sendResponseData(response);
        }
        else{
          //POST 방식
          const response = await Axios.post(url,data,{
                type : type,
                contentType : contentType
          }).then(response => response).catch(error => {console.log(error)})
          
                return await this.sendResponseData(response);

        }
    }


    static sendResponseData = (response) =>{
          if(response === undefined){
            alert("서버와의 연결이 원활하지 않습니다.")
            return response;
          } 
          else {
            return response.status === 200 ? response.data : response;
          }
    }
    
}



export default RequestAxios;