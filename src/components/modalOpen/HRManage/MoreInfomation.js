import React, { useState, useEffect, useRef} from 'react';
import { Modal, Button, Descriptions } from 'antd';
import RequestAxios from '../../../service/RequestAxios'
//Input태그 기본 속성
import { inputAttr } from '../../../context/context';
//Input태그 value 기본 속성
import { defInputsState } from '../../../context/context';

const MoreInfomation = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {userNickname, userEmail, userPh, deptNm, deptDtNm, userGender, userAddr, usreDesc} = props.data;
  //Input들 변화 감지를 위한 상태 관리
  const [inputs, setInputs] = useState(defInputsState)

  /* Input태그 속성 상태관리 */
  const [isInputTagAttr, setIsInputTagAttr] = useState([inputAttr.default, inputAttr.buttonState.default])

  const {userNickNameValue, userEmailValue, userPhValue, deptNmValue, deptDtNmValue, userGenderValue, userAddrValue, userDescValue} = inputs;

  useEffect( () =>{
    console.log(isInputTagAttr)
  }, [isInputTagAttr])
 

  /*
  useEffect(()=>{}, [])에서 배열에 값을 넣을 경우
  처음에 마운트 될 때와 해당 값이 업데이트 될 때마다 함수가
  실행이 되고 안 넣을 경우 마운트 될 때만 실행 됨
  return () => {} 을 사용할 경우 unmount 될 때도 실행이
  된다.
  */
  const modify = () =>{
    
    if(isInputTagAttr[1] === 0){
      var confirm = window.confirm("데이터를 수정하시겠습니까?");
      if(confirm){
        setIsInputTagAttr([inputAttr.modState, inputAttr.buttonState.modState]) //input태그 활성화
      }
    }
    else {
      var confirm = window.confirm("수정한 데이터를 저장하시겠습니까?");
      if(confirm){
        const sendData = {
          userId : props.data.userId
        }
        RequestAxios.requestData(
          '/api/user/infoChange',
          sendData,
          "PUT"
          )
      }
    }
    
  }

  const onChange = (e) =>{
    const { name, value } = e.target
    console.log(`name : ${name}, value : ${value}`)
    setInputs({
      ...inputs,
      [name] : value
    })
    console.log(inputs)
  }
  
 
  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleOk = () => {
    setIsModalVisible(false);
    setIsInputTagAttr([inputAttr.default, inputAttr.buttonState.default])
    setInputs(defInputsState)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsInputTagAttr([inputAttr.default, inputAttr.buttonState.default])
    setInputs(defInputsState)
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        회원 정보
      </Button>
      <Modal 
        title="회원 정보"
        width={1200}
        height ={300}
        visible={isModalVisible} 
        footer={[
          <Button 
            key="modify"
            type="primary"
            onClick={modify}
          >
            {isInputTagAttr[0].buttonNm}
          </Button>,
          <Button
            key="ok"
            type="primary"
            onClick={handleOk}
          >
            확인
          </Button>,
          <Button
            key="cancel"
            type="primary"
            onClick={handleCancel}
          >
            취소
          </Button>
        ]}
        >
          <Descriptions title="회원 상세 정보" bordered>
            <Descriptions.Item label="사원 이름" style={{textAlign:'center'}}>
              <input
                name="userNickNameValue"
                readOnly={isInputTagAttr[0].readOnly}
                className={isInputTagAttr[0].className}
                type="text"
                onChange={onChange}
                placeholder={userNickname}
                value={userNickNameValue}
                />
            </Descriptions.Item>
            <Descriptions.Item label="사원 이메일" style={{textAlign:'center'}}>
            <input
                name="userEmailValue"
                readOnly={isInputTagAttr[0].readOnly}
                className={isInputTagAttr[0].className}
                type="text"
                onChange={onChange}
                placeholder={userEmail}
                value={userEmailValue}
                />
            </Descriptions.Item>
            <Descriptions.Item label="사원 핸드폰 번호" style={{textAlign:'center'}}>
            <input
                name="userPhValue"
                readOnly={isInputTagAttr[0].readOnly}
                className={isInputTagAttr[0].className}
                type="text"
                onChange={onChange}
                placeholder={userPh}
                value={userPhValue}
                />
              
            </Descriptions.Item>
            <Descriptions.Item label="소속 부서" style={{textAlign:'center'}}>
            <input
                name="deptNmValue"
                readOnly={isInputTagAttr[0].readOnly}
                className={isInputTagAttr[0].className}
                type="text"
                onChange={onChange}
                placeholder={deptNm}
                value={deptNmValue}
                />
            </Descriptions.Item>
            <Descriptions.Item label="소속 팀" style={{textAlign:'center'}}>
            <input
                name="deptDtNmValue"
                readOnly={isInputTagAttr[0].readOnly}
                className={isInputTagAttr[0].className}
                type="text"
                onChange={onChange}
                placeholder={deptDtNm}
                value={deptDtNmValue}
                />
            </Descriptions.Item>
            <Descriptions.Item label="성별" style={{textAlign:'center'}}>
            <input
                name="userGenderValue"
                readOnly={isInputTagAttr[0].readOnly}
                className={isInputTagAttr[0].className}
                type="text"
                onChange={onChange}
                placeholder={userGender}
                value={userGenderValue}
                />
            </Descriptions.Item>
            <Descriptions.Item label="주소" style={{textAlign:'center'}}>
            <input
                name="userAddrValue"
                readOnly={isInputTagAttr[0].readOnly}
                className={isInputTagAttr[0].className}
                type="text"
                onChange={onChange}
                placeholder={userAddr}
                value={userAddrValue}
                />
            </Descriptions.Item>
            <Descriptions.Item label="사원 자기소개" style={{textAlign:'center'}}>
            <input
                name="userDescValue"
                readOnly={isInputTagAttr[0].readOnly}
                className={isInputTagAttr[0].className}
                type="text"
                onChange={onChange}
                placeholder={usreDesc}
                value={userDescValue}
                />
            </Descriptions.Item>
          </Descriptions>
      </Modal>
    </>
  );
};

export default MoreInfomation;