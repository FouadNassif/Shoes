import Cookies from 'js-cookie';

const FAVORITES_COOKIE = 'favorites';

export const getFavorites = (): string[] => {
    const favorites = Cookies.get(FAVORITES_COOKIE);
    return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (shoeId: string): void => {
    const favorites = getFavorites();
    if (!favorites.includes(shoeId)) {
        favorites.push(shoeId);
        Cookies.set(FAVORITES_COOKIE, JSON.stringify(favorites));
    }
};

export const removeFromFavorites = (shoeId: string): void => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(id => id !== shoeId);
    Cookies.set(FAVORITES_COOKIE, JSON.stringify(updatedFavorites));
};

export const isFavorite = (shoeId: string): boolean => {
    const favorites = getFavorites();
    return favorites.includes(shoeId);
};

export const getFavoritesCount = (): number => {
    return getFavorites().length;
}; 