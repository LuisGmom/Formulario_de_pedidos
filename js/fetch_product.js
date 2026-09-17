
fetch('./json/productos.json')

    .then(response => response.json())
    .then(data => datos(data))
    .catch(err => console.log('error', err));


function datos(data) {

    console.log(data);

    const divRes = document.querySelector('#product');


    // ==================================================
    // TECNOLOGIA X
    // ==================================================

    data.TecnologiaX.forEach(item => {

        const divItem = document.createElement('div');

        divItem.classList.add('content-product-tn');

        divItem.innerHTML = `

            <div class="cont-img-product-tn">

                <img 
                    src="${item.image}" 
                    alt="${item.marca} ${item.modelo}"
                >

            </div>


            <div class="cont-inf-product-tn">

                <h2>${item.marca}</h2>

                <span class="fw-bold">
                    ${item.id}
                </span>

                <ul>

                    <li>${item.modelo}</li>

                    <li>${item.precio}</li>

                    <li>${item.color}</li>

                </ul>


                <div class="row">

                    <div class="col-sm-12 col-md-6 col-lg-6">

                        <button
                            type="button"
                            class="btnAdd btn btn-primary"
                            onclick="addCart(this);"
                        >
                            Agregar
                        </button>

                    </div>


                    <div class="col-sm-12 col-md-6 col-lg-6">

                        <button
                            type="button"
                            class="btnRemove btn btn-secondary"
                            onclick="removeCart(this);"
                        >
                            Quitar
                        </button>

                    </div>

                </div>

            </div>
        `;


        // Guardamos los datos directamente en la tarjeta
        divItem.dataset.id = item.id;
        divItem.dataset.marca = item.marca;
        divItem.dataset.modelo = item.modelo;
        divItem.dataset.precio = item.precio;
        divItem.dataset.color = item.color;
        divItem.dataset.image = item.image;


        divRes.appendChild(divItem);

    });


    // ==================================================
    // TECNOLOGIA S
    // ==================================================

    data.TecnologiaS.forEach(item => {

        const divItem = document.createElement('div');

        divItem.classList.add('content-product-bio');

        divItem.innerHTML = `

            <div class="cont-img-product-bio">

                <img
                    src="${item.image}"
                    alt="${item.marca} ${item.modelo}"
                >

            </div>


            <div class="cont-inf-product-bio">

                <h2>${item.marca}</h2>

                <span class="fw-bold">
                    ${item.id}
                </span>

                <ul>

                    <li>${item.modelo}</li>

                    <li>${item.precio}</li>

                    <li>${item.color}</li>

                </ul>


                <div class="row">

                    <div class="col-sm-12 col-md-6 col-lg-6">

                        <button
                            type="button"
                            class="btnAdd btn btn-primary"
                            onclick="addCart(this);"
                        >
                            Agregar
                        </button>

                    </div>


                    <div class="col-sm-12 col-md-6 col-lg-6">

                        <button
                            type="button"
                            class="btnRemove btn btn-secondary"
                            onclick="removeCart(this);"
                        >
                            Quitar
                        </button>

                    </div>

                </div>

            </div>
        `;


        // Guardamos los datos directamente en la tarjeta
        divItem.dataset.id = item.id;
        divItem.dataset.marca = item.marca;
        divItem.dataset.modelo = item.modelo;
        divItem.dataset.precio = item.precio;
        divItem.dataset.color = item.color;
        divItem.dataset.image = item.image;


        divRes.appendChild(divItem);

    });

}

