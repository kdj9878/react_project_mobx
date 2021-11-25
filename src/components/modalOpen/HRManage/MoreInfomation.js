import React, { useState, useEffect, useRef} from 'react';
import { Modal, Button, Descriptions } from 'antd';
import RequestAxios from '../../../service/RequestAxios'
//Input태그 기본 속성
import { inputAttr } from '../../../context/context';
//Input태그 value 기본 속성
import { defInputsState } from '../../../context/context';

const MoreInfomation = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //Input들 변화 감지를 위한 상태 관리
  const [inputs, setInputs] = useState(defInputsState)
  
  /* Input태그 속성 상태관리 */
  const [isInputTagAttr, setIsInputTagAttr] = useState([inputAttr.default, inputAttr.buttonState.default])
  
  /* 사용할 데이터 비구조화 할당 */
  const {userNickname, userEmail, userPh, deptNm, deptDtNm, userGender, userAddr, userDesc} = props.data;
  const {userNickNameValue, userEmailValue, userPhValue, userAddrValue} = inputs;

  useEffect( () =>{
    console.log(props)
  }, [isInputTagAttr])
 

  /*
  useEffect(()=>{}, [])에서 배열에 값을 넣을 경우
  처음에 마운트 될 때와 해당 값이 업데이트 될 때마다 함수가
  실행이 되고 안 넣을 경우 마운트 될 때만 실행 됨
  return () => {} 을 사용할 경우 unmount 될 때도 실행이
  된다.
  */
  const modify = async () =>{
    
    if(isInputTagAttr[1] === 0){
      var confirm = window.confirm("데이터를 수정하시겠습니까?");
      if(confirm){
        setIsInputTagAttr([inputAttr.modState, inputAttr.buttonState.modState]) //input태그 활성화
      }
    }
    else {
      var confirm = window.confirm("수정한 데이터를 저장하시겠습니까?");
      if(confirm){
        const userId = {
          userId : props.data.userId
        }
        const sendData = Object.assign(inputs, userId)
        await RequestAxios.requestData(
          '/api/user/infoChange',
          sendData,
          "PUT"
          ).then(res => {   //회원 리스트를 다시 가져옴
            props.updateList(res) //받아온 회원 리스트를 상위컴포넌트로 전달
            setIsInputTagAttr([inputAttr.default, inputAttr.buttonState.default])
          })
      }
    }
  }

  const onChange = (e) =>{
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
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
    var confirm = window.confirm("데이터 변경을 취소하시겠습니까?");
    if(confirm){
      setIsModalVisible(false);
      setIsInputTagAttr([inputAttr.default, inputAttr.buttonState.default])
      setInputs(defInputsState)
    }
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
            style={isInputTagAttr[1] === 0 ? {display:"inline"} : {display:"none"}}
            key="ok"
            type="primary"
            onClick={handleOk}
          >
            확인
          </Button>,
          <Button
            style={isInputTagAttr[1] === 0 ? {display:"none"} : {display:"inline"}}
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
                readOnly
                className="user-info-input-default"
                type="text"
                placeholder={deptNm}
                />
            </Descriptions.Item>
            <Descriptions.Item label="소속 팀" style={{textAlign:'center'}}>
            <input
                readOnly
                className="user-info-input-default"
                type="text"
                placeholder={deptDtNm}
                />
            </Descriptions.Item>
            <Descriptions.Item label="성별" style={{textAlign:'center'}}>
            <input
                readOnly
                className="user-info-input-default"
                type="text"
                placeholder={userGender}
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
                readOnly
                className="user-info-input-default"
                type="text"
                placeholder={userDesc}
                />
            </Descriptions.Item>
          </Descriptions>
      </Modal>
    </>
  );
};

export default MoreInfomation;