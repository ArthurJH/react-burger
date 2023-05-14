import styles from "./BurgerConstructor.module.css";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

function BurgerConstructor({openModal}) {
    const imgBun = 'https://code.s3.yandex.net/react/code/bun-02.png';

    function openCheck() {
        openModal(null, 'check')
    }

    return (
        <div className={`${styles.rightSide} ml-10`}>
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
                <Button htmlType="button" type="primary" size="medium" onClick={openCheck}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}

export default BurgerConstructor;
