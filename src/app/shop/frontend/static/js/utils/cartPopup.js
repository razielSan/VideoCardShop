import { ProductModal } from "../constants/modal.js";

function toggleCart(isActive) {
  const hidden = isActive ? "hidden" : "";
  document.body.style.overflow = hidden;
  ProductModal.cart.classList.toggle("active", isActive);
  ProductModal.overlay.classList.toggle("active", isActive);
}

function openCart() {
  ProductModal.openCartButton.addEventListener("click", () => {
    toggleCart(true);
  });
}

function closeCart() {
  ProductModal.closeCartElement.forEach((el) => {
    el.addEventListener("click", () => {
      toggleCart(false);
    });
  });
}

export { openCart, closeCart };
