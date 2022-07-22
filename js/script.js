var usuarios = [
    {
        codigo: 'U-1',
        nombre: 'Juan',
        usuario: 'juan123',
        password: '1234',
        tipo: 'A'
    },
    {
        codigo: 'U-2',
        nombre: 'Pedro',
        usuario: 'pedro123',
        password: '1234',
        tipo: 'A'
    },
    {
        codigo: 'U-3',
        nombre: 'Carlos',
        usuario: 'carlos123',
        password: '1234',
        tipo: 'B',
        aprobado: true,
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        codigo: 'U-4',
        nombre: 'María',
        usuario: 'maria123',
        password: '1234',
        tipo: 'B',
        aprobado: false,
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        codigo: 'U-5',
        nombre: 'Alberto',
        usuario: 'alberto123',
        password: '1234',
        tipo: 'B',
        aprobado: null,
        ordenesTomadas: [],
        ordenesEntregadas: []
    },
    {
        codigo: 'U-6',
        nombre: 'Alex',
        usuario: 'alex123',
        password: '1234',
        tipo: 'C'
    },
    {
        codigo: 'U-7',
        nombre: 'Matusalen',
        usuario: 'matusalen123',
        password: '1234',
        tipo: 'C'
    },
    {
        codigo: 'U-8',
        nombre: 'Francisco',
        usuario: 'francisco123',
        password: '1234',
        tipo: 'C'
    },
    {
        codigo: 'U-9',
        nombre: 'Paola',
        usuario: 'paola123',
        password: '1234',
        tipo: 'C'
    }
];

var categorias = [
    {
        codigo: 'C-1',
        nombre: 'Farmacias',
        imagen: 'farmacia.png',
        descripcion: 'Lorem ipsum.',
        empresas: [
            {
                codigo: 'E-1',
                nombre: 'Farmacias Kielsa',
                descripcion: 'Ubicados en cualquier punto estratégico del país.',
                telefono: '2772-0011',
                calificacion: 5,
                direccion: 'Estamos ubicados en el boulevard Morazán.',
                correo: 'kielsahonduras@kielsa.com',
                logo: 'kielsa-logo.png',
                banner: 'kielsa-banner.png',
                productos: [
                    {
                        codigo: 'P-1',
                        nombre: 'Panadol ultra 104 tabletas',
                        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
                        cantiddad: 25,
                        precio: 314.95,
                        imagen: 'panadol-ultra.jpg'
                    },
                    {
                        codigo: 'P-2',
                        nombre: 'Sudagrip antigripal',
                        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
                        cantiddad: 100,
                        precio: 14.98,
                        imagen: 'sudagrip-antigripal.png'
                    }
                ]
            },
            {
                codigo: 'E-2',
                nombre: 'Farmacias del ahorro',
                descripcion: 'Ubicados en cualquier punto estratégico del país.',
                telefono: '2772-2020',
                calificacion: 4,
                direccion: 'Estamos ubicados en el boulevard fuerzas armadas.',
                correo: 'farmaciasdelahorro@ahorro.com',
                logo: 'ahorro-logo.png',
                banner: 'ahorro-banner.png',
                productos: [
                    {
                        codigo: 'P-3',
                        nombre: 'Panadol ultra 104 tabletas',
                        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
                        cantiddad: 25,
                        precio: 314.95,
                        imagen: 'panadol-ultra.jpg'
                    },
                    {
                        codigo: 'P-4',
                        nombre: 'Sudagrip antigripal',
                        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
                        cantiddad: 100,
                        precio: 14.98,
                        imagen: 'sudagrip-antigripal.png'
                    }
                ]
            }
        ]
    },
    {
        codigo: 'C-2',
        nombre: 'Farmacias',
        imagen: 'farmacia.png',
        descripcion: 'Lorem ipsum.',
        empresas: [
            {
                codigo: 'E-3',
                nombre: 'Farmacias Kielsa',
                descripcion: 'Ubicados en cualquier punto estratégico del país.',
                telefono: '2772-0011',
                calificacion: 5,
                direccion: 'Estamos ubicados en el boulevard Morazán.',
                correo: 'kielsahonduras@kielsa.com',
                logo: 'kielsa-logo.png',
                banner: 'kielsa-banner.png',
                productos: [
                    {
                        codigo: 'P-5',
                        nombre: 'Panadol ultra 104 tabletas',
                        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
                        cantiddad: 25,
                        precio: 314.95,
                        imagen: 'panadol-ultra.jpg'
                    },
                    {
                        codigo: 'P-6',
                        nombre: 'Sudagrip antigripal',
                        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
                        cantiddad: 100,
                        precio: 14.98,
                        imagen: 'sudagrip-antigripal.png'
                    }
                ]
            },
            {
                codigo: 'E-4',
                nombre: 'Farmacias del ahorro',
                descripcion: 'Ubicados en cualquier punto estratégico del país.',
                telefono: '2772-2020',
                calificacion: 4,
                direccion: 'Estamos ubicados en el boulevard fuerzas armadas.',
                correo: 'farmaciasdelahorro@ahorro.com',
                logo: 'ahorro-logo.png',
                banner: 'ahorro-banner.png',
                productos: [
                    {
                        codigo: 'P-7',
                        nombre: 'Panadol ultra 104 tabletas',
                        descripcion: 'Panadol Ultra 104 tabletas para aliviar dolores.',
                        cantiddad: 25,
                        precio: 314.95,
                        imagen: 'panadol-ultra.jpg'
                    },
                    {
                        codigo: 'P-8',
                        nombre: 'Sudagrip antigripal',
                        descripcion: 'Ingredientes activos: Acetaminofen, Sulfato de Amantadina,Fenilefrina, Clorfeniramina, Vitamica C con acción antialérgica que alivia los síntomas de la gripe y tos. Suprime los síntomas gripales como el dolor de cuerpo.',
                        cantiddad: 100,
                        precio: 14.98,
                        imagen: 'sudagrip-antigripal.png'
                    }
                ]
            }
        ]
    }
];

var ordenes = [
    {
        codigo: 'O-1',
        nombre: 'Orden 1',
        estado: 'disponible',
        cliente: {
            nombre: 'Alex',
            telefono: '9199-1111',
            correo: 'alex@unah.hn'
        },
        envio: {
            productos: [
                {
                    codigo: 'P-1',
                    nombre: 'Panadol ultra 104 tabletas',
                    precio: 314.95,
                    cantidad: 3
                },
                {
                    codigo: 'P-2',
                    nombre: 'Sudagrip antigripal',
                    precio: 14.98,
                    cantidad: 2
                }
            ],
            direccion: 'lorem ipsum.',
            empresa: 'Farmacias Kielsa',
            subtotal: 974.81,
            isv: 146.22,
            comisionMotorista: 97.48,
            comisionAdministrador: 48.74,
            total: 292.44,
            estado: null,
            coordenadas: null,
            motorista: null,

        }
    }
];

localStorage.setItem('usuarios', JSON.stringify(usuarios));
localStorage.setItem('categorias', JSON.stringify(categorias));
localStorage.setItem('ordenes', JSON.stringify(ordenes));

function obtenerLocalStorage() {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
    categorias = JSON.parse(localStorage.getItem('categorias'));
    ordenes = JSON.parse(localStorage.getItem('ordenes'));
}

function llamarModal(orden) {
    $('#modal').modal(orden);
}

function cambiarSection(valor) {
    let sectionActual = document.getElementById(`section-${valor}`);
    switch (valor) {
        case 1:
            sectionActual.innerHTML = '<div class="titulo-section borde-naranja px-1">Órdenes disponibles</div>';

            let ordenesDisponibles = ordenes.filter(orden => orden.estado == 'disponible');

            ordenesDisponibles.forEach(orden => {
                sectionActual.innerHTML +=
                `<div class="p-1">
                    <div class="borde-azul p-1 radius contenedor-verOrdenes">
                        <h4 class="pl-2 texto-gris mt-2">${orden.nombre}</h4>
                        <button class="boton boton-naranja" onclick="abrirOrden(1); dibujarContenido(1, '${orden.codigo}');">ver orden</button>
                    </div>
                </div>`;
            });

            break;

        case 2:
            sectionActual.innerHTML = '<div class="titulo-section borde-naranja px-1">Órdenes sin entregar</div>';

            let ordenesSinEntregar = ordenes.filter(orden => orden.estado == 'sin entregar');

            ordenesSinEntregar.forEach(orden => {
                sectionActual.innerHTML +=
                `<div class="p-1">
                    <div class="borde-azul p-1 radius contenedor-verOrdenes">
                        <h4 class="pl-2 texto-gris mt-2">${orden.nombre}</h4>
                        <button class="boton boton-naranja" onclick="abrirOrden(2); dibujarContenido(2, '${orden.codigo}');">ver orden</button>
                    </div>
                </div>`;
            });

            break;

            case 3:
                sectionActual.innerHTML = '<div class="titulo-section borde-naranja px-1">Órdenes entregadas</div>';
    
                let ordenesEntregadas = ordenes.filter(orden => orden.estado == 'entregada');
    
                ordenesEntregadas.forEach(orden => {
                    sectionActual.innerHTML +=
                    `<div class="p-1">
                        <div class="borde-azul p-1 radius contenedor-verOrdenes">
                            <h4 class="pl-2 texto-gris mt-2">${orden.nombre}</h4>
                            <button class="boton boton-naranja" onclick="abrirOrden(3); dibujarContenido(3, '${orden.codigo}');">ver orden</button>
                        </div>
                    </div>`;
                });
    
                break;
    }

    document.getElementById('section-principal').style.display = 'none';
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`section-${i}`).style.display = 'none';
    }
    sectionActual.style.display = 'block';
}

function irAtras() {
    for (let i = 1; i <= 3; i++) {
        if (document.getElementById(`section-${i}`).style.display == 'block') {
            document.getElementById(`section-${i}`).style.display = 'none';
            document.getElementById('section-principal').style.display = 'flex';
        }
        if (document.getElementById(`section-${i}-1`).style.display == 'block') {
            document.getElementById(`section-${i}-1`).style.display = 'none';
            document.getElementById(`section-${i}`).style.display = 'block';
        }
    }
}

function abrirOrden(valor) {
    document.getElementById(`section-${valor}-1`).style.display = 'block';
    document.getElementById(`section-${valor}`).style.display = 'none';
}

function dibujarContenido(valor, idOrden) {

    sectionActual = document.getElementById(`section-${valor}-1`);

    ordenActual = ordenes.filter(orden => orden.codigo == idOrden)[0];

    let productos = '';
    ordenActual.envio.productos.forEach(producto => {
        productos += producto.cantidad + ' ' + producto.nombre + '; ';
    });

    switch (valor) {
        case 1:
            sectionActual.innerHTML =
            `<div class="titulo-section borde-naranja px-1">Detalle de la orden "${ordenActual.nombre}"</div>
            <div class="borde-naranja row mt-3 subsection pt-3">
                <div class="titulo-section borde-naranja px-1">Información del cliente</div>
                <div class="col-12">
                    <h6>Nombre:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.cliente.nombre}</h6>
                </div>
                <div class="col-12">
                    <h6>Celular:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.cliente.telefono}</h6>
                </div>
                <div class="col-12">
                    <h6>Correo:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.cliente.correo}</h6>
                </div>
            </div>
            <div class="borde-naranja row mt-4 subsection py-3">
                <div class="titulo-section borde-naranja px-1">Detalle del envío</div>
                <div class="col-12">
                    <h6>Productos:</h6>
                    <h6 class="texto-gris ml-5">${productos}</h6>
                </div>
                <div class="col-12">
                    <h6>Empresa:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.envio.empresa}</h6>
                </div>
                <div class="col-12">
                    <h6>Total a pagar:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.envio.total} Lps.</h6>
                </div>
                <div class="col-12">
                    <h6>Dirección:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.envio.direccion}</h6>
                    <img src="img/${ordenActual.envio.imagen}" class="ml-5 borde-verde radius img-direccion" alt="dirección">
                </div>
            </div>
            <button class="boton boton-naranja float-right mt-2 mr-2" onclick="tomarOrden('${idOrden}');">Tomar orden</button>`;

            break;

        case 2:
            sectionActual.innerHTML =
            `<div class="titulo-section borde-naranja px-1">Detalle de la orden "${ordenActual.nombre}"</div>
            <div class="borde-naranja row mt-3 subsection pt-3">
                <div class="titulo-section borde-naranja px-1">Información del cliente</div>
                <div class="col-12">
                    <h6>Nombre:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.cliente.nombre}</h6>
                </div>
                <div class="col-12">
                    <h6>Celular:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.cliente.telefono}</h6>
                </div>
                <div class="col-12">
                    <h6>Correo:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.cliente.correo}</h6>
                </div>
            </div>
            <div class="borde-naranja row mt-4 subsection py-3">
                <div class="titulo-section borde-naranja px-1">Detalle del envío</div>
                <div class="col-12">
                    <h6>Productos:</h6>
                    <h6 class="texto-gris ml-5">${productos}</h6>
                </div>
                <div class="col-12">
                    <h6>Empresa:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.envio.empresa}</h6>
                </div>
                <div class="col-12">
                    <h6>Total a pagar:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.envio.total} Lps.</h6>
                </div>
                <div class="col-12 mb-3">
                    <h6>Dirección:</h6>
                    <h6 class="texto-gris ml-5">${ordenActual.envio.direccion}</h6>
                    <img src="img/${ordenActual.envio.imagen}" class="ml-5 borde-verde radius img-direccion" alt="dirección">
                </div>
                <div class="col-12">
                    <h6>Estado de la orden:</h6>
                </div>
                <div class="col-12 row mb-2 mx-auto">
                    <div class="col-6 p-1 text-center"><button id="boton-tomada" class="boton boton-rojo botones-entregando orden-tomada" onclick="estadoOrden('tomada', '${idOrden}');">Tomada</button></div>
                    <div class="col-6 p-1 text-center"><button id="boton-enCamino" class="boton borde-naranja botones-entregando orden-enCamino" onclick="estadoOrden('enCamino', '${idOrden}');">En camino</button></div>
                    <div class="col-6 p-1 text-center"><button id="boton-enOrigen" class="boton borde-naranja botones-entregando orden-enOrigen" onclick="estadoOrden('enOrigen', '${idOrden}');">En origen</button></div>
                    <div class="col-6 p-1 text-center"><button id="boton-enDestino" class="boton borde-naranja botones-entregando orden-enDestino" onclick="estadoOrden('enDestino', '${idOrden}');">En destino</button></div>
                </div>
            </div>
            <button class="boton boton-naranja float-right mt-2 mr-2" onclick="estadoOrden('entregada', '${idOrden}');">Orden entregada</button>`;

            actualizarBotones(idOrden);

            break;

        case 3:
            sectionActual.innerHTML =
            `<div class="titulo-section borde-naranja px-1">Detalle de la entrega</div>
            <div class="col-12 py-1">
                <h6>Orden:</h6>
                <h6 class="texto-gris ml-5">${ordenActual.nombre}</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Cliente:</h6>
                <h6 class="texto-gris ml-5">${ordenActual.cliente.nombre}</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Empresa:</h6>
                <h6 class="texto-gris ml-5">${ordenActual.envio.empresa}</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Productos:</h6>
                <h6 class="texto-gris ml-5">${productos}</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Pago total:</h6>
                <h6 class="texto-gris ml-5">${ordenActual.envio.total}Lps. </h6>
            </div>
            <div class="col-12 py-1">
                <h6>Precio base:</h6>
                <h6 class="texto-gris ml-5">${ordenActual.envio.subtotal} Lps.</h6>
            </div>
            <div class="col-12 py-1">
                <h6>ISV (15%):</h6>
                <h6 class="texto-gris ml-5">${ordenActual.envio.isv} Lps.</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Comisión motorista (10%):</h6>
                <h6 class="texto-gris ml-5">${ordenActual.envio.comisionMotorista} Lps.</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Comisión administrador (5%):</h6>
                <h6 class="texto-gris ml-5">${ordenActual.envio.comisionAdministrador} Lps.</h6>
            </div>
            <div class="col-12 py-1">
                <button class="boton boton-naranja float-right mr-1" onclick="irAtras();">Aceptar</button>
            </div>`;
    }

}

function tomarOrden(idOrden) {
    let o = ordenes.filter(orden => orden.codigo == idOrden)[0];

    o.estado = 'sin entregar';
    o.envio.motorista = 'Juan';
    o.envio.estado = 'tomada';

    modalRepartidor = document.getElementById('modal-body-repartidor');

    modalRepartidor.innerHTML =
    `<h4 class="titulo-modal mt-2 mb-5 text-center">¡Orden tomada con éxito!</h4>
    <div class="check mt-3 mb-4 text-center">
        <i class="fa-solid fa-circle-check"></i>
    </div>
    <div class="text-center">
        <button class="boton boton-blanco borde-verde my-4" onclick="llamarModal('hide'); irAtras(); cambiarSection(1);"><h5 class="p-0 m-0">Aceptar</h5></button>
    </div>`;

    modalRepartidor.parentNode.classList.add('borde-verde');
    modalRepartidor.parentNode.classList.remove('borde-rojo');
    modalRepartidor.parentNode.classList.remove('borde-naranja');
    
    llamarModal('show');
}

function estadoOrden(estado, idOrden) {
    let o = ordenes.filter(orden => orden.codigo == idOrden)[0];

    if (estado != 'entregada') {
        let botones = document.getElementsByClassName('botones-entregando');
        Array.from(botones).forEach(boton => {
            boton.classList.add('borde-naranja');
            boton.classList.remove('boton-rojo');
        });
        document.getElementById(`boton-${estado}`).classList.add('boton-rojo');
        document.getElementById(`boton-${estado}`).classList.remove('borde-naranja');

        o.envio.estado = estado;

    } else {

        o.estado = estado;
    
        modalRepartidor = document.getElementById('modal-body-repartidor');

        let productos = '';
        o.envio.productos.forEach(producto => {
            productos += producto.cantidad + ' ' + producto.nombre + '; ';
        });

        modalRepartidor.innerHTML =
        `<div class="borde-naranja pt-4 subsection-2 mx-auto my-2 row">
            <div class="titulo-section borde-naranja px-1">Factura</div>
            <div class="col-12 py-1">
                <h6>Cliente:</h6>
                <h6 class="texto-gris ml-5">${o.cliente.nombre}</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Empresa:</h6>
                <h6 class="texto-gris ml-5">${o.envio.empresa}</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Productos:</h6>
                <h6 class="texto-gris ml-5">${productos}</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Motorista:</h6>
                <h6 class="texto-gris ml-5">${o.envio.motorista}</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Dirección de entrega:</h6>
                <h6 class="texto-gris ml-5">${o.envio.direccion}</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Pago del cliente:</h6>
                <h6 class="texto-gris ml-5">${o.envio.total} Lps.</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Precio base:</h6>
                <h6 class="texto-gris ml-5">${o.envio.subtotal} Lps.</h6>
            </div>
            <div class="col-12 py-1">
                <h6>ISV (15%):</h6>
                <h6 class="texto-gris ml-5">${o.envio.isv} Lps.</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Comisión motorista (10%):</h6>
                <h6 class="texto-gris ml-5">${o.envio.comisionMotorista} Lps.</h6>
            </div>
            <div class="col-12 py-1">
                <h6>Comisión administrador (5%):</h6>
                <h6 class="texto-gris ml-5">${o.envio.comisionMotorista} Lps.</h6>
            </div>
            <div class="col-12 py-1 text-center">
                <button class="boton borde-naranja text-center"><h5 class="b-0 m-0" onclick="llamarModal('hide'); irAtras(); cambiarSection(2);">Finalizar</h5></button>
            </div>
        </div>`;

        modalRepartidor.parentNode.classList.remove('borde-verde');
        modalRepartidor.parentNode.classList.remove('borde-rojo');
        modalRepartidor.parentNode.classList.add('borde-naranja');
        
        llamarModal('show');

    }

    
}

function actualizarBotones(idOrden) {
    let estado = ordenes.filter(orden => orden.codigo == idOrden)[0].envio.estado;
    let botones = document.getElementsByClassName('botones-entregando');
    Array.from(botones).forEach(boton => {
        boton.classList.add('borde-naranja');
        boton.classList.remove('boton-rojo');
    });
    document.getElementById(`boton-${estado}`).classList.add('boton-rojo');
    document.getElementById(`boton-${estado}`).classList.remove('borde-naranja');
}

obtenerLocalStorage();