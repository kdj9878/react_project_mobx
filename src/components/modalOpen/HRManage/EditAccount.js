import React, { useState } from 'react';
import { Modal, Button, List, Card } from 'antd';

const EditAccount = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const data = [
    {title : {
      photo : "회원 사진",
      name : "회원 이름",
    },
  }
];



  const userData = props.data;

  const showModal = () => {
    console.log(userData)
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
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={data}
          renderItem={item => (
        <List.Item>
          <Card title={item.title.photo}><image src={userData.picture.large}/></Card>
          <Card title={item.title.name}>{userData.gender}</Card>
        </List.Item>
      )}
      />
      </Modal>
    </>
  );
};


export default EditAccount;