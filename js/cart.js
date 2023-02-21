var carrito = [''];

function articulo(){

    const producto = document.querySelector('.card-product');
    //console.log(producto);
    carrito.push(producto);

    
}
console.log(carrito);
//console.log('carrito');

function guardar (){
    localStorage.setItem('carrito', carrito);
}

function visualizar () {
    let peticion = localStorage.getItem('carrito');
    document.querySelector('.informacion').innerHTML = peticion;

}

/*
//Prueba de funcionamiento de datos:
//const item = document.querySelector('.btnAdd');
//const imageItem = document.getElementById('#imagen');
const marcaItem = document.querySelector('#marca');
const idItem = document.querySelector('#idProducto');
const modelItem = document.querySelector('#model');
const priceItem = document.querySelector('#price');
const colorItem = document.querySelector('#color');
*/
const cart = [];
function addCart(){
    const marcaItem = document.querySelector('#marca').innerHTML;
    const idItem = document.querySelector('#idProducto').innerHTML;
    const modelItem = document.querySelector('#model').innerHTML;
    const priceItem = document.querySelector('#price').innerHTML;
    const colorItem = document.querySelector('#color').innerHTML;
    cart.push("marca: " + marcaItem);
    cart.push("id: " + idItem);
    cart.push("modelo: " + modelItem);
    cart.push("precio: " + priceItem);
    cart.push("color: " + colorItem);
}
console.log(cart);

function carrito (){
    cart.forEach ((cartItem) =>{
        productItem = document.createElement('div')
        productItem.classList.add('content-product-tn')
        productItem.innerHTML= `
        <div class="cont-inf-product-tn">
            <h2 id="marca">${cart[0]}</h2>
            <span id="idProducto">${item.id}</span>
            <ul>
                <li id="model">${cartItem.modelo}</li>
                <li id="price">${cartItem.precio}</li>
                <li id="color">${cartItem.color}</li>
            </ul>
        </div>
        `
        cartProduct.appendChild(productItem);
    }
)}

function saveSession(){
    localStorage.setItem(cart);
}
function getSession(){
    localStorage.setItem(cart);
}


/*
function saveSession(){
    //localStorage.setItem("name", item.value);
    //localStorage.setItem("imagen", imageItem);
    localStorage.setItem("marca", marcaItem.innerHTML);
    localStorage.setItem("id", idItem.innerHTML);
    localStorage.setItem("modelo", modelItem.innerHTML);
    localStorage.setItem("precio", priceItem.innerHTML);
    localStorage.setItem("color", colorItem.innerHTML);
}
function getSession(){
    //localStorage.setItem("name", item.value);
    localStorage.getItem("marca", marcaItem);
    localStorage.getItem("id", idItem);
    localStorage.getItem("modelo", modelItem);
    localStorage.getItem("precio", priceItem);
    localStorage.getItem("color", colorItem);
}
*/