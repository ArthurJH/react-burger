import React from 'react';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Ingredient.module.css'

function Ingredient({name, price, image}) {
    return (
        <div className={styles.ingredient}>
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

export default Ingredient;
