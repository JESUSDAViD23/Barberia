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

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Inicio" />
            <Link href="#about" title="Acercade" />
            <Link href="#feature" title="Caracteristicas" />
            <Link href="#works" title="Como trabajamos" />
            <Link href="#faq" title="Preguntas frecuentes" />
            <Link href="#pricing" title="Precio" />
            <Link href="#contact" title="Contacto" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="25">
              <Link href="#hero" title="Inicio" />
              <Link href="#about" title="Acerca de" />
              <Link href="#feature" title="Caracteristicas" />
              <Link href="#works" title="Como trabajamos" />
              <Link href="#faq" title="Preguntas frecuentes" />
              <Link href="#pricing" title="Precios" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;