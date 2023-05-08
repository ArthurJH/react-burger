import React from 'react';
import PropTypes from "prop-types";
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Ingredient.module.css'
import {ingredientTypes} from "../../utils/prop-types";

function Ingredient({ingredient, openModal}) {
    function openIngredient() {
        openModal(ingredient)
    }

    return (
        <div className={styles.ingredient} onClick={openIngredient}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={ingredient.image} alt="" className="mb-2"/>
            <div className={`${styles.price} mb-2`}>
                <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.desc} text text_type_main-default`}>
                {ingredient.name}
            </p>
        </div>
    )
}

Ingredient.propTypes = {
    ingredient: ingredientTypes,
    openModal: PropTypes.func.isRequired
};

export default Ingredient;
