import React from 'react'
import { Carousel } from 'antd';
import Card_Fled from './Card';
import Navbar from '../layout/navbar';

export default function Home() {


    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <>
            <Navbar />
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <img style={{ width: "100%", height: "100%" }} src="https://2bgpyeorlsk30bsng2euqc61-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Top-10-Social-Media-Sites-for-Business-1.jpg" />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img style={{ width: "100%", height: "100%" }} src="https://www.lyfemarketing.com/blog/wp-content/uploads/2018/03/social-media-sites-for-business.png" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img style={{ width: "100%", height: "100%" }} src="https://www.aileensoul.com/uploads/blog/main/Business_Directory.jpg" />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img style={{ width: "100%", height: "100%" }} src="https://www.cidm.co.in/wp-content/uploads/2019/05/socialMediaMatter.png.webp" />
                    </h3>
                </div>
            </Carousel>
            <Card_Fled />
        </>
    )
}
