import React from "react";
import ReactDOM from 'react-dom'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import style from "./Modal.module.css"
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

function Modal({onClose, isHeaderShow, children}) {
    return ReactDOM.createPortal(
        (
            <ModalOverlay onClose={onClose}>
                <div className={style.modal} onClick={(e)=> e.stopPropagation()}>
                    <div className={`${style.modal__header} ${isHeaderShow ? style.isHeaderShow : ''}`}>
                        {isHeaderShow &&
                        (
                            <p className="text text_type_main-large">
                                Детали ингредиента
                            </p>
                        )
                        }
                        <button onClick={onClose}>
                            <CloseIcon type="primary"/>
                        </button>
                    </div>
                    <div className={style.modal__content}>
                        {children}
                    </div>
                </div>
            </ModalOverlay>
        ),
        modalRoot
    );
}

Modal.propTypes = {
    onClose: PropTypes.func,
    isHeaderShow: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Modal;
