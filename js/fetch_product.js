//const product = {};
//Este fetch es funcional

fetch ('./json/productos.json') 

    .then(response => response.json())
    .then(data => datos(data))
    .catch(err => console.log('error', err))

//const mostrarData = (data) => {
//    console.log(data)
//}
function datos(data) {
    console.log(data)
    divRes = document.querySelector("#product");
    data.TotalNatural.map(item =>{
        divItem = document.createElement('div')
        divItem.classList.add('content-product-tn')
        divItem.innerHTML= `
        <div class="cont-img-product-tn">
            <img id="imagen" src="${item.image}">
        </div>
        <div class="cont-inf-product-tn">
            <h2 id="marca">${item.marca}</h2>
            <span id="idProducto">${item.id}</span>
            <ul>
                <li id="model">${item.modelo}</li>
                <li id="price">${item.precio}</li>
                <li id="color">${item.color}</li>
                <li><button class="btnAdd" onclick="addCart();">Add</button></li>
            </ul>
        </div>
        `
        divRes.appendChild(divItem);
    })

    divResp = document.querySelector("#product");
    data.BioActive.map(item =>{
        divItem = document.createElement('div')
        divItem.classList.add('content-product-bio')
        divItem.innerHTML= `
        <div class="cont-img-product-bio">
            <img src="${item.image}"> 
        </div>
        <div class="cont-inf-product-bio">
            <h2>${item.marca}</h2>
            <span id="idProducto">${item.id}</span>
            <ul>
                <li>${item.modelo}</li>
                <li>${item.precio}</li>
                <li>${item.color}</li>
                <li><button id="${item.id}" class="btnAdd" onclick="anadirProductoAlCarrito();">Add</button></li>
            </ul>
        </div>
        `
        divRes.appendChild(divItem);
    })
}
