import React from 'react';
import PropTypes from 'prop-types';
import '../style.css'

const Dropdown = ({
    options,
    value,
    onChange,
    placeholder = 'Select',
    disabled = false,
    className = '',
    style = {},
}) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`dropdown ${className}`}
            style={style}
            disabled={disabled}
        >
            <option value="" disabled>
                {placeholder}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Dropdown;
