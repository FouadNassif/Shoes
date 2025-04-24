import Cookies from 'js-cookie';

const CART_COOKIE = 'cart';

export type CartItem = {
    id: string;
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
    quantity: number;
};

export const getCart = (): CartItem[] => {
    const cart = Cookies.get(CART_COOKIE);
    return cart ? JSON.parse(cart) : [];
};

export const addToCart = (item: CartItem): void => {
    const cart = getCart();
    const existingItem = cart.find(
        cartItem => 
            cartItem.id === item.id && 
            cartItem.size === item.size && 
            cartItem.color === item.color
    );

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    Cookies.set(CART_COOKIE, JSON.stringify(cart));
};

export const removeFromCart = (itemId: string, size: string, color: string): void => {
    const cart = getCart();
    const updatedCart = cart.filter(
        item => !(item.id === itemId && item.size === size && item.color === color)
    );
    Cookies.set(CART_COOKIE, JSON.stringify(updatedCart));
};

export const updateCartItemQuantity = (itemId: string, size: string, color: string, quantity: number): void => {
    const cart = getCart();
    const item = cart.find(
        item => item.id === itemId && item.size === size && item.color === color
    );
    if (item) {
        item.quantity = quantity;
        Cookies.set(CART_COOKIE, JSON.stringify(cart));
    }
};

export const getCartCount = (): number => {
    return getCart().reduce((total, item) => total + item.quantity, 0);
};

export const getCartTotal = (): number => {
    return getCart().reduce((total, item) => total + (item.price * item.quantity), 0);
}; 