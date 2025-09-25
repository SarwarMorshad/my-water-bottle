const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const storedCart = JSON.parse(cart);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  //   if (cart.some((x) => String(x) === String(id))) return;
  const newCart = [...cart, id];
  saveCartToLocalStorage(newCart);
};

const removeItemFromLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = cart.filter((itemId) => String(itemId) !== String(id));
  saveCartToLocalStorage(newCart);
};

export { getCartFromLocalStorage, saveCartToLocalStorage, addItemToLocalStorage, removeItemFromLocalStorage };
