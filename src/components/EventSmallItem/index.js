import React from 'react';
import PropTypes from 'prop-types';
import dateUtils from '~/utils/date';
import { Content, Date, Name, Hour } from './styles';

export default function Event({ event }) {
  const { date, name, location, map, hour, site = '' } = event;

  const { day, year, monthString } = dateUtils(date);

  return (
    <Content>
      <Date>
        <span>{day}</span>
        <span>{monthString}</span>
        <span>{year}</span>
      </Date>
      <Name>
        <span>{name}</span>
      </Name>
      <Hour>
        <span>{hour}</span>
        <span>{location}</span>
      </Hour>
    </Content>
  );
}

Event.propTypes = {
  event: PropTypes.objectOf(Object).isRequired,
};
