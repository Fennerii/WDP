//request
fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")

.then(response => response.json())
//.then(data => console.log(data))
.catch(error => console.log(error))


.then(data => {
    let itemSearch = document.getElementById("item")
    let items = data.filter(item => item.name.includes(itemSearch))
        .map(item => ({
        itemName : item.name,
        itemPrice : item.price
    }))
    let ulSection = document.getElementById("itemList")
    items.forEach(item => {
        let li = document.createElement("li")
        li.innerText = `${item.itemName} is ${item.itemPrice}`
        ulSection.appendChild(li)
    })})

    document.getElementById("value")
