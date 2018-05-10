var app = new Vue({
    el: '#vm',
    data:{
        primero: 0,
        segundo: 0,
        tercero: 0,
        cuarto: 0,
        suma: 0
    },
    computed:{
        total: function(){
            return this.primero + this.segundo + this.tercero + this.cuarto;
        }
    }
})