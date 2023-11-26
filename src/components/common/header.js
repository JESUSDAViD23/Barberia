import React, { useState } from 'react';

import { Anchor, Drawer, Button } from 'antd';

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
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;