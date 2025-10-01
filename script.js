// Sample Product Data
const products = [
    { 
        id: 3, 
        name: "Snickers", 
        category: "combos", 
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
        link: "", 
        isCombo: true 
    },
    { 
        id: 2, 
        name: "Casual Shirt", 
        category: "shirts", 
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/APRIL/30/WH0feuaa_d72aa9d526da417d8db14ebe0573a2db.jpg", 
        link: "https://myntr.in/ZejiPP" 
    },
    
    { 
        id: 1, 
        name: "Checked Casual Shirt", 
        category: "shirts", 
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JANUARY/30/DlXJN34m_f0721222f4cd4ee9ba90b5a3942918e3.jpg", 
        link: "https://myntr.in/UaifTF" 
    },

{
  id: 31,
  name: "Formal Pants",
  category: "pants",
  image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
  link: "https://amzn.to/4nRHt7w"
},
{
  id: 41,
  name: "Running Shoes",
  category: "shoes",
  image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
  link: "https://amzn.to/4nRHt7w"
},
{
  id: 51,
  name: "Gift Combo Pack",
  category: "combos",
  image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
  isCombo: true
},
{
  id: 61,
  name: "Gift Combo Pack 2",
  category: "combos",
  image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
  isCombo: true
},
{
  id: 71,
  name: "Gift Combo Pack 3",
  category: "combos",
  image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
  isCombo: true
},
{
  id: 81,
  name: "Smart Watch",
  category: "watches",
  image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
  link: "https://amzn.to/4nRHt7w"
},
{
  id: 91,
  name: "Gift Combo Pack 3",
  category: "combos",
  image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
  isCombo: true
}

];

// Combo Products Data (Scalable)
const comboProducts = {
3: [
  {
    id: 101,
    name: "Shoe 1",
    image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
    link: "https://amzn.to/4nRHt7w"
  },
  {
    id: 102,
    name: "Shoe 2",
    image: "https://m.media-amazon.com/images/I/41TCyNn0GDL._SX342_SY445_.jpg",
    link: "https://amzn.to/4nRHt7w"
  }
],
6: [
  {
    id: 201,
    name: "Shoe 3",
    image: "https://m.media-amazon.com/images/I/41hTdrqfWlL._SX342_SY445_.jpg",
    link: "https://amzn.to/4nRHt7w"
  },
  {
    id: 202,
    name: "Shoe 4",
    image: "https://m.media-amazon.com/images/I/41fheRrR0GL._SX342_SY445_.jpg",
    link: "https://amzn.to/4nRHt7w"
  },
  {
    id: 203,
    name: "Shoe 5",
    image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
    link: "https://amzn.to/4nRHt7w"
  },
  {
    id: 202,
    name: "Shoe 6",
    image: "https://m.media-amazon.com/images/I/41fheRrR0GL._SX342_SY445_.jpg",
    link: "https://amzn.to/4nRHt7w"
  },
  {
    id: 202,
    name: "Shoe 7",
    image: "https://m.media-amazon.com/images/I/41fheRrR0GL._SX342_SY445_.jpg",
    link: "https://amzn.to/4nRHt7w"
  },
  {
    id: 202,
    name: "Shoe 8",
    image: "https://m.media-amazon.com/images/I/41fheRrR0GL._SX342_SY445_.jpg",
    link: "https://amzn.to/4nRHt7w"
  }
],
/*-------------------------------------------------------------------------------------------------------------*/    
7: [
  {
    id: 301,
    name: "Combo Hat + Shirt",
    image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
    link: "https://amzn.to/4nRHt7w"
  },
  {
    id: 302,
    name: "Combo Belt + Pants",
    image: "https://m.media-amazon.com/images/I/41TCyNn0GDL._SX342_SY445_.jpg",
    link: "https://amzn.to/4nRHt7w"
  }
],
9: [
  {
    id: 301,
    name: "Combo Hat + Shirt",
    image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
    link: "https://amzn.to/4nRHt7w"
  },
  {
    id: 302,
    name: "Combo Belt + Pants",
    image: "https://m.media-amazon.com/images/I/41TCyNn0GDL._SX342_SY445_.jpg",
    link: "https://amzn.to/4nRHt7w"
  }
]

};

// Render Products (General)
function renderProducts(list) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    container.scrollTop = 0;

    if (!list || list.length === 0) {
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

        // If combo, render its products on click
        if (product.isCombo && comboProducts[product.id]) {
            const showCombo = () => {
                renderProducts(comboProducts[product.id]);
                history.pushState({ page: "combo", comboId: product.id }, "Combo Products", `#combo-${product.id}`);
            };
            image.addEventListener("click", showCombo);
            button.addEventListener("click", showCombo);
        } else if (product.link) {
            const openLink = () => window.open(product.link, "_blank");
            image.addEventListener("click", openLink);
            button.addEventListener("click", openLink);
        }

        container.appendChild(card);
    });
}

// Filter by Category
function filterByCategory(category) {
    if (category === "all") {
        renderProducts(products);
        history.pushState({ page: "home" }, "Home", "#home");
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
        history.pushState({ page: category }, category.charAt(0).toUpperCase() + category.slice(1), `#${category}`);
    }
}

// Search Products
function filterProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchValue) || p.id.toString().includes(searchValue)
    );
    renderProducts(filtered);
}

// Show Home Page
function showHomePage() {
    renderProducts(products);
    document.getElementById("search").value = "";
    history.replaceState({ page: "home" }, "Home", "#home");
}

// Handle browser back/forward
window.onpopstate = function(event) {
    if (event.state) {
        if (event.state.page === "combo" && event.state.comboId) {
            renderProducts(comboProducts[event.state.comboId]);
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
    history.replaceState({ page: "home" }, "Home", "#home");
    renderProducts(products);
};

 


