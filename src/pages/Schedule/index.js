import React from 'react';

import EventNormalItem from '~/components/EventNormalItem';
import EventSmallItem from '~/components/EventSmallItem';

import { Event, Container } from './styles';
import useWindowSize from '~/utils/useWindowSize';

const events = [
  {
    id: 1,
    date: '11/04/2020',
    name: "Kareka's Bar",
    location: 'Norte',
    map: 'https://goo.gl/maps/rmFz6uUYRvwqZGu38',
    hour: '10:00h',
  },
  {
    id: 2,
    date: '11/04/2020',
    name: 'Destilaria Beer',
    location: 'CSB',
    map: 'https://g.page/destilaria-beer1?share',
    site: 'https://destilariabeer.negocio.site/?m=true',
    hour: '10:00h',
  },
  {
    id: 3,
    date: '11/04/2020',
    name: "Kareka's Bar",
    location: 'Norte, QND 14 Lote 09, Av. Comercial - Taguatinga',
    map: 'https://goo.gl/maps/rmFz6uUYRvwqZGu38',
    hour: '10:00h',
  },
  {
    id: 4,
    date: '11/04/2020',
    name: 'Destilaria Beer',
    location: 'CSB 07, St. B Sul - Taguatinga',
    map: 'https://g.page/destilaria-beer1?share',
    site: 'https://destilariabeer.negocio.site/?m=true',
    hour: '10:00h',
  },
  {
    id: 5,
    date: '11/04/2020',
    name: "Kareka's Bar",
    location: 'Norte, QND 14 Lote 09, Av. Comercial - Taguatinga',
    map: 'https://goo.gl/maps/rmFz6uUYRvwqZGu38',
    hour: '10:00h',
  },
  {
    id: 6,
    date: '11/04/2020',
    name: 'Destilaria Beer',
    location: 'CSB 07, St. B Sul - Taguatinga',
    map: 'https://g.page/destilaria-beer1?share',
    site: 'https://destilariabeer.negocio.site/?m=true',
    hour: '10:00h',
  },
  {
    id: 7,
    date: '11/04/2020',
    name: "Kareka's Bar",
    location: 'Norte, QND 14 Lote 09, Av. Comercial - Taguatinga',
    map: 'https://goo.gl/maps/rmFz6uUYRvwqZGu38',
    hour: '10:00h',
  },
  {
    id: 8,
    date: '11/04/2020',
    name: 'Destilaria Beer',
    location: 'CSB 07, St. B Sul - Taguatinga',
    map: 'https://g.page/destilaria-beer1?share',
    site: 'https://destilariabeer.negocio.site/?m=true',
    hour: '10:00h',
  },
];

export default function Schedule() {
  const size = useWindowSize();
  return (
    <>
      <Event>
        <div>
          <h1>PRÓXIMOS SHOWS E EVENTOS</h1>
          <p>Aqui você confere com detalhes a minha agenda musical</p>
        </div>
      </Event>
      <Container>
        {events.map(event =>
          size.width < 760 ? (
            <EventSmallItem key={event.id} event={event} />
          ) : (
            <EventNormalItem key={event.id} event={event} />
          )
        )}
      </Container>
    </>
  );
}
