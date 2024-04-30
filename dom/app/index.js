// ARCH GALLERY App🏰
const mySection = document.getElementById("articles-container");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const closeCartButton = document.getElementById("closeCart");
const toggleCartButton = document.getElementById("toggleCart");
let cart = [];

function addToCart(item) {
  // Verificando si el artículo ya está en el carrito
  const alreadyInCart = cart.some((cartItem) => cartItem.title === item.title);

  if (alreadyInCart) {
    alert("It is already in FAVS!");
  } else {
    cart.push(item);
    renderCart();
  }
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>No elegiste ningún favorito aún!</p>";
  } else {
    cartItems.innerHTML = cart
      .map(
        (item, index) => `
                          <div class="cart-item">
                            <img src="${item.imageUrl}" style="width: 400px; height: 200px;">
                            <button onclick="removeFromCart(${index})" 
                                    class="mb-4 px-6 bg-gray-800 remove-btn rounded font-mono" >
                              Remove
                            </button>
                          </div>
                         `
      )
      .join("");
  }

  localStorage.setItem("My Favorites", JSON.stringify(cart));
}

function removeFromCart(index) {
  cart.splice(index, 1); // splice(elimina el que quiero, cantidad a eliminar)
  renderCart();
}

myData.forEach((x) => {
  const myArticle = `
                      <article class="px-8 py-2 text-center border-b-4 border-cyan-800">
                        <h2 class="text-4xl font-mono">${x.title}</h2>
                        <p class="text-sm mb-2">${x.content}</p>
                        <img src="${x.imageUrl}" class="mb-2 rounded-lg border-2 border-cyan-800" />
                        <button class="py-2 px-6 font-bold rounded hover:bg-gray-800 like-btn">Like it</button>
                      </article>
                    `;

  mySection.innerHTML += myArticle;
});

// creo variable acá porque este button fue agreagado en la línea 48
// agregas like-btn en su "class" para manipularlo mejor
const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    addToCart(myData[index]);
  });
});

closeCartButton.addEventListener("click", function hideCart() {
  cartModal.classList.add("hidden");
});
toggleCartButton.addEventListener("click", function showCart() {
  cartModal.classList.remove("hidden");
});

// **onload or event load**
// Al hacer f5 me guarda todo en el carrito y en el Local
window.addEventListener("load", function () {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    renderCart();
  }
});
/* 
// Ejemplo SIN addEventListener()
window.onload = function () {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    renderCart();
  }
}; 
*/
