
/*
PK값인 userNo를 통해서 유저 정보를 가지고 옴
*/
const userInfoWithNo = async (userNo) => {


    const response = await fetch("http://localhost:8888/user");
    if(response.ok){
        const users = await response.json();
        const user = await users.find((user) => user.userNo === userNo);
        if(user) return user;
    }
}

export default userInfoWithNo;