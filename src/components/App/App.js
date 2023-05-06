import React from 'react';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import data from '../../utils/data'
import style from './App.module.css'
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <main>
                <div className="container">
                    <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
                    <div className={style.content}>
                        <BurgerIngredients data={data}/>
                        <BurgerConstructor/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
