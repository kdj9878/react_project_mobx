import React, { useEffect, useState } from 'react';
import { Modal, Button, List, Card } from 'antd';

const EditAccount = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);

  const data = [
    {title : {
      photo : "회원 사진",
      name : "회원 이름",
    },
    
  }
];
  const userPhoto = props.data.picture.large;

  useEffect( () =>{
    setImageUrl(userPhoto);
    console.log(imageUrl)
  },[imageUrl])


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
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={data}
          renderItem={item => (
        <List.Item>
          <Card title={item.title.photo}></Card>
          <Card title={item.title.name}></Card>
        </List.Item>
      )}
      />
      </Modal>
    </>
  );
};


export default EditAccount;