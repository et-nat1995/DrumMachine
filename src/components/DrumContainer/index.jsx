import React from 'react';

import DrumPad from '../DrumPad';


const drumPads = [
  {keyCode: 81, keyString: 'Q', audioId: 'Heater-1', url: 'Heater-1.mp3'},
  {keyCode: 87, keyString: 'W', audioId: 'Heater-2',  url: 'Heater-2.mp3'},
  {keyCode: 69, keyString: 'E', audioId: 'Heater-3',url: 'Heater-3.mp3'},
  {keyCode: 65, keyString: 'A', audioId: 'Heater-4',url: 'Heater-4_1.mp3'},
  {keyCode: 83, keyString: 'S', audioId: 'Clap',url: 'Heater-6.mp3'},
  {keyCode: 68, keyString: 'D', audioId: 'Open-HH', url: 'Dsc_Oh.mp3'},
  {keyCode: 90, keyString: 'Z', audioId: "Kick-n'-Hat", url: 'Kick_n_Hat.mp3'},
  {keyCode: 88, keyString: 'X', audioId: 'Kick', url: 'RP4_KICK_1.mp3'},
  {keyCode: 67, keyString: 'C', audioId: 'Closed-HH', url: 'Cev_H2.mp3'}
];

function App() {
  return (
    <div className="App" id="drum-machine">
      <div id="display">
        Please Click or Press a Key!
      </div>
      {
        drumPads.map((pad, key) =><DrumPad key={key} {...pad} /> )
      }
    </div>
  );
}

export default App;
