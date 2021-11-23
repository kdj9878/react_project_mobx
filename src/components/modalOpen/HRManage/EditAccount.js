import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const EditAccount = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  
 
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
        회원 정보 수정
      </Button>
      <Modal 
        title="회원 정보 수정"
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}>
          <p>
            회원 정보 수정 모달
          </p>
      </Modal>
    </>
  );
};


export default EditAccount;