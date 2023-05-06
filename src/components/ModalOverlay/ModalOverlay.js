import React from "react";
import style from "./ModalOverlay.module.css"
import PropTypes from "prop-types";

function ModalOverlay({onClose, children}) {
    return (
        <div className={style.modalOverlay} onClick={onClose}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default ModalOverlay;
