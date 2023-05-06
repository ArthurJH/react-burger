import React, {useState, useEffect} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import style from './App.module.css'
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
    const urlAPI = 'https://norma.nomoreparties.space/api/ingredients';

    const [state, setState] = useState({
        isLoading: false,
        hasError: false,
        ingredients: []
    })

    const getProducts = () => {
        fetch(urlAPI)
            .then(res => res.json())
            .then(json => setState({...state, json, isLoading: false}))
            .catch(e => {
                setState({...state, hasError: true, isLoading: false});
            });
    };

    useEffect(() => {
        fetch(urlAPI)
            .then(res => res.json())
            .then(data => setState({...state, ingredients: data.data, isLoading: false}))
            .catch(e => {
                setState({...state, hasError: true, isLoading: false});
            });
    }, [])

    console.log(state)

    return (
        <div className="App">
            <AppHeader/>
            <main>
                <div className="container">
                    <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
                    <div className={style.content}>
                        {state.isLoading && 'Загрузка...'}
                        {state.hasError && 'Произошла ошибка'}
                        {state.ingredients.length > 0 && !state.hasError && !state.isLoading &&  (
                            <>
                                <BurgerIngredients data={state.ingredients}/>
                                <BurgerConstructor/>
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
