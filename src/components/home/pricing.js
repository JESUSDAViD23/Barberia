import React from 'react';

import { List, Card, Button } from 'antd';

const data = [
  {
    title: 'SCALPER GROOMING',
    content: [
      {
        price: '$595',
        space: 'Corte de cabello',
        user: 'afeitado o recorte de barba',
        support: '',
        backup: '',
        access: ''
      }
    ]
  },
  {
    title: 'SCALPER MAN',
    content: [
      {
        price: '$800',
        space: 'Corte de cabello',
        user: 'arreglo de barba ',
        support: 'facial',
        backup: '',
        access: ''
      }
    ]
  },
  {
    title: 'SCALPER SPA',
    content: [
      {
        price: '$450',
        space: 'Manicure',
        user: 'pedicure',
        support: '',
        backup: '',
        access: ''
      }
    ]
  }
];

function AppPricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Nuestros paquetes de promocion</h2>
        </div>
        <List
          grid={{
            gutter: 10,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button type="primary" size="large"><i className="fab fa-telegram-plane"></i> Agenda tu cita</Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default AppPricing;