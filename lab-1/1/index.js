let photos = [];

function run() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      photos = JSON.parse(xhttp.responseText);
      const filteredPhotos = photos.filter(
        currentPhoto => currentPhoto.albumId === 1 || currentPhoto.albumId === 2
      );
      // photos = filteredPhotos;
      // console.log(photos);
      document.getElementById('photos').innerHTML = photos.length + ' loaded';
    }
  };
  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
  xhttp.send();
}

run();
