new Vue({
  el: '#app',
  data: {
    photos: []
  },
  created: function () {
        this.loadPhotos();
  },
  methods: {
      loadPhotos: function() {
      console.log('Load photos');
      axios.get('http://localhost:3000/photos').then(
          (response) => {
            this.photos = response.data.filter(
                currentPhoto => currentPhoto.albumId === 1
            );
            console.log(this.photos);
          }
      );
    },
      deletePhoto: function(index) {
          axios.delete('http://localhost:3000/photos/'+index).then(()=> {
              console.log('deleted from server')
              this.loadPhotos();
            }
          );
      }
  }
});


