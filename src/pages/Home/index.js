import React from 'react';

import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

import logo from '~/assets/logo.png';

import { Box } from './styles';

export default function Home() {
  return (
    <Box>
      <img src={logo} alt="Binca Shelyne" />

      <p>
        <span>Cantora</span>
        <span>Compositora</span>
        <span>Atriz</span>
      </p>

      <div>
        <a
          href="https://www.instagram.com/biancashelyne/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram size={20} />
        </a>

        <a
          href="https://www.youtube.com/channel/UCXRExMtOE-chWT0a_ILU4lQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiYoutube size={20} />
        </a>

        <a
          href="https://www.facebook.com/bianca.shelyne"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook size={20} />
        </a>
      </div>
    </Box>
  );
}
