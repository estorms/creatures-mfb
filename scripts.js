console.log('scripts working');

$(document).ready( () => {

let images;
let imagesArray = [];

function useImages(images) {
// var x = images.url;
    for (var i in images) {
        console.log('images working');
        imagesArray.push(images[i]);
    }

    imagesArray.forEach(function(img){
        var pic = $('<img />').attr('src', img.url).attr('title', name)

      $('.images-container').append(pic)
    })

    $('img').first().addClass('active')
    $('img').second().addClass('hidden')


};

function loadImages(useImages) {
$.ajax({
  url: "data.json"
}).then(function(data) {
  images = data.images[0];
  useImages(images);
});
};

loadImages(useImages);


})
