import React, {useState, useEffect} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import style from './App.module.css'
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {getIngredients, sendOrder} from '../../utils/burger-api'
import {BurgerConstructorContext, TotalPriceContext} from "../../contexts/BurgerConstructorContext";


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

    const [checkID, setCheckID] = useState('0000')

    const [totalPrice, setTotalPrice] = useState(0)

    const [order, setOrder] = useState([]);

    function handleOpenModal(ingredient = null, type = 'ingredient') {
        if (type === 'check') {
            sendOrder().then(data => setCheckID(data.order.number))
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

    function calcTotalPrice() {
        let price = 0;
        if(order.length > 1) {
            order.forEach(el => {
                price += el.price;
            })
        }
        setTotalPrice(price);
    }

    function fakeOrder() {
        if(state.ingredients.length > 0 && !state.hasError && !state.isLoading) {
            const bun = state.ingredients.find((item) => item.type === 'bun');
            const orderContent = state.ingredients.filter(item => item.type !== 'bun');
            setOrder([bun, ...orderContent]);
            calcTotalPrice();
        }
    }

    const getProducts = () => {
        getIngredients().then(data => setState({...state, ingredients: data.data, isLoading: false}));
    };

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        fakeOrder();
    }, [state])

    return (
        <div className="App">
            <AppHeader/>
            <main>
                <div className="container">
                    <BurgerConstructorContext.Provider value={order}>
                        <TotalPriceContext.Provider value={{totalPrice, calcTotalPrice}}>
                            {statePopup.visible && statePopup.type === 'check' &&
                                <OrderDetails onClose={handleCloseModal} checkID={checkID}/>
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
                        </TotalPriceContext.Provider>
                    </BurgerConstructorContext.Provider>
                </div>
            </main>
        </div>
    );
}

export default App;
