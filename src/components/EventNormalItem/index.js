import React from 'react';
import { FiMapPin, FiClock, FiGlobe } from 'react-icons/fi';
import PropTypes from 'prop-types';
import dateUtils from '~/utils/date';
import { Content, Date, InfoContainer, Info } from './styles';

export default function Event({ event }) {
  const { date, name, location, map, hour, site = '' } = event;

  const { day, year, monthString } = dateUtils(date);

  return (
    <Content>
      <Date>
        <span className="date">{day}</span>
        <div>
          <span>{monthString}</span>
          <span>{year}</span>
        </div>
      </Date>
      <InfoContainer>
        <span>{name}</span>

        <Info>
          <div>
            <a href={map} target="_blank" rel="noopener noreferrer">
              <FiMapPin size={18} />
              <span>{location}</span>
            </a>
          </div>
          <div>
            <FiClock size={18} />
            <span>{hour}</span>
          </div>

          {site && (
            <div>
              <a href={site} target="_blank" rel="noopener noreferrer">
                <FiGlobe size={18} />
                <span>{name} Site</span>
              </a>
            </div>
          )}
        </Info>
      </InfoContainer>
    </Content>
  );
}

Event.propTypes = {
  event: PropTypes.objectOf(Object).isRequired,
};
