// Sample Product Data
const products = [
    
    { 
        id: 9, 
        name: "Watch", 
        category: "watches", 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/s/n/n/1-avm0031-americanviber-men-women-original-imahcndcj4zbh9yj.jpeg?q=70&crop=false", 
        link: "" ,
        isCombo: true
    },
    { 
        id: 8, 
        name: "Stylish Glasses", 
        category: "others", 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-sunglass/9/e/4/55-gk-biground-silver-gynk-original-imah89aesm4pg9rz.jpeg?q=70&crop=false", 
        link: "" ,
        isCombo: true
    },
    { 
        id: 7, 
        name: "Sweat Shirt", 
        category: "shirts", 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/s/x/9/l-sszip1-plain-skin-fashion-and-youth-original-imah542vygdd4juu.jpeg?q=70&crop=false", 
        link: "" ,
        isCombo: true
    },
    { 
        id: 6, 
        name: "Lee Cooper", 
        category: "watches", 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/t/m/h/-original-imahftq4tu6ewft2.jpeg?q=70&crop=false", 
        link: "https://fkrt.co/rmZMWb"
    },
    { 
        id: 5, 
        name: "Shirt", 
        category: "shirts", 
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30149421/2024/7/8/7305f9f3-5a26-40cd-80ea-f6cb09e6a3601720431638644CantabilMenOpaqueCheckedCasualShirt4.jpg", 
        link: "https://myntr.in/p8WCHF"
    },
    { 
        id: 4, 
        name: "Striped Shirt", 
        category: "shirts", 
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/MAY/7/YPZwCB9L_6ce665d1fdb343f388127e471c5bdb09.jpg", 
        link: "",
        isCombo: true 
    },
    { 
        id: 3, 
        name: "Sneakers", 
        category: "shoes", 
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/c/o/-original-imahgcstr7c9y6hh.jpeg?q=70&crop=false", 
        link: "", 
        isCombo: true 
    },
    { 
        id: 2, 
        name: "Casual Shirt", 
        category: "shirts", 
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/APRIL/30/WH0feuaa_d72aa9d526da417d8db14ebe0573a2db.jpg", 
        link: "https://myntr.in/4jP5Nv" 
    },
    
    { 
        id: 1, 
        name: "Checked Casual Shirt", 
        category: "shirts", 
        image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JANUARY/30/DlXJN34m_f0721222f4cd4ee9ba90b5a3942918e3.jpg", 
        link: "https://myntr.in/yPXgYo" 
    },

];

// Combo Products Data (Scalable)
const comboProducts = {
9: [
  {
    name: "Watch 1",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/s/n/n/1-avm0031-americanviber-men-women-original-imahcndcj4zbh9yj.jpeg?q=70&crop=false",
    link: "https://fkrt.co/cr2daQ"
  },
    {
    name: "Watch 2",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/d/d/a/1-csio-604-limestone-men-original-imahghchdfhpbbsh.jpeg?q=70&crop=false",
    link: "https://fkrt.co/i3O6g9"
  },
    {
    name: "Watch 3",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/p/g/d/1-pe-black-dm0011-americanviber-men-original-imahbybrthxfe7qe.jpeg?q=70&crop=false",
    link: "https://fkrt.co/y6Shzr"
  },
    {
    name: "Watch 4",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/c/1/h/1-csio-602-limestone-men-original-imahgg85rhabzzgz.jpeg?q=70&crop=false",
    link: "https://fkrt.co/ed7qOK"
  },
    {
    name: "Watch 5",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/4/6/f/1-seamaster-avm0032-americanviber-men-original-imahcqm8h6ghcvpy.jpeg?q=70&crop=false",
    link: "https://fkrt.co/L6IcAX"
  },
    {
    name: "Watch 6",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/w/q/e/drm0028-daniel-radcliffe-men-original-imah89kynr8dmaen.jpeg?q=70&crop=false",
    link: "https://fkrt.co/eyQOE5"
  },
    {
    name: "Watch 7",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/f/1/v/1-square-roman-figure-luxury-dial-analog-watch-for-men-s-original-imahy7azmzhdhupg.jpeg?q=70&crop=false",
    link: "https://fkrt.co/g2IaP9"
  },
    {
    name: "Watch 8",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/u/0/n/-original-imahfspud7ezmxau.jpeg?q=70&crop=false",
    link: "https://fkrt.co/3ODM2E"
  },
    {
    name: "Watch 9",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/s/f/v/1-ls3315-limestone-men-original-imahgde5agektyhs.jpeg?q=70&crop=false",
    link: "https://fkrt.co/93M57a"
  }
    
],
    8: [
  {
    name: "Glasses 1",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-sunglass/9/e/4/55-gk-biground-silver-gynk-original-imah89aesm4pg9rz.jpeg?q=70&crop=false",
    link: "https://fkrt.co/aJ5KuB"
  },
    {
    name: "Glasses 2",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/e/u/c/this-product-is-sold-as-free-size-by-the-brand-commando-57-original-imahdhpstv2chqvj.jpeg?q=70&crop=false",
    link: "https://fkrt.co/4YQFtN"
  },
    {
    name: "Glasses 3",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/s/m/i/medium-pathan-sunglass-16r-sunveil-original-imahgnbju6cazg3v.jpeg?q=70&crop=false",
    link: "https://fkrt.co/OpHymC"
  },
    {
    name: "Glasses 4",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/h/g/j/-original-imahg3f4xygdtmsz.jpeg?q=70&crop=false",
    link: "https://fkrt.co/4i5HGH"
  },
    {
    name: "Glasses 5",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/a/w/i/m-sunglasses-18-woggles-original-imahekdd8f3zqtzy.jpeg?q=70&crop=false",
    link: "https://fkrt.co/3FYLMY"
  },
    {
    name: "Glasses 6",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/l/a/w/54-138628-vincent-chase-original-imahyvspscfehren.jpeg?q=70&crop=false",
    link: "https://fkrt.co/bS8AkT"
  },
    {
    name: "Glasses 7",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/c/k/d/48-tak-bhai-842-black-burg-original-imahfp5rhqgmc5bc.jpeg?q=70&crop=false",
    link: "https://fkrt.co/8A91LK"
  },
    {
    name: "Glasses 8",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/z/s/8/55-35-hayden-haiza-original-imahfqn5yyubgpcv.jpeg?q=70&crop=false",
    link: "https://fkrt.co/otIw77"
  }
],
    
    7: [
  {
    name: "Shirt 1",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/s/x/9/l-sszip1-plain-skin-fashion-and-youth-original-imah542vygdd4juu.jpeg?q=70&crop=false",
    link: "https://fkrt.co/0uATM5"
  },
  {
    name: "Shirt 2",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/a/3/5/l-sszip1-plain-s-fashion-and-youth-original-imah542vxpkaa4ba.jpeg?q=70&crop=false",
    link: "https://fkrt.co/2pMkhk"
  },
  {
    name: "Shirt 3",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/7/6/n/s-sszip1-plain-black-fashion-and-youth-original-imah52fhz6fax55z.jpeg?q=70&crop=false",
    link: "https://fkrt.co/SMRz0j"
  },
  {
    name: "Shirt 4",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/s/u/7/m-sszip1-plain-maroon-fashion-and-youth-original-imah52g3vfr8xwtz.jpeg?q=70&crop=false",
    link: "https://fkrt.co/cClDq5"
  },
  {
    name: "Shirt 5",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/e/b/n/l-sszip21-plain-peach-fashion-and-youth-original-imahfdt48ftujb4s.jpeg?q=70&crop=false",
    link: "https://fkrt.co/GdWJov"
  },
    {
    name: "Shirt 6",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/d/s/d/xxl-sszip1-plain-navy-fashion-and-youth-original-imah52g56q8maxwg.jpeg?q=70&crop=false",
    link: "https://fkrt.co/ZuWRHs"
  },{
    name: "Shirt 7",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/o/1/0/l-sszip1-plain-dg-fashion-and-youth-original-imah542vj85bznwc.jpeg?q=70&crop=false",
    link: "https://fkrt.co/afghc4"
  },{
    name: "Shirt 8",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/q/u/t/xxl-sszip1-plain-beige-fashion-and-youth-original-imah52g54tqbjagt.jpeg?q=70&crop=false",
    link: "https://fkrt.co/aoMgnA"
  }
],
    3: [
  {
    name: "Shoe 1",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/c/o/-original-imahgcstr7c9y6hh.jpeg?q=70&crop=false",
    link: "http://bit.ly/48e06hf"
  },
  {
    name: "Shoe 2",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/y/v/4/-original-imahgcsvhcbqyr6y.jpeg?q=70&crop=false",
    link: "http://bit.ly/4mNHIzs"
  },
  {
    name: "Shoe 3",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/l/f/p/-original-imahgcsvkfjz8nxy.jpeg?q=70&crop=false",
    link: "http://bit.ly/4mLUfmQ"
  },
  {
    name: "Shoe 4",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/b/b/-original-imahgcstz6guamgu.jpeg?q=70&crop=false",
    link: "http://bit.ly/3WrzFgN"
  },
  {
    name: "Shoe 5",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/l/f/2/-original-imahgbrvwfjpg9fh.jpeg?q=70&crop=false",
    link: "http://bit.ly/3WjUBX0"
  }
],
4: [
  {
    name: "Shirt 1",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/MAY/7/XDhBEReQ_8ce024c24b054112852f9c9e25706a39.jpg",
    link: "http://bit.ly/434fclZ"
  },
  {
    name: "Shirt 2",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/MAY/7/iETIOqml_093de7982597463cb30609ae0c945f3c.jpg",
    link: "http://bit.ly/4o28Knx"
  },
 {
    name: "Shirt 3",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/33988086/2025/5/16/3da1f93d-3955-43f7-b3de-5f780e778a6a1747373637174-HERENOW-Men-Tartan-Checks-Casual-Shirt-8391747373636541-1.jpg",
    link: "http://bit.ly/4o6ozKg"
  },
 {
    name: "Shirt 4",
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/33203161/2025/3/20/47df1e5d-2cb3-45de-9050-a72cbfaa097c1742480051691-HERENOW-Men-Opaque-Striped-Casual-Shirt-5041742480051024-4.jpg",
    link: "http://bit.ly/4nCmCFs"
  }
],
/*-------------------------------------------------------------------------------------------------------------*/    
/*7: [
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
*/
};






// =====================
// Page Animation
// =====================
function animatePageTransition(callback) {
  const body = document.body;
  body.style.transition = "opacity 0.2s ease-out";
  body.style.opacity = 0;
  setTimeout(() => {
    callback();
    body.style.opacity = 1;
  }, 150);
}

// =====================
// Show/Hide Header
// =====================
function toggleHeaderVisibility(show) {
  const header = document.getElementById("site-header");
  const shopNowDiv = document.querySelector(".cta-btn")?.parentElement;
  if (header) header.style.display = show ? "block" : "none";
  if (shopNowDiv) shopNowDiv.style.display = show ? "block" : "none";
}

// =====================
// Render Products
// =====================
function renderProducts(list, hideHeader = false) {
  toggleHeaderVisibility(!hideHeader);
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  if (!list || list.length === 0) {
    container.innerHTML = `<p>No products found.</p>`;
    return;
  }

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      ${product.id ? `<span class="product-number">#${product.id}</span>` : ""}
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <p class="product-name">${product.name}</p>
      <button class="buy-btn">Buy Now</button>
    `;

    const image = card.querySelector(".product-image");
    const button = card.querySelector(".buy-btn");

    if (product.isCombo && comboProducts[product.id]) {
      const showCombo = () => {
        animatePageTransition(() => {
          renderProducts(comboProducts[product.id], true);
          history.pushState({ page: "combo", comboId: product.id }, "Combo", `#combo-${product.id}`);
        });
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

// =====================
// Filter by Category
// =====================
function filterByCategory(category) {
  if (category === "all") {
    animatePageTransition(() => {
      renderProducts(products);
      history.pushState({ page: "home" }, "Home", "#home");
    });
  } else {
    const filtered = products.filter(p => p.category === category);
    animatePageTransition(() => {
      renderProducts(filtered);
      history.pushState({ page: category }, category, `#${category}`);
    });
  }
}

// =====================
// Search Products
// =====================
function filterProducts() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchValue) || (p.id && p.id.toString().includes(searchValue))
  );
  animatePageTransition(() => renderProducts(filtered));
}

// =====================
// Home Page
// =====================
function showHomePage() {
  animatePageTransition(() => {
    renderProducts(products);
    document.getElementById("search").value = "";
    history.replaceState({ page: "home" }, "Home", "#home");
  });
}

// =====================
// Handle Browser Back/Forward
// =====================
window.onpopstate = function(event) {
  if (event.state) {
    if (event.state.page === "combo" && event.state.comboId) {
      renderProducts(comboProducts[event.state.comboId], true);
    } else if (event.state.page === "home") {
      showHomePage();
    } else {
      filterByCategory(event.state.page);
    }
  } else {
    showHomePage();
  }
};

// =====================
// Init
// =====================
window.onload = function() {
  history.replaceState({ page: "home" }, "Home", "#home");
  renderProducts(products);
  document.body.style.opacity = 1;
};







