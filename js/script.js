var ordenes = [
    {
        id: 'O-1',
        nombre: 'Orden 1',
        estado: 'disponible',
        productos: [
            {
                id: 'P-1',
                nombre: 'Producto 2',
                cantidad: 2
            },
            {
                id: 'P-2',
                nombre: 'Producto 1',
                cantidad: 5
            },
            {
                id: 'P-3',
                nombre: 'Producto 5',
                cantidad: 1
            }            
        ],
        cliente: {
            nombre: 'Christian',
            telefono: '+504 9716-0785',
            correo: 'christianarielph@gmail.com'
        },
        envio: {
            empresa: 'Empresa 1',
            direccion: 'Lorem ipsum.',
            subtotal: 299.97,
            total: 389.97,
            imagen: 'mapa 1.png',
            estado: null,
            isv: 45,
            comisionMotorista: 30,
            comisionAdministrador: 15,
            motorista: null,
        }
    },
    {
        id: 'O-2',
        nombre: 'Orden 2',
        estado: 'sin entregar',
        productos: [
            {
                id: 'P-1',
                nombre: 'Producto 2',
                cantidad: 1
            },
            {
                id: 'P-2',
                nombre: 'Producto 1',
                cantidad: 1
            },
            {
                id: 'P-3',
                nombre: 'Producto 5',
                cantidad: 1
            }            
        ],
        cliente: {
            nombre: 'Christian',
            telefono: '+504 9716-0785',
            correo: 'christianarielph@gmail.com'
        },
        envio: {
            empresa: 'Empresa 1',
            direccion: 'Lorem ipsum.',
            subtotal: 299.97,
            total: 389.97,
            imagen: 'mapa 1.png',
            estado: 'tomada',
            isv: 45,
            comisionMotorista: 30,
            comisionAdministrador: 15,
            motorista: 'Juan',
        }
    },
    {
        id: 'O-3',
        nombre: 'Orden 3',
        estado: 'sin entregar',
        productos: [
            {
                id: 'P-1',
                nombre: 'Producto 2',
                cantidad: 2
            },
            {
                id: 'P-2',
                nombre: 'Producto 1',
                cantidad: 5
            },
            {
                id: 'P-3',
                nombre: 'Producto 5',
                cantidad: 1
            }            
        ],
        cliente: {
            nombre: 'Christian',
            telefono: '+504 9716-0785',
            correo: 'christianarielph@gmail.com'
        },
        envio: {
            empresa: 'Empresa 1',
            direccion: 'Lorem ipsum.',
            subtotal: 299.97,
            total: 389.97,
            imagen: 'mapa 1.png',
            estado: 'enOrigen',
            isv: 45,
            comisionMotorista: 30,
            comisionAdministrador: 15,
            motorista: 'Juan',
        }
    },
    {
        id: 'O-4',
        nombre: 'Orden 4',
        estado: 'disponible',
        productos: [
            {
                id: 'P-1',
                nombre: 'Producto 2',
                cantidad: 2
            },
            {
                id: 'P-2',
                nombre: 'Producto 1',
                cantidad: 5
            },
            {
                id: 'P-3',
                nombre: 'Producto 5',
                cantidad: 1
            }            
        ],
        cliente: {
            nombre: 'Christian',
            telefono: '+504 9716-0785',
            correo: 'christianarielph@gmail.com'
        },
        envio: {
            empresa: 'Empresa 1',
            direccion: 'Lorem ipsum.',
            subtotal: 299.97,
            total: 389.97,
            imagen: 'mapa 1.png',
            estado: null,
            isv: 45,
            comisionMotorista: 30,
            comisionAdministrador: 15,
            motorista: null,
        }
    },
    {
        id: 'O-5',
        nombre: 'Orden 5',
        estado: 'entregada',
        productos: [
            {
                id: 'P-1',
                nombre: 'Producto 2',
                cantidad: 2
            },
            {
                id: 'P-2',
                nombre: 'Producto 1',
                cantidad: 5
            },
            {
                id: 'P-3',
                nombre: 'Producto 5',
                cantidad: 1
            }            
        ],
        cliente: {
            nombre: 'Christian',
            telefono: '+504 9716-0785',
            correo: 'christianarielph@gmail.com'
        },
        envio: {
            empresa: 'Empresa 1',
            direccion: 'Lorem ipsum.',
            subtotal: 299.97,
            total: 389.97,
            imagen: 'mapa 1.png',
            estado: 'en destino',
            isv: 45,
            comisionMotorista: 30,
            comisionAdministrador: 15,
            motorista: 'Juan',
        }
    },
    {
        id: 'O-6',
        nombre: 'Orden 6',
        estado: 'disponible',
        productos: [
            {
                id: 'P-1',
                nombre: 'Producto 2',
                cantidad: 2
            },
            {
                id: 'P-2',
                nombre: 'Producto 1',
                cantidad: 5
            },
            {
                id: 'P-3',
                nombre: 'Producto 5',
                cantidad: 1
            }            
        ],
        cliente: {
            nombre: 'Christian',
            telefono: '+504 9716-0785',
            correo: 'christianarielph@gmail.com'
        },
        envio: {
            empresa: 'Empresa 1',
            direccion: 'Lorem ipsum.',
            subtotal: 299.97,
            total: 389.97,
            imagen: 'mapa 1.png',
            estado: null,
            isv: 45,
            comisionMotorista: 30,
            comisionAdministrador: 15,
            motorista: null,
        }
    }    
]

//funcionalidad
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
                        <button class="boton boton-naranja" onclick="abrirOrden(1); dibujarContenido(1, '${orden.id}');">ver orden</button>
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
                        <button class="boton boton-naranja" onclick="abrirOrden(2); dibujarContenido(2, '${orden.id}');">ver orden</button>
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
                            <button class="boton boton-naranja" onclick="abrirOrden(3); dibujarContenido(3, '${orden.id}');">ver orden</button>
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

    ordenActual = ordenes.filter(orden => orden.id == idOrden)[0];

    let productos = '';
    ordenActual.productos.forEach(producto => {
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
    let o = ordenes.filter(orden => orden.id == idOrden)[0];

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
    let o = ordenes.filter(orden => orden.id == idOrden)[0];

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
        o.productos.forEach(producto => {
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
    let estado = ordenes.filter(orden => orden.id == idOrden)[0].envio.estado;
    let botones = document.getElementsByClassName('botones-entregando');
    Array.from(botones).forEach(boton => {
        boton.classList.add('borde-naranja');
        boton.classList.remove('boton-rojo');
    });
    document.getElementById(`boton-${estado}`).classList.add('boton-rojo');
    document.getElementById(`boton-${estado}`).classList.remove('borde-naranja');
}