import { products } from "../constants/products.js";
import { Product } from "../modules/product.js";
import { openCart, closeCart } from "../utils/cartPopup.js";
import { Cart } from "../modules/cart.js";

function startUp() {
  let product = new Product(products);
  let cart = new Cart();

  product.init();
  cart.init();

  openCart();
  closeCart();
}

export { startUp };
