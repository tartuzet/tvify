$(function () {
var $container = $('#app-body').find('.tv-shows');
var template = '<article class="tv-show">'+
'<div class="left img-container">'+
'<img src=":img:" alt=":img alt:">'+
'</div>'+
'<div class="right info">'+
'<h1>:name:</h1>'+
'<p>:summary:</p>'+
'</div>'+
'</article>';

function renderShows(shows){
  shows.forEach(function(show){
    console.log(show);
    var article=template
    .replace(':name:',show.name)
    .replace(':img:',show.image.medium)
    .replace(':summary:',show.summary)
    .replace(':img alt:',show.name+" Logo");

    var $article = $(article);
    $article.hide();
    $container.append($article);
    $article.show(2000);

  })
}
//Submit search form


$('#app-body').find('form')
.submit(function (ev){
  ev.preventDefault();
  var busqueda= $(this)
  .find('input[type="text"]')
  .val();

  $container.find('.tv-show').remove();
  $loader = $('<div class="loader">');
  $loader.appendTo($container);
  $.ajax({
    url:'http://api.tvmaze.com/search/shows',
    data:{q:busqueda},
    success: function(res,textStatus,xhr){
      $loader.remove();
      var shows = res.map(function (el) {
        return el.show;
      })
      renderShows(shows);


    }
  })

})


$.ajax({
  url:'http://api.tvmaze.com/shows',
  success: function(shows,textStatus,xhr){
    $container.find('.loader').remove();
    renderShows(shows);
  }
})



})
