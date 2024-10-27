import React from 'react';
import PropTypes from 'prop-types';


const NameList = ({ names }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li> 
      ))}
    </ul>
  );
};


NameList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default NameList;
