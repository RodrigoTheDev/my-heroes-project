export function getCookie(name) {

    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

export async function deleteJson(url) {
    const request = await fetch(url, {
        method: 'DELETE', // Use 'DELETE' ou 'PUT' dependendo do seu servidor/API
    });
}

export async function getDB(url) { //puxa do banco de dados pela URL da api
    const req = await fetch(`${url}`)
    const data = await req.json()

    return data;
}

export async function filterFav(user_id) { //filtra os favoritos do usuário
    const data = await getDB('http://localhost:3001/favorites')
    const filter = []

    for(let item of data) { //filtra todos que tenham o id de usuário igual ao do cookie
        if(user_id == item.user_id) {
            filter.push(item)
        }
    }

    return filter
}

export async function filterHero(user_id) {
    const favorites = await filterFav(user_id)
    const hero_data = await getDB('http://localhost:3000/heroes')
    const filter = []

    for(let indexX in favorites) {
        for(let indexY in hero_data) {
            if(favorites[indexX].hero_id == hero_data[indexY].id) {
                filter.push(hero_data[indexY])
            }
        }
    }

    return filter
}