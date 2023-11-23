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

  const handleClick = () => {
    // Cierra el Drawer cuando se hace clic en un enlace en dispositivos móviles
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <div className="container-fluid">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
        <div className="d-none d-md-block"> {/* Oculto en dispositivos pequeños */}
          <Anchor targetOffset={65}>
            <Link href="#hero" title="Inicio" />
            <Link href="#about" title="Acerca de" />
            <Link href="#feature" title="Características" />
            <Link href="#works" title="Cómo trabajamos" />
            <Link href="#faq" title="Preguntas frecuentes" />
            <Link href="#pricing" title="Precios" />
            <Link href="#contact" title="Contacto" />
          </Anchor>
        </div>
        <div className="d-block d-md-none"> {/* Visible solo en dispositivos pequeños */}
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset={15}>
              <Link href="#hero" title="Inicio" onClick={handleClick} />
              <Link href="#about" title="Acerca de" onClick={handleClick} />
              <Link href="#feature" title="Características" onClick={handleClick} />
              <Link href="#works" title="Cómo trabajamos" onClick={handleClick} />
              <Link href="#faq" title="Preguntas frecuentes" onClick={handleClick} />
              <Link href="#pricing" title="Precios" onClick={handleClick} />
              <Link href="#contact" title="Contacto" onClick={handleClick} />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
