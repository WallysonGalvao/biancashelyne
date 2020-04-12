import React from 'react';

import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Content from '~/components/Content';

import image from '../../assets/micro.jpg';

import { Box } from './styles';

export default function Home() {
  return (
    <Background image={image}>
      <Header />
      <Content>
        <Box>
          <h2>Bianca Shelyne</h2>

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
      </Content>
    </Background>
  );
}
