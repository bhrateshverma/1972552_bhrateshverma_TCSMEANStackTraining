var map = new Map([
    ["superstarBought", 59],
    ["airforceBought", 79],
    ["airmaxBought", 89],
    ["vansBought", 69],
    ["sandalsBought", 39]
]);
var prodNameMap = new Map([
    ["superstarBought", "Adidas Superstar"],
    ["airforceBought", "Nike Air Force"],
    ["airmaxBought", "Nike Air Max"],
    ["vansBought", "Vans Classic Checkered"],
    ["sandalsBought", "Vans Sandals"]
]);
window.onload = function () {
    var storedItems = JSON.parse(localStorage.getItem("items"));
    var count = 1;
    var total = 0;
    if (storedItems && storedItems.length > 0) {
        for (var i = 0; i < storedItems.length; i += 2) {
            var quantity = storedItems[i + 1];
            if (quantity != 0) {
                var num = count;
                var name_1 = storedItems[i];
                var price = map.get(storedItems[i]);
                insertRecord(num, name_1, String(price), String(quantity));
                count++;
                total += quantity * price;
            }
        }
    }
    document.getElementById("total").innerHTML = '$${total}';
};
function insertRecord(num, name, price, quantity) {
    var row = "<tr>\n    <th scope=\"row\">" + num + "</th>\n    <td>" + prodNameMap.get(name) + "</td>\n    <td>$" + price + "</td>\n    <td>" + quantity + "</td>\n  </tr>";
    document.getElementById("table").innerHTML += row;
}
