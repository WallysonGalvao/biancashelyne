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
  {
    path: '/videos',
    title: 'Vídeos',
  },
  {
    path: '/gallery',
    title: 'Galeria',
  },
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
