import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '~/pages/Home';
import Schedule from '~/pages/Schedule';
import Videos from '~/pages/Videos';
import About from '~/pages/About';
import Contact from '~/pages/Contact';

import Route from './Routes';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/schedule" exact component={Schedule} />
      <Route path="/videos" exact component={Videos} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  );
}
