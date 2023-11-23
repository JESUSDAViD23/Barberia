import React from 'react';
import { Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Barberia para todo tipo de personas',
    content: 'Amplia gama de servicios',
  },
  {
    key: '2',
    title: 'Años de experiencias nos respaldan',
    content: "Nuestros clientes de años respalda",
  },
  {
    key: '3',
    title: 'Productos de alta calidad',
    content: 'Trabajando con los mejores productos al alcance de tu bolsillo',
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" style={{backgroundColor:'#e1dbc8'}} size="large">Agendar cita <CalendarOutlined /></Button>
                  
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;