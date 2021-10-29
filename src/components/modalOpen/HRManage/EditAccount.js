import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';

const EditAccount = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    console.log(props)
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
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default EditAccount;