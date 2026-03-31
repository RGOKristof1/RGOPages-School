const basket = document.getElementById('basket');
const services = document.getElementById('services');
const contact = document.getElementById('contact');
const products = document.getElementById('products');
const section = document.querySelector('section');
const itemCount = document.getElementById('itemCount');
const basketList = document.getElementById('basketList');
const basketLink = document.getElementById('basketLink');
const basketText = document.getElementById('basketText');
const emptyBtn = document.getElementById('emptyBtn');
const emptyBtnDiv = document.getElementById('emptyBtnDiv');
let count = 0;
window.addEventListener('load', () =>{
    basket.remove();
    services.remove();
    contact.remove();
    itemCount.remove();
    emptyBtn.remove();
});

function displayProducts(){
    basket.remove();
    services.remove();
    contact.remove();
    section.append(products);
}

function displayBasket(){
   document.body.append(basket);
   products.remove();
   services.remove();
   contact.remove();
    
}

function displayContact() {
    document.body.append(contact);
    products.remove();
    basket.remove();
    services.remove();
}

function displayServices() {
    document.body.append(services);
    products.remove();
    basket.remove();
    contact.remove();
}

function addToBasket(item){
    count++;
    itemCount.textContent = `${count}`;
    basketLink.append(itemCount);
    basketText.remove();
    const li = document.createElement('li');
    li.setAttribute("class","basketItem");
    if (item === "fejhallgato") {
        li.textContent = "Fejhallgató"
    }
    if (item === "billentyuzet") {
        li.textContent = "Billentyűzet"
    }
    if (item === "eger") {
        li.textContent = "Egér"
    }
    if (item === "laptop") {
        li.textContent = "Laptop"
    }
    basketList.append(li);
    emptyBtnDiv.append(emptyBtn);
}

//1. feladat:

document.getElementById("shopTitle").innerText = "Tech Webshop"

//2. feladat:

document.getElementsByClassName("shopDescription")[0].innerText = "Kiváló minőség, kedvező árak!"

//3. feladat:

document.getElementsByClassName("stockinfo")[0].innerText = "Nincs készleten"
document.getElementsByClassName("stockinfo")[0].style.color = "gray"
document.getElementById("headphoneBtn").disabled = true

//4. feladat:

document.getElementsByClassName("productCard")[1].style.border = "solid 2px red"
document.getElementsByClassName("price")[1].innerText = "14.400 Ft (-20%)"
document.getElementsByClassName("price")[1].style.color = "red"
document.getElementsByClassName("price")[1].style.fontWeight = "bold"

//5. feladat:

document.getElementById("products").innerHTML += `
<div class="productCard">
  <h3>Laptop</h3>
  <img class="productimg img-fluid"src="./images/laptop.jpg"alt="Laptop"/>
  <p class="price">330.000 Ft</p>
  <p class="stockinfo" style="color: blue;"><b>Újonnan a készleten!</b></p>
  <button id="headphoneBtn" onclick="addToBasket('laptop')" class="btn btn-success">Kosárba 🛒</button>
</div> 
`;

//6. feladat:

document.getElementById("serviceList").innerHTML += `
<li class="serviceItem">Teljes körű garancia ügyintézés!</li>
`

//7. feladat:
function emptyBasket(){
  count = 0
  document.getElementById("basketList").innerHTML = ""
  document.getElementById("emptyBtnDiv").remove()
  document.getElementById("itemCount").remove()
  document.getElementById("basketContent").innerHTML += `<h3 id="basketText">A kosár üres.</h3>`
}