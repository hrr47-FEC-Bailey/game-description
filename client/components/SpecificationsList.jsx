import React from 'react';

const SpecificationsList = ({ title, specs }) => (
  <ul>
    <strong>{title}</strong>
    <br/>
    <ul>
      <li>
        <strong>OS:</strong>
        {` ${specs.os}`}
      </li>
      <li>
        <strong>Processor:</strong>
        {` ${specs.processor}`}
      </li>
      <li>
        <strong>Memory:</strong>
        {` ${specs.memory}`}
      </li>
      <li>
        <strong>Graphics:</strong>
        {` ${specs.graphics}`}
      </li>
      <li>
        <strong>Storage:</strong>
        {` ${specs.storage}`}
      </li>
    </ul>
  </ul>
);

export default SpecificationsList;
