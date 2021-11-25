import React, { useState, useEffect} from 'react';
import { Modal, Button, Descriptions } from 'antd';
//Input태그 기본 속성
import { inputAttr } from '../../../context/context';

const MoreInfomation = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {userNickname, userEmail, userPh, deptNm, deptDtNm, userGender, userAddr, usreDesc} = props.data;




  /* Input태그 속성 */
  const [isInputTagAttr, setIsInputTagAttr] = useState(inputAttr.default)

  useEffect( () =>{
    console.log(isInputTagAttr)
  }, [])
 

  /*
  useEffect(()=>{}, [])에서 배열에 값을 넣을 경우
  처음에 마운트 될 때와 해당 값이 업데이트 될 때마다 함수가
  실행이 되고 안 넣을 경우 마운트 될 때만 실행 됨
  return () => {} 을 사용할 경우 unmount 될 때도 실행이
  된다.
  */
  const modify = () =>{
    const confirm = window.confirm("데이터를 수정하시겠습니까?");
    if(confirm){
      setIsInputTagAttr(inputAttr.modState)
    }
  }


 
  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleOk = () => {
    setIsModalVisible(false);
    setIsInputTagAttr(inputAttr.default)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsInputTagAttr(inputAttr.default)
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
            {isInputTagAttr.buttonNm}
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
                readOnly={isInputTagAttr.readOnly}
                className={isInputTagAttr.className}
                type="text" 
                value={userNickname} 
                />
                
            </Descriptions.Item>
            <Descriptions.Item label="사원 이메일" style={{textAlign:'center'}}>
            <input
                readOnly={isInputTagAttr.readOnly}
                className={isInputTagAttr.className}
                type="text" 
                value={userEmail}
                />
            </Descriptions.Item>
            <Descriptions.Item label="사원 핸드폰 번호" style={{textAlign:'center'}}>
            <input
                readOnly={isInputTagAttr.readOnly}
                className={isInputTagAttr.className}
                type="text" 
                value={userPh}
                />
              
            </Descriptions.Item>
            <Descriptions.Item label="소속 부서" style={{textAlign:'center'}}>
            <input
                readOnly={isInputTagAttr.readOnly}
                className={isInputTagAttr.className}
                type="text" 
                value={deptNm}
                />
            </Descriptions.Item>
            <Descriptions.Item label="소속 팀" style={{textAlign:'center'}}>
            <input
                readOnly={isInputTagAttr.readOnly}
                className={isInputTagAttr.className}
                type="text" 
                value={deptDtNm}
                />
            </Descriptions.Item>
            <Descriptions.Item label="성별" style={{textAlign:'center'}}>
            <input
                readOnly={isInputTagAttr.readOnly}
                className={isInputTagAttr.className}
                type="text" 
                value={userGender}
                />
            </Descriptions.Item>
            <Descriptions.Item label="주소" style={{textAlign:'center'}}>
            <input
                readOnly={isInputTagAttr.readOnly}
                className={isInputTagAttr.className}
                type="text" 
                value={userAddr}
                />
            </Descriptions.Item>
            <Descriptions.Item label="사원 자기소개" style={{textAlign:'center'}}>
            <input
                readOnly={isInputTagAttr.readOnly}
                className={isInputTagAttr.className}
                type="text" 
                value={usreDesc}
                />
            </Descriptions.Item>
          </Descriptions>
      </Modal>
    </>
  );
};

export default MoreInfomation;