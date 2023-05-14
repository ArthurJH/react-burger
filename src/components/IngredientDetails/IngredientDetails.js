import React from "react";
import Modal from "../Modal/Modal";
import style from "./IngredientDetails.module.css"
import PropTypes from "prop-types";
import {ingredientTypes} from '../../utils/prop-types'

function IngredientDetails({onClose, ingredient}) {
    return (
        <Modal onClose={onClose} isHeaderShow={true}>
            <div className={style.ingredientDetail}>
                <img src={ingredient.image_large} alt="" className="mb-4"/>
                <p className={`text text_type_main-medium mb-8 ${style.desc}`}>
                    {ingredient.name}
                </p>
                <div className={`${style.row} mb-5`}>
                    <div className={style.column}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Калории,ккал
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {ingredient.calories}
                        </p>
                    </div>
                    <div className={style.column}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Белки, г
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {ingredient.proteins}
                        </p>
                    </div>
                    <div className={style.column}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Жиры, г
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {ingredient.fat}
                        </p>
                    </div>
                    <div className={style.column}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Углеводы, г
                        </p>
                        <p className="text text_type_digits-default text_color_inactive">
                            {ingredient.carbohydrates}
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

IngredientDetails.propTypes = {
    onClose: PropTypes.func.isRequired,
    ingredient: ingredientTypes
};

export default IngredientDetails;
