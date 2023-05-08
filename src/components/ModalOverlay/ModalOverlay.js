import React from "react";
import style from "./ModalOverlay.module.css"
import PropTypes from "prop-types";

function ModalOverlay({onClose, children}) {
    return (
        <div className={style.modalOverlay} onClick={onClose}>
        </div>
    )
}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default ModalOverlay;
