const NORMA_API = 'https://norma.nomoreparties.space/api';

export const getIngredients = () => {
    return fetch(`${NORMA_API}/ingredients`).then(checkReponse)
}

export const sendOrder = async () => {
    try {
        const response = await fetch(`${NORMA_API}/orders`, {
            method: 'POST',
            body: JSON.stringify({
                "ingredients": ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa093e"]
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
