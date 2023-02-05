import React, {useState} from 'react';
import {Form, Input, Button, message} from 'antd';
import axios from "axios";
import {useSelector} from "react-redux";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const AccessDetails = (props) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const {auth} = useSelector(({auth}) => auth)
    const id = auth.id


    const onFinish = (values) => {
        let userData = new FormData();
        userData.append("email",auth.email)
        userData.append("password",values.password)
        userData.append("newPassword",values.newPassword)
        userData.append("id",auth.id)
        console.log('Received values of form: ', values)
        setLoading(true)
        axios.post("/customer/" + id,userData).then(success => {
            console.log(success)
            message.success(`${auth.email}'s Personal Detail Updated`)
            setLoading(false)

        }).catch(err => {
                console.log(err)
                message.error("Unable to Update!")
                setLoading(false)
            }
        );
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            {/*<h4>{auth.email}</h4>*/}
            <Form.Item
                name="password"
                label="OldPassword"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item
                name="newPassword"
                label="New Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your New password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm New Password"
                dependencies={['newPassword']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your new password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button loading={loading} type="primary" htmlType="submit">
                    Update Password
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AccessDetails