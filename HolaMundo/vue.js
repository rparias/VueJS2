var app = new Vue({
    el: '.vue',
    data:{
        mensaje: 'Hola Mundo con VueJS',
        src: 'https://vuejs.org/images/logo.png'
    },
    methods:{
        mostrarMensaje: function(){
            return this.mensaje;
        }
    }
})