$(function () {
var $tvShowsContainer = $('#app-body').find('.tv-shows');

$tvShowsContainer.on('click','button.like',function (ev){
    var $this = $(this);
    $this.closest('.tv-show').toggleClass('liked');

})

var template = '<article class="tv-show">'+
'<div class="left img-container">'+
'<img src=":img:" alt=":img alt:">'+
'</div>'+
'<div class="right info">'+
'<h1>:name:</h1>'+
'<p>:summary:</p>'+
'<button class="like" >⭐</button>'+
'</div>'+
'</article>';
function renderShows(shows){
  shows.forEach(function(show){
    $tvShowsContainer.find('.loader').remove();
    var article=template
    .replace(':name:',show.name)
    .replace(':img:',show.image.medium)
    .replace(':summary:',show.summary)
    .replace(':img alt:',show.name+" Logo");

    var $article = $(article);
    $tvShowsContainer.append($article.fadeIn(2000));

  })
}
//Submit search form


$('#app-body').find('form')
.submit(function (ev){
  ev.preventDefault();
  var busqueda= $(this)
  .find('input[type="text"]')
  .val();

  $tvShowsContainer.find('.tv-show').remove();
  $loader = $('<div class="loader">');
  $loader.appendTo($tvShowsContainer);
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


if (!localStorage.shows){
$.ajax('http://api.tvmaze.com/shows')
  .then(function(shows){
    $tvShowsContainer.find('.loader').remove();
    localStorage.shows = JSON.stringify(shows);
    renderShows(shows);
  })
}else{
  renderShows(JSON.parse(localStorage.shows));
}


})
