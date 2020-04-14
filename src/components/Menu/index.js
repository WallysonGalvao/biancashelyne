import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Feather from 'react-icons/fi';

import menus from '~/res/menus.json';

import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      {menus.map(({ path, icon }) => {
        const { [icon]: Icon } = Feather;
        return (
          <NavLink exact to={path}>
            <Icon size={30} />
          </NavLink>
        );
      })}
    </Container>
  );
}
