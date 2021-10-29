import userInfoWithNo from "./userInfoWithNo";

const compareToken = async (cookieToken) => {

    //DB에 저장되어 있는 토큰 정보를 가지고옴
    const response = await fetch("http://localhost:8889/tokens");

    //정상적으로 통신 되었을 경우
    if(response.ok){
        const tokens = await response.json(); //JSON형식으로 바꿔줌
        //DB에 있는 토큰과 사용자 쿠키의 토큰이 일치하는 것이 있으면 가지고 옴
        const tokenInfo = await tokens.find(()=> tokens.token === cookieToken);
        if(tokenInfo){ //해당하는 토큰이 있을 경우
            //해당 토큰의 userNo를 바탕으로 유저 정보를 가지고 옴
            const userInfo = userInfoWithNo(tokenInfo.userNo);
            //유저 정보를 store에 재등록 시키기 위해서 리턴
            return userInfo;
        }
        
    }
    throw new Error("통신 오류")
    
}


export default compareToken;