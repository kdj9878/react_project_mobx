export const userContexts = [
  {
    code : "userNickname",
    label : "사원 이름"
  },
  {
    code : "userEmail",
    label : "사원 이메일",
  },
  {
    code : "userPh",
    label : "사원 핸드폰 번호"
  },
  {
    code : "deptNm",
    label : "소속 부서"
  },
  {
    code: "deptDtNm",
    label : "소속 팀"
  },
  {
    code : "userGender",
    label : "성별"
  },
  {
    code : "userAddr",
    label : "주소"
  },
  {
    code : "userDesc",
    label : "사원 자기 소개"
  }
];




export const inputAttr = {

  default : {
    readOnly : true,
    className : "user-info-input-default",
    buttonNm : "수정"

  },
  modState : {
    readOnly : false,
    className : "user-info-input-mod",
    buttonNm : "저장"
  }
}



