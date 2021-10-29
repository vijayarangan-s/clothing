import { CartItem } from "../components/Cart-Item/Cart-Item"

export const addCartToItem = (cartItems, cartItemToAdd) => {
  
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });
 
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToRemove.id
    })
    
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem =>  cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem =>
            cartItem.id === cartItemToRemove.id ?
                {...cartItem, quantity : cartItem.quantity-1}:
                cartItem
    )

}