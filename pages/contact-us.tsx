import React from "react";
import { Form, Input, Button, Layout, Typography, message } from "antd";
import ClientContainer from "@/components/ClientContainer/ClientContainer";
import Head from "next/head";
import Hero from "@/components/Home/Hero";
import { axiosInstance } from "@/utils/axios.utils";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const ContactUsForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = React.useState(false);
    const onFinish = (values: any) => {
        console.log("Form Submitted:", values);
        setLoading(true);
        axiosInstance.post("/api/form-submission/contact-us", values)
            .then((response) => {
                console.log("Response:", response);
                message.success("Your message has been sent successfully");
                form.resetFields();
            })
            .catch((error) => {
                console.error("Error:", error);
                message.error("An error occurred. Please try again later");
            }).finally(() => {
                setLoading(false);
            }
            );
    };

    const onFinishFailed = (errorInfo: any) => {
        console.error("Form Submission Failed:", errorInfo);
    };

    return (
        <>
            <Head>
                <title>Contact Us | Roam Eazy</title>
                <meta name="description" content="RoamEazy is UAE's leading tour and holiday packages marketplace. We make it easy for you to browse and book packages, so that you can go on your vacation worry free" />
            </Head>
            <ClientContainer>
                <Hero />
                <Layout style={{ padding: "20px", backgroundColor: "#fff" }}>
                    <Content style={{ maxWidth: "600px", margin: "0 auto" }}>
                        <Title level={2} style={{ textAlign: "center" }}>
                            Contact Us
                        </Title>
                        <Paragraph style={{ textAlign: "center" }}>
                            We'd love to hear from you. Please fill out the form below, and we'll
                            get back to you as soon as possible.
                        </Paragraph>
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            form={form}
                        >
                            <Form.Item
                                label="Full Name"
                                name="name"
                                rules={[
                                    { required: true, message: "Please enter your full name" },
                                ]}
                            >
                                <Input placeholder="John Doe" />
                            </Form.Item>

                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[
                                    {
                                        type: "email",
                                        message: "Please enter a valid email address",
                                    },
                                    { required: false, message: "Please enter your email address" },
                                ]}
                            >
                                <Input placeholder="example@example.com" />
                            </Form.Item>

                            <Form.Item
                                label="Phone Number"
                                name="contactNumber"
                                rules={[
                                    {
                                        type: "string",
                                        message: "Please enter a valid Phone Number",
                                    },
                                    { required: false, message: "Please enter your Phone Number" },
                                ]}
                            >
                                <Input placeholder="+971526698745" />
                            </Form.Item>

                            <Form.Item
                                label="Message"
                                name="message"
                                rules={[
                                    { required: true, message: "Please enter your message" },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="Your message..." />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" block loading={loading}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </ClientContainer>
        </>
    );
};

export default ContactUsForm;
