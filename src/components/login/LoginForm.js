import { Form, Input, Button, Checkbox } from 'antd';

const LoginForm = (props) => {

  

  const changeValue = (e) =>{
    console.log(e.target.value)
  }

  const showProps = () =>{
    console.log(props)
  }

    return (
      <Form onSubmit={ (e) => 
      {
        e.preventDefualt();
        console.log(props)


      }}
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
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input onChange={changeValue} />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={changeValue} />
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
          <Button type="primary" htmlType="submit" onClick={showProps}>
            로그인
          </Button>
        </Form.Item>
      </Form>
    )
};

export default LoginForm;