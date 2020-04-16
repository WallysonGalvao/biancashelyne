import React from 'react';

import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

import logo from '~/assets/logo.png';

import { Box, Social } from './styles';

export default function Home() {
  return (
    <Box>
      <img src={logo} alt="Bianca Shelyne" />
      <Social>
        <div>
          <span>Cantora</span>
          <a
            href="https://www.instagram.com/biancashelyne/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram size={25} />
          </a>
        </div>
        <div>
          <span>Compositora</span>
          <a
            href="https://www.youtube.com/channel/UCXRExMtOE-chWT0a_ILU4lQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiYoutube size={25} />
          </a>
        </div>
        <div>
          <span>Atriz</span>
          <a
            href="https://www.facebook.com/bianca.shelyne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook size={25} />
          </a>
        </div>
      </Social>
    </Box>
  );
}
