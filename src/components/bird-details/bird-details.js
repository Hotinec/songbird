import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './bird-details.scss';

const BirdDetails = () => {
  return (
    <div className="bird-details card">
      {/* <p>Some text</p> */}
      <div className="card-body">
        <img
          className="bird-image"
          src="https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg"
          alt="bird"
        />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>Журавль</h4>
          </li>
          <li className="list-group-item">
            <span>Grus grus</span>
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
      <p className="card-text">
        Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли
        чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а
        вторая подхватывает «лы». Если птица поёт одна, то она издает только
        звук «кур».
      </p>
    </div>
  );
};

export default BirdDetails;
