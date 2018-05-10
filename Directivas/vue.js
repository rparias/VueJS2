var app = new Vue({
    el: '#vm',
    data:{
        imagen: 'http://lorempixel.com/300/200',
        texto:"Bienvenido al curso",
        cadenaHtml:"<strong>Texto en negrilla</strong>",
        mostrar:true,
        numeroParrafo: 1,
        paises: [{nombre: 'Ecuador'}, {nombre: 'Colombia'}, {nombre: 'Peru'}],
        amigos: ['Bryan', 'Erick', 'Gabby'],
        empleado: {nombre: 'Juan Perez', puesto: 'programador'}
    }
})