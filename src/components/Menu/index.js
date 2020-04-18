import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import * as Feather from 'react-icons/fi';

import menus from '~/res/menus.json';

import { Button, Nav } from './styles';

export default function Menu() {
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(!open);
  }, [pathname]);

  const { FiMenu, FiX } = Feather;

  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        {open ? <FiX size={30} /> : <FiMenu size={30} />}
      </Button>
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
    </>
  );
}
