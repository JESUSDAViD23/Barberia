import React, { useState } from 'react';

import { messaging } from '../../../src/firebase';
import { getToken, onMessage } from 'firebase/messaging';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Anchor, Drawer, Button } from 'antd';
import {getAuth, signInAnonymously} from "firebase/auth";

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  
    const linkStyle = {
      color: 'red', // Cambia 'red' al color que desees
    };
  
    const loguearse =()=>{
      signInAnonymously(getAuth()).then(usuario=>console.log(usuario));
    }


    const activarMensajes = async ()=> {
      loguearse()
      const token = await getToken(messaging,{
        vapidKey: "BPNiEih4H35tIMwFHeaD-7Q7tz1mNXscAhl_HKWbav1kNu7XRbJS5IIREIrkMax0qQnJk8ZuOF5_di2CfSOcOlM"
      }).catch(error => console.log("Tuviste un error al generar el token, papá"));
    
    
      if(token) console.log("tu token:",token);
      if(!token) console.log("no tienes token, rey");
    }
    
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img src='https://raw.githubusercontent.com/JESUSDAViD23/Barberia/main/public/icon-192x192.png' width='30px'/>
          <a href="#hero">Barberman</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
          <Link href="#hero" title="Inicio" style={linkStyle}/>
            <Link href="#about" title="Acerca de" />
            <Link href="#feature" title="Características" />
            <Link href="#works" title="Cómo trabajamos" />
            <Link href="#pricing" title="Precios" />
            <ToastContainer/><Button type='primary' style={{backgroundColor:'#e1dbc8',color:'black'}} onClick={activarMensajes}>Notificaciones</Button>
            
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button  style={{backgroundColor:'#e1dbc8'}} type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            width={180} 
            placement="right"
            backgroundColor={'#e1dbc8'}
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Inicio"/>
              <Link href="#about" title="Acerca de"  />
              <Link href="#feature" title="Características"  />
              <Link href="#works" title="Cómo trabajamos"  />
              <Link href="#pricing" title="Precios"  />
              <ToastContainer/><Link href='#' onClick={activarMensajes}>Activar notificaciones</Link>
              <ToastContainer><Button type='primary' style={{backgroundColor:'#e1dbc8',color:'black'}} onClick={activarMensajes}>Notificaciones</Button></ToastContainer>
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;