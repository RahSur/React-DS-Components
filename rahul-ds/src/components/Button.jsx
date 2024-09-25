import React from 'react';
import PropTypes from 'prop-types';
import '../style.css'

const Button = ({ 
    label, 
    onClick, 
    type = 'button', 
    disabled = false, 
    className = '', 
    style = {}, 
    variant = 'default', 
    size = 'medium' 
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`button ${variant} ${size} ${className}`}
            style={style}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
