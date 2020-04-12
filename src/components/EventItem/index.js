import React from 'react';
import { FiMapPin, FiClock, FiGlobe } from 'react-icons/fi';

import { Content, Date, InfoContainer, Info } from './styles';

export default function Event({ event }) {
  const { date, name, location, map, hour, site = '' } = event;

  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Maio',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const day = date.substring(0, 2);
  const month = date.substring(3, 5);
  const year = date.substring(6, 10);
  const monthString = months[parseInt(month, 10) - 1];

  return (
    <Content>
      <Date>
        <span className="date">{day}</span>
        <span>{`${monthString} ${year}`}</span>
      </Date>
      <InfoContainer>
        <div>
          <span>{name}</span>
        </div>

        <Info>
          <div>
            <a href={map} target="_blank" rel="noopener noreferrer">
              <FiMapPin size={18} />
              <span>{location}</span>
            </a>
          </div>
          <div>
            <FiClock size={18} style={{ marginLeft: 10 }} />
            <span>{hour}</span>
          </div>

          {site && (
            <div>
              <a href={site} target="_blank" rel="noopener noreferrer">
                <FiGlobe size={18} style={{ marginLeft: 10 }} />
                <span>{name} Site</span>
              </a>
            </div>
          )}
        </Info>
      </InfoContainer>
    </Content>
  );
}
