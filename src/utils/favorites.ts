import Cookies from 'js-cookie';

const FAVORITES_COOKIE = 'favorites';
const FAVORITES_CHANGED_EVENT = 'favoritesChanged';

export const getFavorites = (): string[] => {
    const favorites = Cookies.get(FAVORITES_COOKIE);
    return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (shoeId: string): void => {
    const favorites = getFavorites();
    if (!favorites.includes(shoeId)) {
        favorites.push(shoeId);
        Cookies.set(FAVORITES_COOKIE, JSON.stringify(favorites));
        // Dispatch custom event
        window.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT));
    }
};

export const removeFromFavorites = (shoeId: string): void => {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(id => id !== shoeId);
    Cookies.set(FAVORITES_COOKIE, JSON.stringify(updatedFavorites));
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT));
};

export const isFavorite = (shoeId: string): boolean => {
    const favorites = getFavorites();
    return favorites.includes(shoeId);
};

export const getFavoritesCount = (): number => {
    return getFavorites().length;
}; 