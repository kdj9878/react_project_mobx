import React, { useEffect, useState } from 'react';
import { Modal, Button, List, Card, Skeleton, Avatar } from 'antd';

const EditAccount = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);




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
        회원 정보 수정
      </Button>
      <Modal 
        title="회원 정보 수정"
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}>
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={props.data}
          renderItem={item => (
        <List.Item>
          <Skeleton avatar active>
            <List.Item.Meta />
            
          </Skeleton>
          <Card title="사진" ><img src={item.photo} /></Card>
          <Card title="이름">{item.name}</Card>
          {item.photo}
        </List.Item>
      )}
      />
      </Modal>
    </>
  );
};


export default EditAccount;