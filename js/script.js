// index------------------------------------------------------------------------
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name, price, image});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

document.querySelectorAll(".btn-buy").forEach((button) => {
    button.addEventListener("click", () => {
        let card = button.closest(".featured-product, .product-card");
        let name = card.querySelector("h5").innerText;
        let price = parseFloat(card.querySelector("p").innerText.replace("$",""));
        let image = card.querySelector("img").getAttribute("src");
        addToCart(name, price, image);
    });
});

// Simple Slider
let slides = document.querySelectorAll('.slide');
let current = 0;
setInterval(()=>{
slides[current].classList.remove('active');
current = (current+1)%slides.length;
slides[current].classList.add('active');
},3000);



// cart-------------------------------------------------------------------------
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let total = 0;
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        total += item.price;
        cartContainer.innerHTML += `
        <div class="cart-item d-flex align-items-center">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h5>${item.name}</h5>
                <p>$${item.price}</p>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
            </div>
        </div>`;
    });
    document.getElementById("cart-total").innerText = total.toFixed(2);
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

window.onload = loadCart;


// products-------------------------------------------------------------------
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({name, price, image});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

document.querySelectorAll(".btn-buy").forEach((button) => {
    button.addEventListener("click", () => {
        let card = button.closest(".featured-product, .product-card");
        let name = card.querySelector("h5").innerText;
        let price = parseFloat(card.querySelector("p").innerText.replace("$",""));
        let image = card.querySelector("img").getAttribute("src");
        addToCart(name, price, image);
    });
});


// login-------------------------------------------------------------------------
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginTab.addEventListener("click", ()=>{
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.style.display="block";
  registerForm.style.display="none";
});

registerTab.addEventListener("click", ()=>{
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.style.display="block";
  loginForm.style.display="none";
});

function validateLogin(){
  const email = document.getElementById("login-email").value.trim();
  const pass = document.getElementById("login-password").value.trim();
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email || !pass){ alert("Please fill in all fields."); return; }
  if(!pattern.test(email)){ alert("Enter a valid email."); return; }
  if(pass.length<6){ alert("Password must be at least 6 characters."); return; }
  alert("Login successful!");
}

function validateRegister(){
  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const pass = document.getElementById("reg-password").value.trim();
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!name || !email || !pass){ alert("Please fill in all fields."); return; }
  if(!pattern.test(email)){ alert("Enter a valid email."); return; }
  if(pass.length<6){ alert("Password must be at least 6 characters."); return; }
  alert("Registration successful!");
}


// contact-----------------------------------------------------------------------
function validateContact(){
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!name || !email || !message){ alert('Please fill in all fields.'); return false;}
if(!pattern.test(email)){ alert('Enter a valid email.'); return false;}
alert('Message sent successfully!');
return false;
}
