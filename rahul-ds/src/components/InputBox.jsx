import React from 'react';
import PropTypes from 'prop-types';
import '../style.css'

const InputBox = ({
    type = 'text',
    placeholder = '',
    value,
    onChange,
    size = 'medium',
    className = '',
    style = {},
    disabled = false
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`input ${size} ${className}`}
            style={style}
            disabled={disabled}
        />
    );
};

InputBox.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
};

export default InputBox;
