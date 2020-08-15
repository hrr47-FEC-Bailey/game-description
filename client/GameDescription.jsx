import React from 'react';
import styles from './style.css';

import SpecificationsBlock from './components/SpecificationsBlock.jsx'

const GameDescription = ({ desc, specs }) => (
  <div className={styles.game_description}>
    <div className={styles.game_description_block}>
      <h2>About this Game</h2>
      {desc.about}
    </div>
    <div className={styles.game_description_block}>
      <h2>Mature Content Warning</h2>
      <p>The developers describe the content like this:</p>
      <p><i>{desc.mature_content}</i></p>
    </div>
    <SpecificationsBlock specs={specs} />
  </div>
);

export default GameDescription;
