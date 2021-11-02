import React, { useEffect, useState } from 'react';
import { Modal, Button, List, Card, Skeleton, Avatar } from 'antd';

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
  


  useEffect( () =>{
    const userPhoto = props.data.picture.large;
    setImageUrl(userPhoto);
  },[])

  /*
  useEffect(()=>{}, [])에서 배열에 값을 넣을 경우
  처음에 마운트 될 때와 해당 값이 업데이트 될 때마다 함수가
  실행이 되고 return () => {} 을 사용할 경우 unmount 될 때도 실행이
  된다.
  */
  const callImageUrl = () =>{
    console.log(imageUrl)
  }
 
  const showModal = () => {
    setIsModalVisible(true);
    callImageUrl();
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
          <Skeleton avatar  active>
            <List.Item.Meta avatar={<Avatar src={imageUrl} />} />
          </Skeleton>
          <Card title={item.title.photo} >{imageUrl}</Card>
          <Card title={item.title.name}></Card>
        </List.Item>
      )}
      />
      </Modal>
    </>
  );
};


export default EditAccount;