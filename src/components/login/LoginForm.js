import { Form, Input, Button, Checkbox } from 'antd';
import { useEffect } from 'react';
import fetchLogin from '../../service/fetchLogin';

const LoginForm = (props) => {

  const userControll = props.userStore;

  useEffect( () => {
    console.log(props)
  })


  const handleFinish = async (values) =>{

    await fetchLogin(values).then(response => {
      if(response === null) {
        //로그인에 실패하였을 때
        userControll.setLoginState(2);
      }
      else{
        userControll.setUser(response)  //userStore 저장된 상태 하지만 새로 고침 할 시 사라짐
        userControll.setLoginState(1);

        // const userId = response.id;
        // const password = response.password;
        // console.log(`id : ${userId} password : ${password}`)
      }
    })
  }

  const handleFinishFailed = (error) =>{
    console.log(error)
  }


  // antd 3.x 버전의 경우 form.validateFieldAndScroll((err, values) => {})로 접근을 하였지만
  // antd 4.x 버전의 경우 onFinish(성공한 경우) onFinishFailed(실패한 경우) 로 사용을 한다.
    return (
      <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}

        autoComplete="off"
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
              message: '아이디를 입력해주세요.',
            },
          ]}
        >
          <Input  />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력해주세요.',
            },
          ]}
        >
          <Input.Password  />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" >
            로그인
          </Button>
        </Form.Item>
      </Form>
      
    )
};

export default LoginForm;