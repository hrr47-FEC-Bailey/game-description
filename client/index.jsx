import React from 'react';
import ReactDOM from 'react-dom';
import GameDescription from './GameDescription.jsx';

import { desc, specifications } from './sampleData.js';

ReactDOM.render(<GameDescription desc={desc} specs={specifications} />, document.getElementById('game-description'));
