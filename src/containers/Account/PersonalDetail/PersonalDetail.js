import React, {useEffect, useState} from 'react';
import {Form, Input, Button, message} from 'antd';
import axios from "axios";

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

const RegistrationForm = (props) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const id = props.data.id
    let data = props.data
    useEffect(() => {
        form.setFieldsValue(data)
    }, [data])

    const onFinish = (values) => {
        setLoading(true)
        axios.put("/customer/" + id,values).then(success => {
            message.success(`${values.firstName}'s Personal Detail Updated`)
            setLoading(false)

        }).catch(err => {
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
            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your firstName!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your firstName!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button loading={loading} type="primary" htmlType="submit">
                    Update Personal Details
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm