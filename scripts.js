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
        var pic = $('<img />').attr('src', img.url).attr('title', name).addClass('.pic')

      $('.images-container').append(pic)

    })

    $('img').first().addClass('active')

$('.next').click(function () {       //problems using arrow functions here!
    var activeImage = $('img.active')
    console.log(activeImage)
    console.log(activeImage.next())
    var nextImage //do you need to use variables? looks like it
      = activeImage.next().length  //figure out what the length is all about is
      ? activeImage.next()
      : $('img').first() //refresh on ternaries

    activeImage.removeClass('active')
    nextImage.addClass('active')
  })

  $('.prev').click(function () {
    var activeImage = $('img.active')
    var nextImage
      = activeImage.prev().length
      ? activeImage.prev()
      : $('img').last()

    activeImage.removeClass('active')
    nextImage.addClass('active')
  })

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
