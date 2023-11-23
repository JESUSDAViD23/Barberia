import React from 'react';

//import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" height='190px' src='https://cdn2.hubspot.net/hubfs/2356021/Barberia.png' />}
            >
              <Meta title="Corte de barba y bigote" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" height='190px' src='https://lh3.googleusercontent.com/p/AF1QipPktQdB54Ym6ftdwOnnio-WerDRecvYXyqCZCkk=w1080-h608-p-no-v0' />}
            >
              <Meta title="Local limpio y elegante" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" height='190px' src='https://www.shortcuts.es/wp-content/uploads/2017/07/June-barber-blog-image.jpg' />}
            >
              <Meta title="Personal Capacitado" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" height='190px' src='https://panoraview.com/wp-content/uploads/2023/03/logos-de-barberia-modernos-como-realizarlos-y-ejemplos.jpg' />}
            >
              <Meta title="Herramientas de alta calidad" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" height='190px' src='https://mejorjuguete.com/wp-content/uploads/2022/07/320243_03_ig_smoby_roleplay_beauty_PT02.jpg' />}
            >
              <Meta title="Venta de productos" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" height='190px' src='https://www.flowww.es/hubfs/Campa%C3%B1a%20marketing%20Octubre%20Q4/BLOG_ES/como-hacer-promociones-que-traigan-ingresos-para-tu-barberia.png' />}
            >
              <Meta title="Ambiente sano" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;