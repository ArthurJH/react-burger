import React from 'react'
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './AppHeader.module.css'

function AppHeader() {
    return (
        <header className={`${styles.header} mb-10`}>
            <div className={`${styles.header__wrapper} container`} >
                <div className={styles.header__left}>
                    <div className={styles.header__logo}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default">Конструктор</p>
                    </div>
                    <div className={styles.header__orders}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default">Лента заказов</p>
                    </div>
                </div>
                <Logo />
                <div className={styles.header__auth}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default">Личный кабинет</p>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;
