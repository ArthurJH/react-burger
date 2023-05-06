import React from 'react';
import PropTypes from "prop-types";
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Ingredient.module.css'

function Ingredient({name, price, image, openModal, proteins, fat, carbohydrates, calories, image_large}) {
    function openIngredient() {
        const ingredient = {
            name,
            proteins,
            fat,
            carbohydrates,
            calories,
            image_large
        }

        openModal(ingredient)
    }

    return (
        <div className={styles.ingredient} onClick={openIngredient}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={image} alt="" className="mb-2"/>
            <div className={`${styles.price} mb-2`}>
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.desc} text text_type_main-default`}>
                {name}
            </p>
        </div>
    )
}

Ingredient.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
};

export default Ingredient;
