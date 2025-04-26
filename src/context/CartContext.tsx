"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import { getCartCount as getCartCountUtil, addToCart as addToCartUtil, removeFromCart as removeFromCartUtil, updateCartItemQuantity as updateCartItemQuantityUtil, getCart, getCartTotal as getCartTotalUtil, CartItem } from '@/utils/cart';

interface CartContextProps {
  cartCount: number;
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemId: string, size: string, color: string) => void;
  updateItemQuantity: (itemId: string, size: string, color: string, quantity: number) => void;
  getCartItems: () => CartItem[];
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Function to refresh count AND total from cookies
  const refreshCartState = useCallback(() => {
      setCartCount(getCartCountUtil());
      setCartTotal(getCartTotalUtil());
  }, []);

  // Initialize count on mount (client-side)
  useEffect(() => {
    refreshCartState();
  }, [refreshCartState]);

  const addItemToCart = (item: CartItem) => {
    addToCartUtil(item);
    refreshCartState(); // Update count and total
  };

  const removeItemFromCart = (itemId: string, size: string, color: string) => {
    removeFromCartUtil(itemId, size, color);
    refreshCartState(); // Update count and total
  };

  const updateItemQuantity = (itemId: string, size: string, color: string, quantity: number) => {
    updateCartItemQuantityUtil(itemId, size, color, quantity);
    refreshCartState(); // Update count and total
  };

  const getCartItems = (): CartItem[] => {
      return getCart();
  };

  const getCartTotal = (): number => {
    console.log(getCartTotalUtil());
      return getCartTotalUtil();
  };

  return (
    <CartContext.Provider value={{ cartCount, addItemToCart, removeItemFromCart, updateItemQuantity, getCartItems, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 