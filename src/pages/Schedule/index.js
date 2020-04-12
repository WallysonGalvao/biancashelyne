import React from 'react';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Content from '~/components/Content';
import EventItem from '~/components/EventItem';

import image from '../../assets/violao2.jpg';

import { Event } from './styles';

const events = [
  {
    date: '11/04/2020',
    name: "Kareka's Bar",
    location: 'Norte, QND 14 Lote 09, Av. Comercial - Taguatinga',
    map: 'https://goo.gl/maps/rmFz6uUYRvwqZGu38',
    hour: '10:00am - 08:00pm',
  },
  {
    date: '11/04/2020',
    name: 'Destilaria Beer',
    location: 'CSB 07, St. B Sul - Taguatinga',
    map: 'https://g.page/destilaria-beer1?share',
    site: 'https://destilariabeer.negocio.site/?m=true',
    hour: '10:00am - 08:00pm',
  },
];

export default function Schedule() {
  return (
    <Background image={image}>
      <Header />

      <Content>
        <Event>
          <div>
            <h1>PRÓXIMOS SHOWS E EVENTOS</h1>
            <p>Aqui você confere com detalhes a minha agenda musical</p>
          </div>
          {events.map(event => (
            <EventItem key={event.date} event={event} />
          ))}
        </Event>
      </Content>
    </Background>
  );
}
