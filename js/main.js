"use strict";

// =========== Product functionality =========== //

/**
 * Array of product objects
 */
let products = [
 {
   model: 'MacBook Pro 13"',
   brand: "Apple",
   price: 11789,
   img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2020/5/pr_2020_5_5_10_48_41_58_00.jpg"
 },
 {
  model: 'IPad Pro 11"',
  brand: "Apple",
  price: 7200,
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2020/3/pr_2020_3_18_16_7_27_58_00.jpg"
},
{
  model: "Iphone 11 Pro",
  brand: "Apple",
  price: 5600,
  img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2019/9/pr_2019_9_11_9_21_31_289_00.jpg"
},
];

/**
 * Appending products to the DOM using a for-of loop
 */
function appendProducts(products) {
  let htmlTemplate = "";
  for (const product of products) {
    htmlTemplate += /*html*/`
  <article>
        <img src="${product.img}">
        <h3>${product.model}</h3>
        <h4>${product.brand}</h4>
        <h3>${product.price} dkk</h3>
      </article>
    `;
  }
  document.querySelector("#products-container").innerHTML = htmlTemplate;
}

appendProducts(products);

/**
 * Adding a new product to the Array of products
 */
function addNewProduct() {
  let brand = document.querySelector("#brand").value;
  let model = document.querySelector("#model").value;
  let price = document.querySelector("#price").value;
  let img = document.querySelector("#img").value;

  let newProduct = { brand, model, price, img};
  products.push(newProduct);
  
  appendProducts(products);
  navigateTo("products");
}

/**
 * Searching for products matching the input value
 */
function search(value) {
  console.log(value);
  let filteredProducts = [];
  for (let product of products) {
    let model = product.model.toLowerCase();
    let brand = product.brand.toLowerCase();
    if (model.includes(value.toLowerCase()) || brand.includes(value.toLowerCase())) {
      filteredProducts.push(product);
    }
  }

  appendProducts(filteredProducts);
}