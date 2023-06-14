"use strict";
// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
// 2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

let productList = [
  {
    name: "æble",
    price: 50,
    inStock: true,
  },
  {
    name: "ananas",
    price: 50,
    inStock: true,
  },
  {
    name: "citron",
    price: 50,
    inStock: false,
  },
];

window.addEventListener("load", initApp);

function initApp(params) {
    document.querySelector("#create-form").addEventListener("submit", createProduct)
    sortByBoolean();
    showProducts();
}

function showProducts(params) {
    document.querySelector("#list-container").innerHTML = "";

    for (const product of productList) {
        if (product.inStock === true) {
            showProduct(product);
        }
    }
}
function showProduct(product) {
const myHTML = 
`
<li> ${product.name}</li>
`
document.querySelector("#list-container").insertAdjacentHTML("beforeend", myHTML)
}

function createProduct(event) {
    event.preventDefault();
    const form = event.target;

    const newProduct = {
        name: form.name.value,
        price: Number(form.price.value),
        // inStock: true      virker ikke
    }
    console.log("virker lortet?", newProduct);
    productList.push(newProduct);
    showProducts();
}

function sortByBoolean(params) {
    productList = productList.sort((productA, productB) => productA.name.localeCompare(productB.name))
}