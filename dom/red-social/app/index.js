// ARCH GALLERY App🏰
const mySection = document.getElementById("articles-container");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const closeCartButton = document.getElementById("closeCart");
const toggleCartButton = document.getElementById("toggleCart");
let cart = [];

function addToCart(item) {
  const alreadyIncart = cart.some((cartItem) => cartItem.title === item.title);
  if (alreadyIncart) {
    alert("it is already in FAVS!");
  } else {
    cart.push(item);
    renderCart();
  }
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>empty favorites</p>";
  } else {
    cartItems.innerHTML = cart
      .map(
        (item, index) => `
        <article>
            <img src="${item.imageUrl}" alt="${item.title}" style="width: 400px; heigh: 200px">
            <button onclick="removeFromCart(${index})" >
                remove
            </button>
        </div>
    `
      )
      .join("");
  }
  localStorage.setItem("my favorites", JSON.stringify(cart));
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

myData.forEach((x) => {
  const myArticle = `
        <article class="px-8 py-2 text-center border-b-4 border-cyan-800">
            <h2 class="text-4xl mb-2">${x.title}</h2>
             <p class="text-sm mb-2">${x.content}</p>
            <img src="${x.imageUrl}" alt="${x.title}" class="mb-2 rounded-lg border-2 border-cyan-800">
            <button class="py-2 px-6 font-bold rounded hover:bg-gray-800 like-btn" >
                like it
            </button>
        </article>
    `;
  mySection.innerHTML += myArticle;
});

const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    addToCart(myData[index]);
  });
});

closeCartButton.addEventListener("click", function hideCart() {
  cartModal.classList.toggle("hidden");
});

toggleCartButton.addEventListener("click", function hideCart() {
  cartModal.classList.toggle("hidden");
});

window.addEventListener("load", () => {
  const savedCart = localStorage.getItem("my favorites");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    renderCart();
  }
});
