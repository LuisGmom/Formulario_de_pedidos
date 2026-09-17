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
    data.TecnologiaX.map(item =>{
        divItem = document.createElement('div')
        divItem.classList.add('content-product-tn')
        divItem.innerHTML= `
        <div class="cont-img-product-tn">
            <img id="imagen" src="${item.image}">
        </div>
        <div class="cont-inf-product-tn">
            <h2 id="marca">${item.marca}</h2>
            <span id="idProducto" class="fw-bold">${item.id}</span>
            <ul>
                <li id="model">${item.modelo}</li>
                <li id="price">${item.precio}</li>
                <li id="color">${item.color}</li>
            </ul>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <button class="btnAdd btn btn-primary" onclick="addCart();">Agregar</button>           
               </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <button class="btnAdd btn btn-secondary" onclick="removeCart();">Quitar</button>
               </div>
            </div>
        </div>
        `
        divRes.appendChild(divItem);
    })

    divResp = document.querySelector("#product");
    data.TecnologiaS.map(item =>{
        divItem = document.createElement('div')
        divItem.classList.add('content-product-bio')
        divItem.innerHTML= `
        <div class="cont-img-product-bio">
            <img src="${item.image}"> 
        </div>
        <div class="cont-inf-product-bio">
            <h2>${item.marca}</h2>
            <span id="idProducto" class="fw-bold">${item.id}</span>
            <ul>
                <li>${item.modelo}</li>
                <li>${item.precio}</li>
                <li>${item.color}</li>
            </ul>
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <button class="btnAdd btn btn-primary" onclick="addCart();">Agregar</button>           
                </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <button class="btnAdd btn btn-secondary" onclick="removeCart();">Quitar</button>
                </div>
            </div>
        </div>
        `
        divRes.appendChild(divItem);
    })
}
