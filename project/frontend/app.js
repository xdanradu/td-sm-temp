new Vue({
    el: '#carsApp',
    data: {
        cars: []
    },
    created: function() {
        this.getCars();
    },
    methods: {
        remove: function(id) {
            axios.delete(`http://localhost:3000/cars/${id}`).then(
                (response)=>{
                    this.getCars();
                }
            );
        },
        getCars: function() {
            axios.get('http://localhost:3000/cars').then(
                (response)=>{
                    this.cars = response.data;
                }
            );
        }
    }

});


