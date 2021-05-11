import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ background }) => (
    <div style={{ background: background, height: '300px', width: '300opx' }}>Yollo</div>
);

Display.propTypes = {
    background: PropTypes.string.isRequired,
};

export default Display;