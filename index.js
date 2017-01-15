$(function () {
  //var header = $('header')
  //console.log(header[0]);
  //var h = $('#app-header').find('h1');
  //console.log(h);
  // var p = document.createElement('p');
  // p.innerHTML = "Hola a todos !";
  // document.body.appendChild(p);

  // var a = $('<a>',{
  //   href: 'http://platzi.com',
  //   target: '_blank',
  //   html: 'Ir a platzi'
  // });
  //
  // $('#app-body').append(a[0]);
  //
  // //console.log(a.attr('href'));
  // a.attr('href','https://google.com');
  // a.html('ir a google');


  var $h1 = $('h1').addClass('danger');

  setTimeout(function(){
      $h1.toggleClass('danger');
  },1500)

  // $('h1').css({
  //   'font-size': '70px'
  // })


  $('header#app-header')
  .append($('<p>',{html:'Me acaban de crear'}))

console.log($('header#app-header')[0]);
console.log($('#app-header')[0]);




})
