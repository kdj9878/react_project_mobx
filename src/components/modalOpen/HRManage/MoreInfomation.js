import React, { useState } from 'react';
import { Modal, Button, Descriptions } from 'antd';

const MoreInfomation = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {email, gender, name, picture} = props.data;

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
            <Descriptions.Item label="사원 사진" style={{textAlign:'center'}}>
              <img src={picture.large} alt="사원 사진" />
            </Descriptions.Item>
            <Descriptions.Item label="이름" style={{textAlign:'center'}}>
              {name.title} {name.first} {name.last}
            </Descriptions.Item>
            <Descriptions.Item label="성별" style={{textAlign:'center'}}>
              {gender}
            </Descriptions.Item>
            <Descriptions.Item label="이메일" style={{textAlign:'center'}}>
              {email}
            </Descriptions.Item>
          </Descriptions>
      </Modal>
    </>
  );
};

export default MoreInfomation;