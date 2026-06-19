class Cart {
  static cart = document.querySelector(".js-cart");
  static productsList = document.querySelector(".js-products-list");
  static cartList = document.querySelector(".js-cart-list");
  static cartEmpty = document.querySelector(".js-cart-empty-container");
  static cartOrder = document.querySelector(".js-cart-order-container");
  static formatter = new Intl.NumberFormat("ru");
  static productInfo = {};

  init() {
    this.bindEvents()
    this.togleCartStatus();
    this.calculatingTotalCost();
  }

  bindEvents() {
    this.updateCounterEvent();
    this.addProductEvent();
    this.removeProductsEvent();
  }

  // счетчик продуктов
  updateCounterEvent() {
    this.constructor.cart.addEventListener("click", (event) => {
      let currentItems, minusBtn;
      if (
        event.target.matches(".js-minus") ||
        event.target.matches(".js-plus")
      ) {
        const counter = event.target.closest(".js-counter"); // ближайший родительский элемент для элемента
        currentItems = counter.querySelector(".js-current-items"); // текущее значение счетчика
        minusBtn = counter.querySelector(".js-minus");
      }
      if (event.target.matches(".js-plus")) {
        currentItems.textContent = ++currentItems.textContent;
        minusBtn.removeAttribute("disabled"); // делаем кнопку "-" активной
        this.calculatingTotalCost();
      }
      if (event.target.matches(".js-minus")) {
        currentItems.textContent = --currentItems.textContent;
        if (currentItems.textContent <= 1) {
          currentItems.textContent = 1;
          minusBtn.setAttribute("disabled", true); // делаем кнопку "-" не активной
        }
        this.calculatingTotalCost();
      }
    });
  }

  renderProduct({ id, price, photo, model }) {
    const li = document.createElement("li");
    li.classList.add("cart-item", "column", "js-cart-item");
    li.innerHTML = `
    <span class="close js-remove"></span>
    <div class="cartline row jcfs aic" id="${id}">
        <div class="cart-image-container">
            <img src="${photo}" alt="" class="cart-img">
        </div>
        <div class="column">
            <div class="cart-model row jcfs aic">
                ${model}
            </div>
            <div class="row jcsb aic">
                <div class="counter row jcc aic js-counter">
                    <button type="button" class="minus control row jcc aic js-minus" disabled>-</button>
                    <div class="current-items row jcc aic js-current-items">1</div>
                    <button type="button" class="plus control row jcc aic js-plus">+</button>
                </div>
                <div class="row jcc aic">
                    <span class="cart-price  row jcfe" data-price="${price}">${price}</span>
                    <span class="rouble">₽</span>
                </div>
            </div>
        </div>
    </div>    
    `;
    this.constructor.cartList.append(li);
  }
  // Добавление продуктов в корзину
  addProductEvent() {
    this.constructor.productsList.addEventListener("click", (event) => {
      if (event.target.classList.contains("js-buy-button")) {
        const product = event.target.closest(".js-product");
        const imageCard = product.querySelector(".js-image-card");
        const modelCard = product.querySelector(".js-title-card");
        const priceCard = product.querySelector(".js-price-card");
        const linkCard = product.querySelector(".js-link-card");

        this.constructor.productInfo.id = linkCard.getAttribute("id");
        this.constructor.productInfo.price = priceCard.textContent;
        this.constructor.productInfo.photo = imageCard.src;
        this.constructor.productInfo.model = modelCard.textContent;

        const productInCart = this.constructor.cartList.querySelector(
          `[id="${this.constructor.productInfo.id}"]`
        );
        if (productInCart) {
          const currentItemProduct =
            productInCart.querySelector(".js-current-items");
          const minusBtn = productInCart.querySelector(".js-minus");
          currentItemProduct.textContent =
            parseInt(currentItemProduct.textContent) + 1;
          minusBtn.removeAttribute("disabled");
        } else {
          this.renderProduct(this.constructor.productInfo);
        }
        this.togleCartStatus();
        this.calculatingTotalCost();
      }
    });
  }
  // Статус корзины
  togleCartStatus() {
    if (this.constructor.cart.querySelector(".js-cart-item")) {
      this.constructor.cartOrder.classList.remove("hidden");
      this.constructor.cartEmpty.classList.add("hidden");
    } else {
      this.constructor.cartOrder.classList.add("hidden");
      this.constructor.cartEmpty.classList.remove("hidden");
    }
  }

  removeProductsEvent() {
    this.constructor.cartList.addEventListener("click", (event) => {
      if (event.target.classList.contains("js-remove")) {
        const cartItem = event.target.closest(".js-cart-item");
        cartItem.remove();
        this.togleCartStatus();
        this.calculatingTotalCost();
      }
    });
  }
  // подсчет итоговой стоимости
  calculatingTotalCost() {
    const cartItems = document.querySelectorAll(".js-cart-item");
    const cartTotalPrice = document.querySelector(".js-cart-total-price");

    let totalCount = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((el) => {
        let price = el.querySelector("[data-price]").textContent;
        price = parseInt(price.replace(/\s+/g, ""), 10);
        const count = parseInt(
          el.querySelector(".js-current-items").textContent
        );
        totalCount = totalCount + price * count;
      });
    }
    cartTotalPrice.textContent = this.constructor.formatter.format(totalCount);
  }
}

export { Cart }

src\app\shop\frontend\static\js\core\startup.js