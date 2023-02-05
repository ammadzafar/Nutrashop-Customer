import React, {useState} from "react";
import {Form, Input, Button, notification, message, Card,} from "antd";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import "./Guest.css"
import {saveLoginData, storeGuestEmail,} from "../../../store/slices/authSlice";
import {Tabs} from "antd";

const Guest = (props) => {

    const [loading, setLoading] = useState();
    const dispatch = useDispatch();
    const {guestEmail} = useSelector(({auth}) => auth);

    const onFinish = (values) => {
        setLoading(true);
        axios
            .post("auth/signin", values)
            .then((success) => {
                setLoading(false);
                dispatch(saveLoginData(success.data));
            })
            .catch((error) => {
                setLoading(false);

                notification["error"]({
                    message: "Login Failed",
                    description: error.response.data.message,
                });
            });
    };
    const onFinishGuest = (values) => {
        dispatch(storeGuestEmail(values.email));
        props.guestClick();
    };
    const onFinishFailed = (errorInfo) => {
        message.error("Failed");
    };
    const onFinishFailedGuest = (errorInfo) => {
        message.error("Failed");
    };
    const {TabPane} = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <Card className="card-shadow">
            <Tabs defaultActiveKey="2" onChange={callback}>
                <TabPane tab="Login" key="1">
                    <Form

                        name="basic"
                        labelCol={{
                            span: 5,
                        }}
                        wrapperCol={{
                            span: 19,
                        }}
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
                                    message: "Please input your username!",
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
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <div className='check-btn'>
                                <Button loading={loading} type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </TabPane>
                <TabPane tab="Checkout As Guest" key="2">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 5,
                        }}
                        wrapperCol={{
                            span: 19,
                        }}
                        initialValues={{
                            email: guestEmail,
                        }}
                        onFinish={onFinishGuest}
                        onFinishFailed={onFinishFailedGuest}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <div className='check-btn1'>
                                <Button loading={loading} type="primary" htmlType="submit">
                                    Continue as a guest
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </TabPane>
            </Tabs>
        </Card>
    );
};
export default Guest;

