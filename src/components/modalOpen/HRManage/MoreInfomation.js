import React, { useState, useEffect} from 'react';
import { Modal, Button, Descriptions } from 'antd';
import { userContexts } from '../../../context/context';

import InfoChangeComponent from '../../common/InfoChangeComponent';
import InfoDisplayComponent from '../../common/InfoDisplayComponent';

const MoreInfomation = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userAttr, setUserAttr] = useState([]);
  const [isChildNode, setIsChildNode] = useState();
  const [isSiblingNode, setIsSiblingNode] = useState();


  /*
  useEffect(()=>{}, [])에서 배열에 값을 넣을 경우
  처음에 마운트 될 때와 해당 값이 업데이트 될 때마다 함수가
  실행이 되고 안 넣을 경우 마운트 될 때만 실행 됨
  return () => {} 을 사용할 경우 unmount 될 때도 실행이
  된다.
  */
  
  useEffect(() =>{
    const userProps = Object.entries(props.data);
    setUserAttr(userProps);
  }, [])

  const requestChange = (e) =>{
    const parentNode = e.target.offsetParent;
    const childNode = parentNode.childNodes[0].children[1];
    const siblingNode = childNode.previousSibling;
    const confirm = window.confirm("수정하시겠습니까?")
    if(confirm){
      setIsChildNode(childNode);
      setIsSiblingNode(siblingNode);
      childNode.style.display = "none";
      siblingNode.style.display = "block"
    }
  }


  /* 
    받아온 props를 바탕으로 <Descriptions.Item>를 반복시키기 위한 함수
  */
  const formRendering = () =>{
    const result = [];
      let j = 0;
      for(let i = 0; i < userContexts.length;){
        if(userContexts[i].code !== userAttr[j][0]){
          j++;          
          continue;
        }
        result.push(
          <Descriptions.Item label={userContexts[i].label} style={{textAlign:'center'}}>
               <InfoChangeComponent data={userAttr[j][1]} siblingNode={isSiblingNode}/>
               <InfoDisplayComponent data={userAttr[j][1]} requestChange={requestChange}/>
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
    isChildNode.style.display = "block";
    isSiblingNode.style.display = "none";
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    isChildNode.style.display = "block";
    isSiblingNode.style.display = "none"
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
        onCancel={handleCancel}
        >
          <Descriptions title="회원 상세 정보" bordered>
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