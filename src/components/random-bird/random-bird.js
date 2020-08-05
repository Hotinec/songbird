import React, { createRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './random-bird.scss';
import birdImage from '../../assets/bird.jpg';

const RandomBird = ({ bird, isAnswered }) => {
  const player = createRef();

  return (
    <div className="random-bird jumbotron rounded text-center">
      <img
        className="bird-image"
        src={isAnswered ? bird.image : birdImage}
        alt="bird"
      />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{isAnswered ? bird.name : '******'}</h3>
          </li>
          <li className="list-group-item">
            <AudioPlayer
              src={bird.audio}
              ref={player}
              layout="horizontal-reverse"
              showJumpControls={false}
              customAdditionalControls={[]}
              autoPlayAfterSrcChange={false}
              onListen={() => {
                if (isAnswered && player.current) {
                  player.current.audio.current.pause();
                }
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomBird;
