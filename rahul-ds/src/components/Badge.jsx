import React from 'react';
import PropTypes from 'prop-types';
import '../style.css'

const Badge = ({ 
    text, 
    size = 'medium', 
    variant = 'default', 
    className = '', 
    style = {} 
}) => {
    return (
        <span 
            className={`badge ${size} ${variant} ${className}`} 
            style={style}
        >
            {text}
        </span>
    );
};

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Badge;
