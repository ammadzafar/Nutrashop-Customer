import {Form, Input, Button} from 'antd';
import {React, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import {notification} from 'antd';
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {saveLoginData} from '../../store/slices/authSlice'
import {Modal} from "react-bootstrap";
import CloseIcon from "../../assets/images/close_icon.png";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = (props) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState()
    const onFinish = (values) => {
        setLoading(true)
        axios.post('auth/signin', values).then(success => {
            setLoading(false)
            dispatch(saveLoginData(success.data))
            props.closeLogin()
        }).catch(error => {
            setLoading(false)

            notification['error']({
                message: 'Login Failed',
                description:
                error.response.data.message,
            });
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <Modal show={props.show}>
            <div className="modal-content">
                <button onClick={() => props.closeLogin()} type="button" className="modal-close p-2">
                    <img src={CloseIcon}/>
                </button>
                <div className="login-form-row">
                    <div className="login-column login-column1">
                        <div className="modal-titles">
                            <h4>Log in</h4>
                            <ul>
                                <li>
                                    <img
                                        src="https://img6.hkrtcdn.com/react/static/media/signupFlow/white-bg-tick.svg"
                                        className="mr-2"/>Get personal fitness expert advice
                                </li>
                                <li>
                                    <img
                                        src="https://img6.hkrtcdn.com/react/static/media/signupFlow/white-bg-tick.svg"
                                        className="mr-2"/>Earn HK cash on every order
                                </li>
                                <li>
                                    <img
                                        src="https://img6.hkrtcdn.com/react/static/media/signupFlow/white-bg-tick.svg"
                                        className="mr-2"/>Get personal fitness expert advice
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="login-column">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input/>
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
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button loading={loading} type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    </div>
                </div>
            </div>
        </Modal>

    );
};

export default Login;
