import React from 'react';
import PropTypes from 'prop-types';
import '../style.css'

const Notification = ({
    message,
    type = 'info',
    size = 'medium',
    onClose,
    showCloseButton = true,
}) => {
    return (
        <div className={`notification ${type} ${size}`}>
            <span>{message}</span>
            {showCloseButton && (
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
            )}
        </div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClose: PropTypes.func.isRequired,
    showCloseButton: PropTypes.bool,
};

export default Notification;
