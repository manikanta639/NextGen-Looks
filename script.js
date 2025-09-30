// Sample Product Data
const products = [
    { 
        id: 1, 
        name: "Casual Shirt", 
        category: "shirts", 
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JANUARY/30/DlXJN34m_f0721222f4cd4ee9ba90b5a3942918e3.jpg", 
        link: "https://myntr.in/UaifTF" 
    },
    { 
        id: 2, 
        name: "Checked Casual Shirt", 
        category: "shirts", 
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/APRIL/30/WH0feuaa_d72aa9d526da417d8db14ebe0573a2db.jpg", 
        link: "https://myntr.in/ZejiPP" 
    },
    { 
        id: 5, 
        name: "Gift Combo Pack", 
        category: "combos", 
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
        link: "", 
        isCombo: true 
    },
 /*   { 
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
        link: "", 
        isCombo: true 
    },
    { 
        id: 6, 
        name: "Misc Item", 
        category: "others", 
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    }*/
];

// Combo Expansion Products (16+ items)
/*const comboProducts = [
    { 
        id: 101, 
        name: "Combo Shirt + Watch", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
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
        name: "Combo Hoodie + Sneakers", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 105, 
        name: "Combo Cap + Sunglasses", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 106, 
        name: "Combo Bag + Shoes", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 107, 
        name: "Combo Watch + Bracelet", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 108, 
        name: "Combo Socks + Shoes", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 109, 
        name: "Combo Belt + Pants", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 110, 
        name: "Combo Shirt + Tie", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 111, 
        name: "Combo Shorts + Cap", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 112, 
        name: "Combo Jacket + Scarf", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 113, 
        name: "Combo Shirt + Jacket", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 114, 
        name: "Combo Sneakers + Socks", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 115, 
        name: "Combo Hat + Sunglasses", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    },
    { 
        id: 116, 
        name: "Combo Watch + Shoes", 
        category: "combos-detail", 
        image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg", 
        link: "https://amzn.to/4nRHt7w" 
    }
];
*/


// Render Products Dynamically
function renderProducts(list) {
    const container = document.getElementById("product-container");

    // Clear container fully before rendering new products
    container.innerHTML = "";

    // Scroll container to top (optional)
    container.scrollTop = 0;

    if (list.length === 0) {
        container.innerHTML = `<p>No products found.</p>`;
        return;
    }

    list.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <span class="product-number">#${product.id}</span>
            <img src="${product.image}" alt="${product.name}" class="product-image" />
            <p class="product-name">${product.name}</p>
            <button class="buy-btn">Buy Now</button>
        `;

        const image = card.querySelector(".product-image");
        const button = card.querySelector(".buy-btn");

        // Click event to open combo products if combo, else open link
        if (product.isCombo) {
            image.addEventListener("click", () => {
                renderProducts(comboProducts);
                history.pushState({page: "combo"}, "Combo Products", "#combo");
            });
            button.addEventListener("click", () => {
                renderProducts(comboProducts);
                history.pushState({page: "combo"}, "Combo Products", "#combo");
            });
        } else if (product.link) {
            image.addEventListener("click", () => {
                window.open(product.link, "_blank");
            });
            button.addEventListener("click", () => {
                window.open(product.link, "_blank");
            });
        }

        container.appendChild(card);
    });
}

// Filter by Category
function filterByCategory(category) {
    if (category === "all") {
        renderProducts(products);
        history.pushState({page: "home"}, "Home", "#home");
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
        history.pushState({page: category}, category.charAt(0).toUpperCase() + category.slice(1), `#${category}`);
    }
}

// Search Function
function filterProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchValue) ||
        p.id.toString().includes(searchValue)
    );
    renderProducts(filtered);
}

// Show Home Page
function showHomePage() {
    renderProducts(products);
    document.getElementById("search").value = "";
    history.replaceState({page: "home"}, "Home", "#home");
}

// Handle browser back/forward
window.onpopstate = function(event) {
    if (event.state) {
        if (event.state.page === "combo") {
            renderProducts(comboProducts);
        } else if (event.state.page === "home" || event.state.page === "all") {
            showHomePage();
        } else {
            filterByCategory(event.state.page);
        }
    } else {
        showHomePage();
    }
};

// Initialize Page
window.onload = function() {
    history.replaceState({page: "home"}, "Home", "#home");
    renderProducts(products);
};



