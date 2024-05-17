let zapatillasData = [
    {
        "name": "Jordan AF1",
        "price": 199.990,
        "image": "img/img1.jpeg",
        "description": "Zapatilla hombre",
        "brand": "Jordan"
    },
    {
        "name": "Nike Blazer Mid '77 Vintage",
        "price": 112.990,
        "image": "img/img2.jpeg",
        "description": "Zapatillas Hombre",
        "brand": "Nike"
    },
    {
        "name": "Jordan air 1 mid",
        "price": 12.9990,
        "image": "img/img3.jpeg",
        "description": "Zapatillas hombre",
        "brand": "Jordan"
    },
    {
        "name": "Jordan Max aura 5",
        "price": 13.4990,
        "image": "img/img4.jpeg",
        "description": "Zapatillas Hombre",
        "brand": "Jordan"
    },
    {
        "name": "Jordan Spizike Low",
        "price": 16.2990,
        "image": "img/img5.jpeg",
        "description": "Zapatilla hombre",
        "brand": "Jordan"
    },
    {
        "name": "Jordan Stay Loyal 3",
        "price": 99.990,
        "image": "img/img6.jpeg",
        "description": "Zapatilla hombre",
        "brand": "Jordan"
    },
    {
        "name": "Nike Dunk Low SE",
        "price": 126.990,
        "image": "img/img7.jpeg",
        "description": "Zapatilla hombre",
        "brand": "Nike"
    },
    {
        "name": "Nike Dunk Low Retro NBHD",
        "price": 126.990,
        "image": "img/img8.jpeg",
        "description": "Zapatilla hombre",
        "brand": "Nike"
    },
    {
        "name": "Nike Blazer Mid Pro GT",
        "price": 106.990,
        "image": "img/img9.jpeg",
        "description": "Zapatilla hombre",
        "brand": "Nike"
    }
];

function agregarAlCarrito(index) {
    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];
    cart.push(zapatillasData[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
    mostrarCarrito();
}

function mostrarCarrito() {
    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.className = "cart-item";

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;
            img.style.width = "150px";

            const detailsDiv = document.createElement("div");
            detailsDiv.className = "cart-item-details";

            const name = document.createElement("p");
            name.textContent = item.name;
            name.style.marginLeft = "10px";

            const price = document.createElement("p");
            price.textContent = `$${item.price}`;
            price.style.marginLeft = "10px";

            const removeBtn = document.createElement("button");
            removeBtn.className = "remove-btn";
            removeBtn.textContent = "Eliminar";
            removeBtn.style.marginLeft = "20px";
            removeBtn.onclick = () => eliminarDelCarrito(index);
            removeBtn.onmouseover = () => removeBtn.style.backgroundColor = "gray";
            removeBtn.onmouseout = () => removeBtn.style.backgroundColor = "";

            detailsDiv.appendChild(name);
            detailsDiv.appendChild(price);

            div.appendChild(img);
            div.appendChild(detailsDiv);
            div.appendChild(removeBtn);
            cartList.appendChild(div);
        });
    }
}

function eliminarDelCarrito(index) {
    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    mostrarCarrito();
}

window.onload = mostrarCarrito;
