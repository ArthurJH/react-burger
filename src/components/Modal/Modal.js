import React, {useEffect} from "react";
import ReactDOM from 'react-dom'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import style from "./Modal.module.css"
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

function Modal({onClose, isHeaderShow, children}) {
    function closeModal() {
        onClose();
        removeEventESC();
    }

    function removeEventESC() {
        document.removeEventListener('keydown', eventESC, false)
    }

    function addEventESC() {
        document.addEventListener('keydown', eventESC, false)
    }

    function eventESC(e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    }

    useEffect(() => {
        addEventESC();
    }, [])

    return ReactDOM.createPortal(
        (
            <div className={style.modal__wrapper }>
                <ModalOverlay onClose={closeModal}/>
                <div className={style.modal} onClick={(e)=> e.stopPropagation()}>
                    <div className={`${style.modal__header} ${isHeaderShow ? style.isHeaderShow : ''}`}>
                        {isHeaderShow &&
                        (
                            <p className="text text_type_main-large">
                                Детали ингредиента
                            </p>
                        )
                        }
                        <button onClick={closeModal}>
                            <CloseIcon type="primary"/>
                        </button>
                    </div>
                    <div className={style.modal__content}>
                        {children}
                    </div>
                </div>
            </div>
        ),
        modalRoot
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    isHeaderShow: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Modal;
