import React from 'react'
import { Card, Col, Row } from 'antd';
export default function Card_Fled() {
    const { Meta } = Card;
    return (
        <div>
            <Row >
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 240, margin: '8px' }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 240, margin: '8px' }}
                        cover={<img style={{ height: 300 }} alt="example" src="https://images.unsplash.com/photo-1613362899103-70495b4d4bea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 240, margin: '8px' }}
                        cover={<img style={{ height: 300 }} alt="example" src="https://images.unsplash.com/photo-1613310024735-3451547a7b7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 240, margin: '8px' }}
                        cover={<img style={{ height: 300 }} alt="example" src="https://images.unsplash.com/photo-1613368942865-322bb372dd10?ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDB8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 240, margin: '8px' }}
                        cover={<img style={{ height: 300 }} alt="example" src="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
