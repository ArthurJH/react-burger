import React from 'react';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import data from '../../utils/data'

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <main>
                <div className="container">
                    <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
                    <div className="content">
                        <BurgerIngredients data={data}/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
