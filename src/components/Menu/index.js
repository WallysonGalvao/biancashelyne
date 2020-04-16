import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import * as Feather from 'react-icons/fi';

import menus from '~/res/menus.json';

import { Container, Button, Nav, List } from './styles';

export default function Menu() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setOpen(!open);
  }, [location]);

  const { FiMenu } = Feather;

  return (
    <Button onClick={() => setOpen(!open)}>
      <FiMenu size={30} />

      <Nav open={open}>
        <ul>
          {menus.map(({ path, title }) => (
            <li key={path}>
              <NavLink exact to={path}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </Nav>
    </Button>
  );

  if (false) {
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
}
