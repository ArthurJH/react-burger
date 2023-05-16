import styles from "./BurgerConstructor.module.css";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useContext, useEffect, useState, useMemo} from "react";
import {BurgerConstructorContext, TotalPriceContext} from "../../contexts/BurgerConstructorContext";

function BurgerConstructor({openModal}) {
    const order = useContext(BurgerConstructorContext);
    let priceObj = useContext(TotalPriceContext);
    const bunOrder = useMemo(() => getBun(), [order]);

    useEffect(() => {
        priceObj.calcTotalPrice();
    }, [order])

    function getBun() {
        if(order.length > 1) {
            return order.find((item) => item.type === 'bun');
        }
    }

    function openCheck() {
        openModal(null, 'check')
    }

    return (
        <div className={`${styles.rightSide} ml-10`}>
            {order.length > 1 &&
                (
                    <>
                        <div className={styles.composition}>
                            <div className={styles.composition__border}>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={bunOrder.name}
                                    price={bunOrder.price}
                                    thumbnail={bunOrder.image}
                                />
                            </div>
                            <div className={`${styles.composition__list} custom-scroll`}>
                                {order.map(el => {
                                    if(el.type !== 'bun') {
                                        return (
                                            <div className={styles.composition__row} key={el._id}>
                                                <DragIcon type="primary" />
                                                <ConstructorElement
                                                    text={el.name}
                                                    price={el.price}
                                                    thumbnail={el.image}
                                                />
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className={styles.composition__border}>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={bunOrder.name}
                                    price={bunOrder.price}
                                    thumbnail={bunOrder.image}
                                />
                            </div>
                        </div>
                        <div className={`${styles.check} mt-10`}>
                            <p className="text text_type_digits-medium mr-2">{priceObj.totalPrice}</p>
                            <CurrencyIcon type="primary"/>
                            <Button htmlType="button" type="primary" size="medium" onClick={openCheck}>
                                Оформить заказ
                            </Button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default BurgerConstructor;
