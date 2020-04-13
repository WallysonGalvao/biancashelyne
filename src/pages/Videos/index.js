import React, { useState } from 'react';
import YouTube from '@u-wave/react-youtube';
import { FiYoutube } from 'react-icons/fi';

import { Box, InfoContainer, Info, List } from './styles';

import videos from '~/res/videos.json';

export default function Videos() {
  const [selectedVideo, setselectedVideo] = useState({
    id: 'eI6A7RMLnpg',
  });
  return (
    <Box>
      <YouTube
        video={selectedVideo.id}
        width={640}
        height={350}
        autoplay={false}
        controls={false}
        suggestedQuality="auto"
        volume={1}
        paused={false}
        modestBranding
        showRelatedVideos
        allowFullscreen
      />
      <InfoContainer>
        <Info>
          <span>
            Confira na lista ao lado alguns dos meus vídeos e fique a vontade
            para assistir mais no meu canal:
          </span>
          <a
            href="https://www.youtube.com/channel/UCXRExMtOE-chWT0a_ILU4lQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiYoutube size={100} />
          </a>
        </Info>

        <List>
          {videos.map(video => (
            <button
              key={video.id}
              type="button"
              className={`collection-item ${
                selectedVideo.id === video.id ? 'active' : ''
              }`}
              onClick={() => setselectedVideo(video)}
            >
              {video.name}
            </button>
          ))}
        </List>
      </InfoContainer>
    </Box>
  );
}
