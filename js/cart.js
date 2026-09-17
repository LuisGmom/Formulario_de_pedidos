
// ======================================================
// CONFIGURACIÓN
// ======================================================

const CART_KEY = 'carrito';


// ======================================================
// OBTENER CARRITO
// ======================================================

function getCart() {

    const cart = localStorage.getItem(CART_KEY);

    if (!cart) {
        return [];
    }

    try {

        return JSON.parse(cart);

    } catch (error) {

        console.error(
            'Error al obtener el carrito:',
            error
        );

        return [];
    }
}


// ======================================================
// GUARDAR CARRITO
// ======================================================

function saveCart(cart) {

    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

}


// ======================================================
// AGREGAR PRODUCTO
// ======================================================

function addCart(button) {

    // Obtener la tarjeta del producto
    const productCard = button.closest(
        '.content-product-tn, .content-product-bio'
    );


    if (!productCard) {

        console.error(
            'No se encontró la tarjeta del producto.'
        );

        return;
    }


    // Obtener información del producto
    const product = {

        id: productCard.dataset.id,

        marca: productCard.dataset.marca,

        modelo: productCard.dataset.modelo,

        precio: productCard.dataset.precio,

        color: productCard.dataset.color,

        image: productCard.dataset.image,

        cantidad: 1

    };


    // Obtener carrito actual
    const cart = getCart();


    // Buscar si el producto ya existe
    const existingProduct = cart.find(
        item => item.id === product.id
    );


    if (existingProduct) {

        // Si existe, aumentar cantidad
        existingProduct.cantidad++;

        console.log(
            'Cantidad actualizada:',
            existingProduct
        );

    } else {

        // Si no existe, agregar producto
        cart.push(product);

        console.log(
            'Producto agregado:',
            product
        );

    }


    // Guardar carrito
    saveCart(cart);


    // Actualizar visualización
    renderCart();


    console.log(
        'Carrito:',
        cart
    );

}


// ======================================================
// MOSTRAR CARRITO
// ======================================================

function renderCart() {

    const cartElement = document.querySelector('#carrito');

    const totalElement = document.querySelector('#total');


    // Si estamos en una página que no tiene carrito,
    // simplemente no hacemos nada.
    if (!cartElement) {
        return;
    }


    const cart = getCart();


    // Limpiar carrito
    cartElement.innerHTML = '';


    // Carrito vacío
    if (cart.length === 0) {

        cartElement.innerHTML = `<li class="list-group-item">El carrito está vacío.</li>
        `;

        if (totalElement) {
            totalElement.textContent = '0.00';
        }

        return;
    }


    let total = 0;


    // Crear productos
    cart.forEach(product => {

        const li = document.createElement('li');

        li.classList.add(
            'list-group-item'
        );


        // Convertir precio a número
        const precio = parseFloat(
            product.precio
                .replace(/[^\d.,-]/g, '')
                .replace(',', '.')
        ) || 0;


        const subtotal =
            precio * product.cantidad;


        total += subtotal;


        li.innerHTML = `

            <div>

                <strong>
                    ${product.marca}
                </strong>

                <br>

                <small>
                    ID: ${product.id}
                </small>

                <br>

                <span>
                    ${product.modelo}
                </span>

                <br>

                <span>
                    Color: ${product.color}
                </span>

                <br>

                <span>
                    Precio: ${product.precio}
                </span>

                <br>

                <span class="fw-bolder text-primary">
                    Cantidad: ${product.cantidad}
                </span>

                <br>

                <strong>
                    Subtotal: ${subtotal.toFixed(2)} €
                </strong>

                <br>

                <button
                    type="button"
                    class="btn btn-sm btn-danger mt-2"
                    onclick="removeCart('${product.id}')"
                >
                    Quitar
                </button>

            </div>

        `;


        cartElement.appendChild(li);

    });


    // Mostrar total
    if (totalElement) {

        totalElement.textContent =
            total.toFixed(2);

    }

}


// ======================================================
// QUITAR PRODUCTO
// ======================================================

function removeCart(id) {

    let cart = getCart();


    cart = cart.filter(
        product => product.id !== id
    );


    saveCart(cart);


    renderCart();


    console.log(
        'Producto eliminado:',
        id
    );

}


// ======================================================
// VACIAR CARRITO
// ======================================================

function clearCart() {

    localStorage.removeItem(
        CART_KEY
    );


    renderCart();


    console.log(
        'Carrito eliminado.'
    );

}


// ======================================================
// BOTÓN VACIAR
// ======================================================

document.addEventListener(
    'DOMContentLoaded',
    function () {

        renderCart();


        const buttonVaciar =
            document.querySelector(
                '#boton-vaciar'
            );


        if (buttonVaciar) {

            buttonVaciar.addEventListener(
                'click',
                clearCart
            );

        }

    }
);

