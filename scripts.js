

let images;
let imagesArray = [];

// function useImages(images) {
// // var x = images.url;
//     for (var i in images) {
//         console.log('images working');
//         imagesArray.push(images[i]);
//     }

//     imagesArray.forEach(function(img){
//         var pic = $('<img />').attr('src', img.url).attr('title', name).addClass('.pic')

//       $('.images-container').append(pic);

//     });

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



// function loadImages(useImages) {
// $.ajax({
//   url: "data.json"
// }).then(function(data) {
//   images = data.images[0];
//   useImages(images);
// });
// };

// loadImages(useImages);

function loadImages(images) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: 'data.json'
    }).done(function(data){
      resolve(data);
      console.log('data', data)
    }).fail(function(error){
      reject(console.log('error', error))
    })
  })
}

loadImages(images)
.then(function (images) {
// console.log(images)
    images = images;
    for (var i in images) {
        console.log('images working');
        imagesArray.push(images[i]);
        console.log(imagesArray)
    }

    imagesArray.forEach(function(img){
        var pic = $('<img />').attr('src', img.url).attr('title', name).addClass('.pic')

      $('.images-container').append(pic);



})
})

//VERY CLOSE, JUST RUNNING INTO THE SAME INDEXING ERROR (IMGAGES[0]) AS BEFORE

    // var x = images.url;
    // for (var i in images) {
    //     console.log('images working');
    //     imagesArray.push(images[i]);
    // }

    // imagesArray.forEach(function(img){
    //     var pic = $('<img />').attr('src', img.url).attr('title', name).addClass('.pic')

    //   $('.images-container').append(pic);


