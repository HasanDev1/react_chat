import React, {useState} from 'react';
import {Row, Col, Form, Typography, Button, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {auth} from "../../server/config/auth/auth";
import {setCookie} from "../../utils";
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';

const {Title} = Typography;

const Login = (props) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [isSubmitting, setSubmitting] = useState(false);

    // const
    const [loginForm] = Form.useForm();

    const onFinish = () => {
        console.log(username,password)
        const obj = {username, password}
        auth(obj).then(res=> {
            console.log(res)
            res && setCookie(res.data && res.data.token)
            // return res && res.data&& res.data.token && <Navigate to={"/dashboard"}/>
            // window.location.pathname = props.match.params.url + "/dashboard"
            // window.location.href = props.match.params.url + "/dashboard"
           window.location.reload();
        }).catch(err=>console.log(err))

        // console.log(res)
        loginForm.resetFields();
        // axios.post(`${host}:8093/api/auth/auth`,obj).then(res=>console.log(res)).catch(err=>console.log(err))
    }
    return (
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <Col xs={20} sm={12} md={8} lg={6}>
                <Title level={3} className="text-center">TemplateG7</Title>

                <Form
                    form={loginForm}
                    name="basic"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your auth!",
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
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            name="password"
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="float-right" disabled={isSubmitting} loading={isSubmitting}>
                            Submit
                        </Button>
                        <Button  type= "link" htmlType='button' href='/register'>Ro`yxatdan o`tish</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Login;