import React, { useState, useEffect} from 'react';
import { Modal, Button, Descriptions } from 'antd';
import {userContexts} from '../../../context/context'

const MoreInfomation = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {userNickname,userGender, userEmail, userAddr, userPh, deptNm, deptDtNm, userDesc} = props.data;
  const userContext = userContexts;
  /*
  useEffect(()=>{}, [])에서 배열에 값을 넣을 경우
  처음에 마운트 될 때와 해당 값이 업데이트 될 때마다 함수가
  실행이 되고 return () => {} 을 사용할 경우 unmount 될 때도 실행이
  된다.
  */
  

 
  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        onOk={handleOk} 
        onCancel={handleCancel}>
          <Descriptions title="회원 정보" bordered>
            {/* <Descriptions.Item label="사원 사진" style={{textAlign:'center'}}>
              <img src={picture.large} alt="사원 사진" />
            </Descriptions.Item> */}
            <Descriptions.Item label="이름" style={{textAlign:'center'}}>
              {userNickname}
            </Descriptions.Item>
            <Descriptions.Item label="성별" style={{textAlign:'center'}}>
              {userGender}
            </Descriptions.Item>
            <Descriptions.Item label="주소" style={{textAlign:'center'}}>
              {userAddr}
            </Descriptions.Item>
            <Descriptions.Item label="핸드폰 번호" style={{textAlign:'center'}}>
              {userPh}
            </Descriptions.Item>
            <Descriptions.Item label="이메일" style={{textAlign:'center'}}>
              {userEmail}
            </Descriptions.Item>
            <Descriptions.Item label="부서 명" style={{textAlign:'center'}}>
              {deptNm}
            </Descriptions.Item>
            <Descriptions.Item label="팀 명" style={{textAlign:'center'}}>
              {deptDtNm}
            </Descriptions.Item>
            <Descriptions.Item label="사원 자기 소개" style={{textAlign:'center'}}>
              {userDesc}
            </Descriptions.Item>
          </Descriptions>
      </Modal>
    </>
  );
};

export default MoreInfomation;