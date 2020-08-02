import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './random-bird.scss';

const RandomBird = () => {
  return (
    <div className="random-bird jumbotron rounded">
      <img
        className="bird-image"
        src="https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg"
        alt="bird"
      />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>Журавль</h3>
          </li>
          <li className="list-group-item">
            <AudioPlayer
              src="https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"
              showJumpControls={false}
              customAdditionalControls={[]}
              customVolumeControls={[]}
              onListen={() => console.log('Melody started!')}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomBird;
