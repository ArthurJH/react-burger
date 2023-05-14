import React, {useState, useEffect} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import style from './App.module.css'
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {getIngredients} from '../../utils/burger-api'


function App() {
    const [state, setState] = useState({
        isLoading: false,
        hasError: false,
        ingredients: []
    })

    const [selectIngredient, setSelectIngredient] = useState({})

    const [statePopup, setStatePopup] = useState(
        {
            type: '',
            visible: false
        }
    )

    function handleOpenModal(ingredient = null, type = 'ingredient') {
        if (type === 'check') {

        }

        if(type === 'ingredient') {
            setSelectIngredient(ingredient)
        }

        setStatePopup({
            type,
            visible: true
        })
    }

    function handleCloseModal() {
        setStatePopup({type: '', visible: false})
    }

    const getProducts = () => {
        getIngredients().then(data => setState({...state, ingredients: data.data, isLoading: false}))
    };

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className="App">
            <AppHeader/>
            <main>
                <div className="container">
                    {statePopup.visible && statePopup.type === 'check' &&
                        <OrderDetails onClose={handleCloseModal}/>
                    }
                    {statePopup.visible && statePopup.type === 'ingredient' &&
                        <IngredientDetails onClose={handleCloseModal} ingredient={selectIngredient}/>
                    }

                    <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
                    <div className={style.content}>
                        {state.isLoading && 'Загрузка...'}
                        {state.hasError && 'Произошла ошибка'}
                        {state.ingredients.length > 0 && !state.hasError && !state.isLoading && (
                            <>
                                <BurgerIngredients data={state.ingredients} openModal={handleOpenModal}/>
                                <BurgerConstructor openModal={handleOpenModal}/>
                            </>
                        )
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
