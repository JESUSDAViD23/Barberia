import React from 'react';
import { Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

import { Carousel } from 'antd';

import { messaging } from '../../../src/firebase';
import { getToken, onMessage } from 'firebase/messaging';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const activarMensajes = async ()=> {
  const token = await getToken(messaging,{
    vapidKey: "BPNiEih4H35tIMwFHeaD-7Q7tz1mNXscAhl_HKWbav1kNu7XRbJS5IIREIrkMax0qQnJk8ZuOF5_di2CfSOcOlM"
  }).catch(error => console.log("Tuviste un error al generar el token, papá"));


  if(token) console.log("tu token:",token);
  if(!token) console.log("no tienes token, rey");
}

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
                  <Button type="primary" onClick={activarMensajes} style={{backgroundColor:'#e1dbc8'}} size="large">Activar Mensaje <CalendarOutlined /></Button>
                  
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