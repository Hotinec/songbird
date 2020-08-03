import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './bird-details.scss';

const BirdDetails = ({ selectedBird }) => {
  return (
    <div className="bird-details card">
      {!selectedBird ? (
        <div>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </div>
      ) : (
        <>
          <div className="card-body">
            <img className="bird-image" src={selectedBird.image} alt="bird" />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>{selectedBird.name}</h4>
              </li>
              <li className="list-group-item">
                <span>{selectedBird.species}</span>
              </li>
              <li className="list-group-item"></li>
            </ul>
          </div>
          <AudioPlayer
            src={selectedBird.audio}
            layout="horizontal-reverse"
            showJumpControls={false}
            customAdditionalControls={[]}
            autoPlayAfterSrcChange={false}
          />
          <p className="card-text">{selectedBird.description}</p>
        </>
      )}
    </div>
  );
};

export default BirdDetails;
