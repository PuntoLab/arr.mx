$(document).ready(function(){
	var nombreAnimacion_movil = 'animated fadeIn';
  var finAnimacion = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	$('a[href*=#us]').click(function(){

    	$('#services').hide('fast');
    	$('#contact').hide('fast');
       $('#customers').hide('fast');
       $('#team').hide('fast');

    	$('.ingles section#us').css('display','block').addClass(nombreAnimacion_movil).one(finAnimacion, function(){
    	$(this).removeClass(nombreAnimacion_movil);
    	});
  	});
  	$('a[href*=#services]').click(function(){

    	$('#us').hide('fast');
    	$('#contact').hide('fast');
       $('#customers').hide('fast');
       $('#team').hide('fast');

    	$('.ingles section#services').css('display','block').addClass(nombreAnimacion_movil).one(finAnimacion, function(){
    	$(this).removeClass(nombreAnimacion_movil);
    	});
  	});
  	$('a[href*=#contact]').click(function(){

    	$('#services').hide('fast');
    	$('#us').hide('fast');
      $('#customers').hide('fast');
      $('#team').hide('fast');

    	$('.ingles section#contact').css('display','block').addClass(nombreAnimacion_movil).one(finAnimacion, function(){
    	$(this).removeClass(nombreAnimacion_movil);
    	});
  	});
    $('a[href*=#team]').click(function(){

      $('#services').hide('fast');
      $('#us').hide('fast');
      $('#contact').hide('fast');
      $('#customers').hide('fast');
      $('#team').hide('fast');

      $('.ingles section#team').css('display','block').addClass(nombreAnimacion_movil).one(finAnimacion, function(){
      $(this).removeClass(nombreAnimacion_movil);
      });
    });
    $('a[href*=#customers]').click(function(){

      $('#services').hide('fast');
      $('#us').hide('fast');
      $('#contact').hide('fast');
      $('#team').hide('fast');

      $('.ingles section#customers').css('display','block').addClass(nombreAnimacion_movil).one(finAnimacion, function(){
      $(this).removeClass(nombreAnimacion_movil);
      });
    });

    $('a[href*=#]').click(function(){

      $('#flecha-azul').css('opacity','.3').click(function(){
      //$('#aviso-privacidad').hide('fast');
      $('#us').hide('fast');
      $('#contact').hide('fast');
      $('#team').hide('fast');
      $('#customers').hide('fast');
      $('#services').hide('fast');
      //$('#home').hide('fast');
      $(this).css('opacity','0');
      });
    }); 
});