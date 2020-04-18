import React from 'react';
import { NavLink } from 'react-router-dom';

import { Menu, Box, List } from './styles';

import menus from '~/res/menus.json';

export default function Header() {
  return (
    <header style={{ zIndex: 2 }}>
      <Menu>
        <Box>
          <List>
            {menus.map(({ path, title }) => (
              <li key={path}>
                <NavLink exact to={path}>
                  {title}
                </NavLink>
              </li>
            ))}
          </List>
        </Box>
      </Menu>
    </header>
  );
}
