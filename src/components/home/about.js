import React from 'react';
import { DollarOutlined, SmileOutlined, ShopOutlined} from '@ant-design/icons'
import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <DollarOutlined />,
    title: 'Precios Accesibles',
    content: ' Creemos que la calidad no debe comprometerse por el precio. Nos esforzamos por ofrecer servicios de barbería excepcionales a precios accesibles.  ',
  },
  {
    key: '2',
    icon: <SmileOutlined />,
    title: 'Buen ambiente',
    content: 'No solo nos dedicamos a perfeccionar cortes y estilos, sino que también creamos un ambiente acogedor y amigable que te hará sentir como en casa.',
  },
  {
    key: '3',
    icon: <ShopOutlined />,
    title: 'Simplified Workflow',
    content: ' estamos orgullosos de expandir nuestra presencia para servirte mejor. Contamos con varias sucursales estratégicamente ubicadas para llevar la experiencia única de Barber Man a tu vecindario.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Acerca de</h2>
        </div>
        <div className="contentHolder">
          <p>Bienvenido a Barber Man, donde la tradición se encuentra con la modernidad. En nuestro espacio, nos dedicamos a proporcionar experiencias de cuidado personal excepcionales. Nuestro equipo de barberos altamente capacitados combina la maestría en cortes clásicos con las últimas tendencias. En Barber Man, no solo obtendrás un corte de pelo impecable, sino también una experiencia relajante y personalizada que refleje tu estilo único. ¡Descubre la diferencia de una barbería que se preocupa por tu imagen y bienestar! </p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;