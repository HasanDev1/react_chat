import { useState } from "react";
import { Form, Input, Button, Checkbox, Space } from 'antd';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import { register } from "../../server/config/apis/users";

const Register = ()=>{

    const [isSubmitting, setSubmitting] = useState(false);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const onFinish = (values) => {
        const obj = {firstName, lastName, email, username, password};
        console.log('Success:', values);
        register(obj).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div lassName="space-align-container" >
            <div>
                <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 10,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input 
                        autoFocus
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        name="username"
                        placeholder="Username"
                        onChange={(e)=>setUsername(e.target.value)}
                        disabled={isSubmitting}
                        />
                    </Form.Item>
                
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password 
                        autoFocus
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        name="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                        disabled={isSubmitting}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Firstname"
                        name="firstname"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your firstname!',
                        },
                        ]}
                    >
                        <Input 
                        autoFocus
                        name="firstname"
                        placeholder="Firstname"
                        onChange={(e)=>setFirstName(e.target.value)}
                        disabled={isSubmitting}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Lastname"
                        name="lastname"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your lastname!',
                        },
                        ]}
                    >
                        <Input 
                        autoFocus
                        name="lastname"
                        placeholder="Lastname"
                        onChange={(e)=>setLastName(e.target.value)}
                        disabled={isSubmitting}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        ]}
                    >
                        <Input 
                        autoFocus
                        name="email"
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        disabled={isSubmitting}
                        />
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
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
      );
}
export default Register;