let cart:number = 0;
let superstar:number = 0;
let airforce:number = 0;
let airmax:number = 0;
let vansclassic:number = 0;
let vansslippers:number = 0;
let items:any[] = [];
window.onload = function () {
    let storedItems = JSON.parse(localStorage.getItem("items"));
    cart = JSON.parse(localStorage.getItem("cart")) == null ? 0 : JSON.parse(localStorage.getItem("cart"));
    if (storedItems && storedItems.length > 0) {
        items = storedItems;
    }
    else {
        items = [];
    }
    innerHTMLHelper("cartQuant", String(cart));
    for (let i = 0; i < items.length; i += 2) {
        innerHTMLHelper(items[i], "Items Added = " + items[i + 1]);
        if (items[i] == "superstarBought") superstar = items[i + 1];
        else if (items[i] == "airforceBought") airforce = items[i + 1];
        else if (items[i] == "airmaxBought") airmax = items[i + 1];
        else if (items[i] == "vansBought") vansclassic = items[i + 1];
        else if (items[i] == "sandalsBought") vansslippers = items[i + 1];
    }
};
document.getElementById("superstarBuy").onclick = function () {
    cart++;
    superstar++;
    let index = items.indexOf("superstarBought");
    if (index != -1) {
        items[index + 1] = superstar;
    }
    else {
        items.push("superstarBought");
        items.push(superstar);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("superstarBought", "Items Added = " + superstar);
};
document.getElementById("superstarRemove").onclick = function () {
    if (superstar > 0) {
        cart--;
        superstar--;
        let index = items.indexOf("superstarBought");
        items[index + 1] = superstar;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("superstarBought", "Items Added = " + superstar);
};
document.getElementById("superstarRemoveAll").onclick = function () {
    cart -= superstar;
    superstar = 0;
    let index = items.indexOf("superstarBought");
    if (index != -1) {
        items[index + 1] = superstar;
    }
    else {
        items.push("superstarBought");
        items.push(superstar);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("superstarBought", "Items Added = " + superstar);
};
document.getElementById("airforceBuy").onclick = function () {
    cart++;
    airforce++;
    let index = items.indexOf("airforceBought");
    if (index != -1) {
        items[index + 1] = airforce;
    }
    else {
        items.push("airforceBought");
        items.push(airforce);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("airforceBought", "Items Added = " + airforce);
};
document.getElementById("airforceRemove").onclick = function () {
    if (airforce > 0) {
        cart--;
        airforce--;
        let index = items.indexOf("airforceBought");
        items[index + 1] = airforce;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("airforceBought", "Items Added = " + airforce);
};
document.getElementById("airforceRemoveAll").onclick = function () {
    cart -= airforce;
    airforce = 0;
    let index = items.indexOf("airforceBought");
    if (index != -1) {
        items[index + 1] = airforce;
    }
    else {
        items.push("airforceBought");
        items.push(airforce);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("airforceBought", "Items Added = " + airforce);
};
document.getElementById("airmaxBuy").onclick = function () {
    cart++;
    airmax++;
    let index = items.indexOf("airmaxBought");
    if (index != -1) {
        items[index + 1] = airmax;
    }
    else {
        items.push("airmaxBought");
        items.push(airmax);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("airmaxBought", "Items Added = " + airmax);
};
document.getElementById("airmaxRemove").onclick = function () {
    if (airmax > 0) {
        cart--;
        airmax--;
        let index = items.indexOf("airmaxBought");
        items[index + 1] = airmax;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("airmaxBought", "Items Added = " + airmax);
};
document.getElementById("airmaxRemoveAll").onclick = function () {
    cart -= airmax;
    airmax = 0;
    let index = items.indexOf("airmaxBought");
    if (index != -1) {
        items[index + 1] = airmax;
    }
    else {
        items.push("airmaxBought");
        items.push(airmax);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("airmaxBought", "Items Added = " + airmax);
};
document.getElementById("vansBuy").onclick = function () {
    cart++;
    vansclassic++;
    let index = items.indexOf("vansBought");
    if (index != -1) {
        items[index + 1] = vansclassic;
    }
    else {
        items.push("vansBought");
        items.push(vansclassic);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("vansBought", "Items Added = " + vansclassic);
};
document.getElementById("vansRemove").onclick = function () {
    if (vansclassic > 0) {
        cart--;
        vansclassic--;
        let index = items.indexOf("vansBought");
        items[index + 1] = vansclassic;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("vansBought", "Items Added = " + vansclassic);
};
document.getElementById("vansRemoveAll").onclick = function () {
    cart -= vansclassic;
    vansclassic = 0;
    let index = items.indexOf("vansBought");
    if (index != -1) {
        items[index + 1] = vansclassic;
    }
    else {
        items.push("vansBought");
        items.push(vansclassic);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("vansBought", "Items Added = " + vansclassic);
};
document.getElementById("sandalsBuy").onclick = function () {
    cart++;
    vansslippers++;
    let index = items.indexOf("sandalsBought");
    if (index != -1) {
        items[index + 1] = vansslippers;
    }
    else {
        items.push("sandalsBought");
        items.push(vansslippers);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("sandalsBought", "Items Added = " + vansslippers);
};
document.getElementById("sandalsRemove").onclick = function () {
    if (vansslippers > 0) {
        cart--;
        vansslippers--;
        let index = items.indexOf("sandalsBought");
        items[index + 1] = vansslippers;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("sandalsBought", "Items Added = " + vansslippers);
};
document.getElementById("sandalsRemoveAll").onclick = function () {
    cart -= vansslippers;
    vansslippers = 0;
    let index = items.indexOf("sandalsBought");
    if (index != -1) {
        items[index + 1] = vansslippers;
    }
    else {
        items.push("sandalsBought");
        items.push(vansslippers);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartQuant", String(cart));
    innerHTMLHelper("sandalsBought", "Items Added = " + vansslippers);
};
function innerHTMLHelper(location:string, input:string) {
    document.getElementById(location).innerHTML = input;
}