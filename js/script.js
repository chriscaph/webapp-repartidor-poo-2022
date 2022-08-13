var ordenActual;

var idRepartidor = obtenerParametro('id');
var idSession = obtenerParametro('ses');
var nombreMotorista = obtenerParametro('nom');

if (idSession.length == 0) {
    idSession = '1';
}

function verificarSesion() {
    axios({
        method: 'get',
        url: `http://localhost:4200/sesiones/${idSession}`,
    })
        .then(res => {
            if (res.data.codigo == 0) {
                window.open(`login.html`, '_self');
            }
        })
}

verificarSesion();

function cerrarSesion() {
    axios({
        method: 'get',
        url: `http://localhost:4200/sesiones/cerrar/${idSession}`
    })
}

function llamarModal(orden) {
    $('#modal').modal(orden);
}

function cambiarSection(valor) {
    let sectionActual = document.getElementById(`section-${valor}`);
    switch (valor) {
        case 1:
            sectionActual.innerHTML = '<div class="titulo-section borde-naranja px-1">Órdenes disponibles</div>';

            axios({
                method: 'GET',
                url: 'http://localhost:4200/ordenes/disponibles'
            })
                .then(res => {
                    let ordenesDisponibles = res.data;

                    ordenesDisponibles.forEach(orden => {
                        sectionActual.innerHTML +=
                            `<div class="p-1">
                                <div class="borde-azul p-1 radius contenedor-verOrdenes">
                                    <h4 class="pl-2 texto-gris mt-2">${orden.nombre}</h4>
                                    <button class="boton boton-naranja" onclick="abrirOrden(1); dibujarContenido(1, '${orden._id}');">ver orden</button>
                                </div>
                            </div>`;
                    });
                })

            break;

        case 2:
            sectionActual.innerHTML = '<div class="titulo-section borde-naranja px-1">Órdenes sin entregar</div>';

            axios({
                method: 'GET',
                url: `http://localhost:4200/ordenes/sinEntregar/${idRepartidor}`
            })
                .then(res => {
                    let ordenesSinEntregar = res.data;

                    ordenesSinEntregar.forEach(orden => {
                        sectionActual.innerHTML +=
                            `<div class="p-1">
                    <div class="borde-azul p-1 radius contenedor-verOrdenes">
                        <h4 class="pl-2 texto-gris mt-2">${orden.nombre}</h4>
                        <button class="boton boton-naranja" onclick="abrirOrden(2); dibujarContenido(2, '${orden._id}');">ver orden</button>
                    </div>
                </div>`;
                    });
                })

            break;

        case 3:
            sectionActual.innerHTML = '<div class="titulo-section borde-naranja px-1">Órdenes entregadas</div>';

            axios({
                method: 'GET',
                url: `http://localhost:4200/ordenes/entregadas/${idRepartidor}`
            })
                .then(res => {
                    let ordenesEntregadas = res.data

                    ordenesEntregadas.forEach(orden => {
                        sectionActual.innerHTML +=
                            `<div class="p-1">
                                <div class="borde-azul p-1 radius contenedor-verOrdenes">
                                    <h4 class="pl-2 texto-gris mt-2">${orden.nombre}</h4>
                                    <button class="boton boton-naranja" onclick="abrirOrden(3); dibujarContenido(3, '${orden._id}');">ver orden</button>
                                </div>
                            </div>`;
                    });
                })

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

    let productos = '';

    axios({
        method: 'GET',
        url: `http://localhost:4200/ordenes/${idOrden}`
    })
        .then(res => {
            ordenActual = res.data;

            ordenActual.envio.productos.forEach(producto => {
                productos += producto.cantidad + ' ' + producto.nombre + '; ';
            });

            switch (valor) {
                case 1:
                    sectionActual.innerHTML =
                        `<div class="titulo-section borde-naranja px-1">Detalle de la orden "${ordenActual.nombre}"</div>
                    <div class="borde-naranja row mt-3 subsection pt-3">
                        <div class="titulo-section borde-naranja px-1">Información del cliente</div>
                        <div class="col-12 col-md-6">
                            <h6>Nombre:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.cliente.nombre}</h6>
                        </div>
                        <div class="col-12 col-md-6">
                            <h6>Celular:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.cliente.celular}</h6>
                        </div>
                        <div class="col-12">
                            <h6>Correo:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.cliente.correo}</h6>
                        </div>
                    </div>
                    <div class="borde-naranja row mt-4 subsection py-3">
                        <div class="titulo-section borde-naranja px-1">Detalle del envío</div>
                        <div class="col-12 col-md-6">
                            <h6>Productos:</h6>
                            <h6 class="texto-gris ml-5">${productos}</h6>
                        </div>
                        <div class="col-12 col-md-6">
                            <h6>Empresa:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.empresa}</h6>
                        </div>
                        <div class="col-12 col-md-6">
                            <h6>Total a pagar:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.total.toFixed(2)} Lps.</h6>
                        </div>
                        <div class="col-12">
                            <h6>Dirección:</h6>
                            <h6 class="texto-gris pl-5">${ordenActual.envio.direccion}</h6>
                            <div id="mapa" style="width: 100%; height: 200px;" class="borde-verde"></div>
                        </div>
                    </div>
                    <button class="boton boton-naranja float-right mt-2 mr-2" onclick="tomarOrden('${idOrden}');">Tomar orden</button>`;

                    cargarMapa(ordenActual.envio.coordenadas.longitud, ordenActual.envio.coordenadas.latitud);

                    break;

                case 2:
                    sectionActual.innerHTML =
                        `<div class="titulo-section borde-naranja px-1">Detalle de la orden "${ordenActual.nombre}"</div>
                    <div class="borde-naranja row mt-3 subsection pt-3">
                        <div class="titulo-section borde-naranja px-1">Información del cliente</div>
                        <div class="col-12 col-md-6">
                            <h6>Nombre:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.cliente.nombre}</h6>
                        </div>
                        <div class="col-12 col-md-6">
                            <h6>Celular:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.cliente.celular}</h6>
                        </div>
                        <div class="col-12">
                            <h6>Correo:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.cliente.correo}</h6>
                        </div>
                    </div>
                    <div class="borde-naranja row mt-4 subsection py-3">
                        <div class="titulo-section borde-naranja px-1">Detalle del envío</div>
                        <div class="col-12 col-md-6">
                            <h6>Productos:</h6>
                            <h6 class="texto-gris ml-5">${productos}</h6>
                        </div>
                        <div class="col-12 col-md-6">
                            <h6>Empresa:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.empresa}</h6>
                        </div>
                        <div class="col-12 col-md-6">
                            <h6>Total a pagar:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.total.toFixed(2)} Lps.</h6>
                        </div>
                        <div class="col-12 mb-3">
                            <h6>Dirección:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.direccion}</h6>
                            <div id="mapa2" style="width: 100%; height: 200px;" class="borde-verde"></div>
                        </div>
                        <div class="col-12 col-md-6">
                            <h6>Estado de la orden:</h6>
                        </div>
                        <div class="col-12 col-md-6 row mb-2 mx-auto">
                            <div class="col-6 p-1 text-center"><button id="boton-tomada" class="boton boton-rojo botones-entregando orden-tomada" onclick="estadoOrden('tomada', '${idOrden}');">Tomada</button></div>
                            <div class="col-6 p-1 text-center"><button id="boton-enCamino" class="boton borde-naranja botones-entregando orden-enCamino" onclick="estadoOrden('enCamino', '${idOrden}');">En camino</button></div>
                            <div class="col-6 p-1 text-center"><button id="boton-enOrigen" class="boton borde-naranja botones-entregando orden-enOrigen" onclick="estadoOrden('enOrigen', '${idOrden}');">En origen</button></div>
                            <div class="col-6 p-1 text-center"><button id="boton-enDestino" class="boton borde-naranja botones-entregando orden-enDestino" onclick="estadoOrden('enDestino', '${idOrden}');">En destino</button></div>
                        </div>
                    </div>
                    <button class="boton boton-naranja float-right mt-2 mr-2" onclick="estadoOrden('entregada', '${idOrden}');">Orden entregada</button>`;

                    cargarMapa2(ordenActual.envio.coordenadas.longitud, ordenActual.envio.coordenadas.latitud);
                    actualizarBotones(idOrden);

                    break;

                case 3:
                    sectionActual.innerHTML =
                        `<div class="titulo-section borde-naranja px-1">Detalle de la entrega</div>
                    <div class="row px-3">
                        <div class="col-12 col-md-6 py-1">
                            <h6>Orden:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.nombre}</h6>
                        </div>
                        <div class="col-12 col-md-6 py-1">
                            <h6>Cliente:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.cliente.nombre}</h6>
                        </div>
                        <div class="col-12 col-md-6 py-1">
                            <h6>Empresa:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.empresa}</h6>
                        </div>
                        <div class="col-12 col-md-6 py-1">
                            <h6>Productos:</h6>
                            <h6 class="texto-gris ml-5">${productos}</h6>
                        </div>
                        <div class="col-12 col-md-6 py-1">
                            <h6>Pago total:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.total.toFixed(2)}Lps. </h6>
                        </div>
                        <div class="col-12 col-md-6 py-1">
                            <h6>Precio base:</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.subtotal.toFixed(2)} Lps.</h6>
                        </div>
                        <div class="col-12 col-md-6 py-1">
                            <h6>ISV (15%):</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.isv.toFixed(2)} Lps.</h6>
                        </div>
                        <div class="col-12 col-md-6 py-1">
                            <h6>Comisión motorista (10%):</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.comisionMotorista.toFixed(2)} Lps.</h6>
                        </div>
                        <div class="col-12 col-md-6 py-1">
                            <h6>Comisión administrador (5%):</h6>
                            <h6 class="texto-gris ml-5">${ordenActual.envio.comisionAdministrador.toFixed(2)} Lps.</h6>
                        </div>
                        <div class="col-12 py-1">
                            <button class="boton boton-naranja float-right mr-1" onclick="irAtras();">Aceptar</button>
                        </div>
                    </div>`;
            }
        })

}

function tomarOrden(idOrden) {
    modalRepartidor = document.getElementById('modal-body-repartidor');

    axios({
        method: 'PUT',
        url: `http://localhost:4200/ordenes/${idOrden}`,
        data: { _id: idRepartidor }
    })
        .then(res => {
            modalRepartidor.innerHTML =
                `<h5 class="titulo-modal mt-2 mb-5 text-center">${res.data.mensaje}</h5>
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
        })
        .catch(error => {
            modalRepartidor.innerHTML =
                `<h4 class="titulo-modal mt-2 mb-5 text-center">${error.data.mensaje}</h4>
                <div class="check mt-3 mb-4 text-center">
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <div class="text-center">
                    <button class="boton boton-blanco borde-verde my-4" onclick="llamarModal('hide'); irAtras(); cambiarSection(1);"><h5 class="p-0 m-0">Aceptar</h5></button>
                </div>`;

            modalRepartidor.parentNode.classList.remove('borde-verde');
            modalRepartidor.parentNode.classList.add('borde-rojo');
            modalRepartidor.parentNode.classList.remove('borde-naranja');

            llamarModal('show');
        })

}

function estadoOrden(estado, idOrden) {
    axios({
        method: 'GET',
        url: `http://localhost:4200/ordenes/${idOrden}`
    })
        .then(res => {
            let o = res.data;

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
                        <h6 class="texto-gris ml-5">${nombreMotorista}</h6>
                    </div>
                    <div class="col-12 py-1">
                        <h6>Dirección de entrega:</h6>
                        <h6 class="texto-gris ml-5">${o.envio.direccion}</h6>
                    </div>
                    <div class="col-12 py-1">
                        <h6>Pago del cliente:</h6>
                        <h6 class="texto-gris ml-5">${o.envio.total.toFixed(2)} Lps.</h6>
                    </div>
                    <div class="col-12 py-1">
                        <h6>Precio base:</h6>
                        <h6 class="texto-gris ml-5">${o.envio.subtotal.toFixed(2)} Lps.</h6>
                    </div>
                    <div class="col-12 py-1">
                        <h6>ISV (15%):</h6>
                        <h6 class="texto-gris ml-5">${o.envio.isv.toFixed(2)} Lps.</h6>
                    </div>
                    <div class="col-12 py-1">
                        <h6>Comisión motorista (10%):</h6>
                        <h6 class="texto-gris ml-5">${o.envio.comisionMotorista.toFixed(2)} Lps.</h6>
                    </div>
                    <div class="col-12 py-1">
                        <h6>Comisión administrador (5%):</h6>
                        <h6 class="texto-gris ml-5">${o.envio.comisionMotorista.toFixed(2)} Lps.</h6>
                    </div>
                    <div class="col-12 py-1 text-center">
                        <button class="boton boton-naranja text-center"><h5 class="b-0 m-0" onclick="llamarModal('hide'); irAtras(); cambiarSection(2);">Finalizado</h5></button>
                    </div>
                </div>`;

                modalRepartidor.parentNode.classList.remove('borde-verde');
                modalRepartidor.parentNode.classList.remove('borde-rojo');
                modalRepartidor.parentNode.classList.add('borde-naranja');

                llamarModal('show');

            }

            axios({
                method: 'PUT',
                url: `http://localhost:4200/ordenes/tomada/${idOrden}`,
                data: o
            })

        })
}

function actualizarBotones(idOrden) {

    axios({
        method: 'GET',
        url: `http://localhost:4200/ordenes/${idOrden}`
    })
        .then(res => {
            let estado = res.data.envio.estado;
            let botones = document.getElementsByClassName('botones-entregando');
            Array.from(botones).forEach(boton => {
                boton.classList.add('borde-naranja');
                boton.classList.remove('boton-rojo');
            });
            document.getElementById(`boton-${estado}`).classList.add('boton-rojo');
            document.getElementById(`boton-${estado}`).classList.remove('borde-naranja');
        })
}

function obtenerParametro(valor){
    valor = valor.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    let expresionRegular = "[\\?&]" + valor + "=([^&#]*)";
    let regex = new RegExp(expresionRegular);
    let r = regex.exec( window.location.href );
    if( r == null )
        return "";
    else
        return decodeURIComponent(r[1].replace(/\ + /g, " "));
}