// ============================
// Sample Product Data
// ============================
const products = [
    { 
        id: 1, 
        name: "Casual Shirt", 
        category: "shirts", 
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/APRIL/30/WH0feuaa_d72aa9d526da417d8db14ebe0573a2db.jpg", 
        link: "https://myntr.in/cfaFin" 
    },
    /*{ 
        id: 2, 
        name: "Formal Pants", 
        category: "pants", 
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 3, 
        name: "Running Shoes", 
        category: "shoes", 
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 4, 
        name: "Smart Watch", 
        category: "watches", 
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 5, 
        name: "Gift Combo Pack", 
        category: "combos", 
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
        link: "", isCombo: true 
    },
    { 
        id: 6, 
        name: "Misc Item", 
        category: "others", 
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    }
];

// ============================
// Combo Expansion Products (4 examples)
// ============================
const comboProducts = [
    { 
        id: 101, 
        name: "Combo Shirt + Watch", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41g1vV8pXlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 102, 
        name: "Combo Pants + Shoes", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41TCyNn0GDL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 103, 
        name: "Combo Jacket + Shoes", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 104, 
        name: "Combo T-Shirt + Watch", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41Z5CjY+VUL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    }*/
];

// ============================
// Render Products
// ============================
function renderProducts(list) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = `<p>No products found.</p>`;
        return;
    }

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <span class="product-number">#${product.id}</span>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <p class="product-name">${product.name}</p>
            <button class="buy-btn">Buy Now</button>
        `;

        // Open product link when image is clicked
        const image = card.querySelector(".product-image");
        if (product.link) {
            image.addEventListener("click", () => {
                window.open(product.link, "_blank");
            });
        }

        // Open product link when Buy Now button is clicked
        const button = card.querySelector(".buy-btn");
        if (product.link) {
            button.addEventListener("click", () => {
                window.open(product.link, "_blank");
            });
        }

        // If it's a combo product, clicking card shows combo list
        if (product.isCombo) {
            card.addEventListener("click", (e) => {
                // prevent combo card click from triggering image/button link
                if (!e.target.classList.contains("product-image") && !e.target.classList.contains("buy-btn")) {
                    renderProducts(comboProducts);
                }
            });
        }

        container.appendChild(card);
    });
}

// ============================
// Filter by Category
// ============================
function filterByCategory(category) {
    if (category === "all") {
        renderProducts(products);
    } else {
        renderProducts(products.filter(p => p.category === category));
    }
}

// ============================
// Search Function
// ============================
function filterProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchValue) ||
        p.id.toString().includes(searchValue)
    );
    renderProducts(filtered);
}

// ============================
// Initial Render
// ============================
renderProducts(products);
