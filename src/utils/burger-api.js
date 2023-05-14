const NORMA_API = 'https://norma.nomoreparties.space/api';

export const getIngredients = () => {
    return fetch(`${NORMA_API}/ingredients`).then(checkReponse)
}

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};
