import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Box, List } from './styles';

const menus = [
  {
    path: '/',
    title: 'Ínicio',
  },
  {
    path: '/schedule',
    title: 'Agenda',
  },
  /* {
    path: '/videos',
    title: 'Vídeos',
  }, */
  {
    path: '/contact',
    title: 'Contato',
  },
];

export default function Header() {
  return (
    <header>
      <Menu>
        <Box>
          <List>
            {menus.map(({ path, title }) => (
              <li>
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
