import React from 'react';
import styles from '../style.css';

import SpecificationsList from './SpecificationsList.jsx';

const SpecificationsBlock = ({ specs }) => (
  <div className={styles.game_description_block}>
    <h2>System Requirements</h2>
    <div className={styles.game_system_reqs_contents_wrapper}>
      <div className={styles.game_system_reqs_data}>
        <div className={styles.sys_req_left_col}>
          <SpecificationsList specs={specs.minimum} />
        </div>
        <div className={styles.sys_req_right_col}>
          <SpecificationsList specs={specs.recommended} />
        </div>
      </div>
    </div>
  </div>
);


export default SpecificationsBlock;