import React, { useState, useEffect} from 'react';
import { Modal, Button, Descriptions } from 'antd';
import { userContexts } from '../../../context/context';

const MoreInfomation = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userAttr, setUserAttr] = useState([]);


  /*
  useEffect(()=>{}, [])에서 배열에 값을 넣을 경우
  처음에 마운트 될 때와 해당 값이 업데이트 될 때마다 함수가
  실행이 되고 안 넣을 경우 마운트 될 때만 실행 됨
  return () => {} 을 사용할 경우 unmount 될 때도 실행이
  된다.
  */
  
  useEffect(() =>{
    const userProps = Object.entries(props.data);
    setUserAttr(userProps)
  }, [])

  const formRendering = () =>{
    const result = [];
      let j = 0;
      console.log(userContexts.length)
      for(let i = 0; i < userContexts.length;){
        if(userContexts[i].code !== userAttr[j][0]){
          j++;
          continue;
        }
        result.push(
          <Descriptions.Item label={userContexts[i].label} style={{textAlign:'center'}}>
            {userAttr[j][1]}
          </Descriptions.Item>
        )
        i++;
        j = 0;
      }
        return result;
  }
 
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
          <Descriptions title="회원 상세 정보" bordered>
            {/* <Descriptions.Item label="사원 사진" style={{textAlign:'center'}}>
              <img src={picture.large} alt="사원 사진" />
            </Descriptions.Item> */}
            {
              userAttr.length > 0 && userContexts.length > 0
              ? formRendering()
              : null
            }
          </Descriptions>
      </Modal>
    </>
  );
};

export default MoreInfomation;