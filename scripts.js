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
        var pic = $('<img />').attr('src', img.url).attr('title', name).addClass('.pic')

      $('.images-container').append(pic);

    });

    $('img').first().addClass('active');

$('.next').click(function () {       //problems using arrow functions here!
    var activeImage = $('img.active')
    var nextImage = activeImage.next().length ? activeImage.next(): $('img').first();
    activeImage.removeClass('active');
    nextImage.addClass('active');
  });

  $('.prev').click(function () {
    var activeImage = $('img.active')
    var nextImage = activeImage.prev().length ? activeImage.prev() : $('img').last();
    activeImage.removeClass('active');
    nextImage.addClass('active');
  });

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
