const NORMA_API = 'https://norma.nomoreparties.space/api';

export const getIngredients = () => {
    return fetch(`${NORMA_API}/ingredients`).then(checkReponse)
}

export const sendOrder = async (ingredientsID) => {
    try {
        const response = await fetch(`${NORMA_API}/orders`, {
            method: 'POST',
            body: JSON.stringify({
                "ingredients": [...ingredientsID]
            } ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
        return json;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
