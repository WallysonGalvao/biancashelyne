import React from 'react';

import EventItem from '~/components/EventItem';

import { Event, Container } from './styles';

const events = [
  {
    id: 1,
    date: '11/04/2020',
    name: "Kareka's Bar",
    location: 'Norte',
    map: 'https://goo.gl/maps/rmFz6uUYRvwqZGu38',
    hour: '10:00am - 08:00pm',
  },
  {
    id: 2,
    date: '11/04/2020',
    name: 'Destilaria Beer',
    location: 'CSB',
    map: 'https://g.page/destilaria-beer1?share',
    site: 'https://destilariabeer.negocio.site/?m=true',
    hour: '10:00am - 08:00pm',
  },
  {
    id: 1,
    date: '11/04/2020',
    name: "Kareka's Bar",
    location: 'Norte, QND 14 Lote 09, Av. Comercial - Taguatinga',
    map: 'https://goo.gl/maps/rmFz6uUYRvwqZGu38',
    hour: '10:00am - 08:00pm',
  },
  {
    id: 2,
    date: '11/04/2020',
    name: 'Destilaria Beer',
    location: 'CSB 07, St. B Sul - Taguatinga',
    map: 'https://g.page/destilaria-beer1?share',
    site: 'https://destilariabeer.negocio.site/?m=true',
    hour: '10:00am - 08:00pm',
  },
  {
    id: 1,
    date: '11/04/2020',
    name: "Kareka's Bar",
    location: 'Norte, QND 14 Lote 09, Av. Comercial - Taguatinga',
    map: 'https://goo.gl/maps/rmFz6uUYRvwqZGu38',
    hour: '10:00am - 08:00pm',
  },
  {
    id: 2,
    date: '11/04/2020',
    name: 'Destilaria Beer',
    location: 'CSB 07, St. B Sul - Taguatinga',
    map: 'https://g.page/destilaria-beer1?share',
    site: 'https://destilariabeer.negocio.site/?m=true',
    hour: '10:00am - 08:00pm',
  },
  {
    id: 1,
    date: '11/04/2020',
    name: "Kareka's Bar",
    location: 'Norte, QND 14 Lote 09, Av. Comercial - Taguatinga',
    map: 'https://goo.gl/maps/rmFz6uUYRvwqZGu38',
    hour: '10:00am - 08:00pm',
  },
  {
    id: 2,
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
    <>
      <Event>
        <div>
          <h1>PRÓXIMOS SHOWS E EVENTOS</h1>
          <p>Aqui você confere com detalhes a minha agenda musical</p>
        </div>
      </Event>
      <Container>
        {events.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </Container>
    </>
  );
}
