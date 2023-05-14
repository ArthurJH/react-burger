import React from 'react';
import PropTypes from 'prop-types';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngredients.module.css'
import {ingredientTypes} from '../../utils/prop-types'
import Ingredient from "../Ingredient/Ingredient";

function BurgerIngredients({data, openModal}) {
    const [current, setCurrent] = React.useState('one')

    return (
        <div className={styles.leftSide}>
                <div className={`${styles.menu} mb-10`}>
                    <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                        <a className={styles.tabLink} href="#section1">
                            <p className="text text_type_main-default">
                                Булки
                            </p>
                        </a>
                    </Tab>
                    <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                        <a className={styles.tabLink} href="#section2">
                            <p className="text text_type_main-default">
                                Соусы
                            </p>
                        </a>
                    </Tab>
                    <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                        <a className={styles.tabLink} href="#section3">
                            <p className="text text_type_main-default">
                                Начинки
                            </p>
                        </a>
                    </Tab>
                </div>
                <div className={`${styles.list} custom-scroll`}>
                    <section id="section1" className={styles.section}>
                        <p className="text text_type_main-medium mb-6">
                            Булки
                        </p>
                        <div className={styles.row}>
                            {data.filter(el => el.type === 'bun').map((newEl) => {
                                return <Ingredient ingredient={newEl} key={newEl._id} openModal={openModal}/>
                            })}
                        </div>
                    </section>
                    <section id="section2" className={styles.section}>
                        <p className="text text_type_main-medium mb-6">
                            Соусы
                        </p>
                        <div className={styles.row}>
                            {data.filter(el => el.type === 'sauce').map((newEl) => {
                                return <Ingredient ingredient={newEl} key={newEl._id} openModal={openModal}/>
                            })}
                        </div>
                    </section>
                    <section id="section3" className={styles.section}>
                        <p className="text text_type_main-medium mb-6">
                            Начинки
                        </p>
                        <div className={styles.row}>
                            {data.filter(el => el.type === 'main').map((newEl) => {
                                return <Ingredient ingredient={newEl} key={newEl._id} openModal={openModal}/>
                            })}
                        </div>
                    </section>
                </div>
            </div>
    );
}


BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientTypes)
};

export default BurgerIngredients;
