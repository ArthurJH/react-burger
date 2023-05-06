import React from 'react';
import {Tab, ConstructorElement, DragIcon, CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngredients.module.css'
import Ingredient from "../Ingredient/Ingredient";

function BurgerIngredients({data}) {
    const [current, setCurrent] = React.useState('one')
    const imgBun = 'https://code.s3.yandex.net/react/code/bun-02.png';

    return (
        <>
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
                                return <Ingredient {...newEl} key={newEl.id}/>
                            })}
                        </div>
                    </section>
                    <section id="section2" className={styles.section}>
                        <p className="text text_type_main-medium mb-6">
                            Соусы
                        </p>
                        <div className={styles.row}>
                            {data.filter(el => el.type === 'sauce').map((newEl) => {
                                return <Ingredient {...newEl} key={newEl.id}/>
                            })}
                        </div>
                    </section>
                    <section id="section3" className={styles.section}>
                        <p className="text text_type_main-medium mb-6">
                            Начинки
                        </p>
                        <div className={styles.row}>
                            {data.filter(el => el.type === 'main').map((newEl) => {
                                return <Ingredient {...newEl} key={newEl.id}/>
                            })}
                        </div>
                    </section>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.composition}>
                    <div className={styles.composition__border}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={imgBun}
                        />
                    </div>
                    <div className={`${styles.composition__list} custom-scroll`}>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Соус традиционный галактический"
                                price={30}
                                thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png"
                            />
                        </div>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Мясо бессмертных моллюсков Protostomia"
                                price={300}
                                thumbnail="https://code.s3.yandex.net/react/code/meat-02.png"
                            />
                        </div>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Плоды Фалленианского дерева"
                                price={80}
                                thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                            />
                        </div>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Хрустящие минеральные кольца"
                                price={80}
                                thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                            />
                        </div>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Хрустящие минеральные кольца"
                                price={80}
                                thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                            />
                        </div>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Соус традиционный галактический"
                                price={30}
                                thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png"
                            />
                        </div>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Мясо бессмертных моллюсков Protostomia"
                                price={300}
                                thumbnail="https://code.s3.yandex.net/react/code/meat-02.png"
                            />
                        </div>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Плоды Фалленианского дерева"
                                price={80}
                                thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                            />
                        </div>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Хрустящие минеральные кольца"
                                price={80}
                                thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                            />
                        </div>
                        <div className={styles.composition__row}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text="Хрустящие минеральные кольца"
                                price={80}
                                thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                            />
                        </div>
                    </div>
                    <div className={styles.composition__border}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={imgBun}
                        />
                    </div>
                </div>
                <div className={`${styles.check} mt-10`}>
                    <p className="text text_type_digits-medium mr-2">610</p>
                    <CurrencyIcon type="primary"/>
                    <Button htmlType="button" type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </>

    );
}

export default BurgerIngredients;
