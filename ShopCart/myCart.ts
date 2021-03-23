let map = new Map([
    ["superstarBought",59],
    ["airforceBought",79],
    ["airmaxBought",89],
    ["vansBought",69],
    ["sandalsBought",39]
])

let prodNameMap = new Map([
    ["superstarBought","Adidas Superstar"],
    ["airforceBought","Nike Air Force"],
    ["airmaxBought","Nike Air Max"],
    ["vansBought","Vans Classic Checkered"],
    ["sandalsBought","Vans Sandals"]
])

window.onload = function(){
    let storedItems = JSON.parse(localStorage.getItem("items"))
    let count: number = 1
    let total: number = 0
    if(storedItems && storedItems.length>0){
        for(let i = 0; i<storedItems.length; i+=2) {
            let quantity = storedItems[i+1]
            if(quantity !=0){
                let num = count
                let name = storedItems[i]
                let price = map.get(storedItems[i])
                insertRecord(num, name, String(price), String(quantity))
                count++
                total+=quantity*price
            }
        }
    }
    document.getElementById("total").innerHTML = '$${total}'
}
function insertRecord(num:number, name:string, price:string, quantity:string): void{
    let row = `<tr>
    <th scope=\"row\">${num}</th>
    <td>${prodNameMap.get(name)}</td>
    <td>$${price}</td>
    <td>${quantity}</td>
  </tr>`

    document.getElementById("table").innerHTML += row
}