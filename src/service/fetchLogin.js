const fetchLogin = async (param) =>{

    const response = await fetch("http://localhost:8888/user");
    if(response.ok){
        const users = await response.json();
        const user = await users.find((user) => user.id === param.id)
        if(!user || user.password !== param.password){
            return null;
        }
        return user;

    }
    throw new Error("서버 오류")
}

export default fetchLogin;