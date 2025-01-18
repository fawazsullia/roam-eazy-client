import React from "react";
import { Layout, Typography, Card, Row, Col } from "antd";
import ClientContainer from "@/components/ClientContainer/ClientContainer";
import Head from "next/head";
import Hero from "@/components/Home/Hero";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us | Roam Eazy</title>
                <meta name="description" content="RoamEazy is UAE's leading tour and holiday packages marketplace. We make it easy for you to browse and book packages, so that you can go on your vacation worry free" />
            </Head>
            <ClientContainer>
                <Layout style={{ minHeight: "100vh" }}>
                    <Hero />
                    <Content style={{ padding: "50px" }}>
                        <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
                            About Us
                        </Title>

                        <Paragraph style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}>
                            Welcome to Our Company! We are dedicated to providing exceptional services
                            that cater to your unique needs. Our mission is to empower travellers by
                            connecting them to relaible travel agencies.
                        </Paragraph>

                        <Paragraph style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}>
                            With a focus on innovation and customer satisfaction, our team of
                            experienced professionals works tirelessly to ensure that our products
                            and services exceed expectations. We believe in building lasting
                            relationships with our clients and helping them achieve their goals.
                        </Paragraph>

                        <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
                            <Col xs={24} sm={12} md={8}>
                                <Card title="Our Mission" bordered={false}>
                                    <Paragraph style={{ fontSize: "14px", lineHeight: "1.6" }}>
                                        To provide a platform where customers can seemlessly search and
                                        and buy travel packages from reliable travel agencies.
                                    </Paragraph>
                                </Card>
                            </Col>

                            <Col xs={24} sm={12} md={8}>
                                <Card title="Our Vision" bordered={false}>
                                    <Paragraph style={{ fontSize: "14px", lineHeight: "1.6" }}>
                                        To be a global leader in the travel industry, ensuring quality and
                                        and integrity.
                                    </Paragraph>
                                </Card>
                            </Col>

                            <Col xs={24} sm={12} md={8}>
                                <Card title="Our Values" bordered={false}>
                                    <Paragraph style={{ fontSize: "14px", lineHeight: "1.6" }}>
                                        Innovation, Integrity, Collaboration, and Excellence are at the
                                        core of everything we do.
                                    </Paragraph>
                                </Card>
                            </Col>
                        </Row>
                    </Content>

                    <Footer style={{ textAlign: "center" }}>
                        Roam Eazy © {new Date().getFullYear()} - All Rights Reserved
                    </Footer>
                </Layout>
            </ClientContainer>
        </>
    );
};

export default AboutUs;
