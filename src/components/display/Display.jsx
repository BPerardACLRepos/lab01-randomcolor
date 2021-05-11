import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ background }) => (
    <div style={{ background: background }}>Yollo</div>
);

Display.propTypes = {
    background: PropTypes.string.isRequired,
};

export default Display;