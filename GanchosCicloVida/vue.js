var app = new Vue({
    el: '#vm',
    data:{
        mensaje: 'Este es el mensaje'
    },
    beforeCreate: function(){
        console.log('Llamando beforeCreate');
    },
    created: function(){
        console.log('Llamando created');
    },
    beforeMount: function(){
        console.log('Llamando beforeMount');
    },
    mounted: function(){
        console.log('Llamando mounted');
    },
    beforeUpdate: function(){
        console.log('Llamando beforeUpdate');
    },
    updated: function(){
        console.log('Llamando updated');
    },
    beforeDestroy: function(){
        console.log('Llamando beforeDestroy');
    },
    destroyed: function(){
        console.log('Llamando destroyed');
    },
    methods:{
        destruir : function(){
            this.$destroy();
        }
    }
})