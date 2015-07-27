$(document).ready(function() {
  
  $('.flexslider').flexslider({
    animation: "slide"
  });

  $('.movil #espanol img').click(function(){

    $('#flecha-azul').css('display','none');
    $('#movil-ingles').css('display','none');
    $('#movil-espanol').css('display','block');
  });

  $('.movil #ingles img').click(function(){
    $('#movil-espanol').css('display','none');
    $('#movil-ingles').css('display','block');    
    $('#flecha-azul').css('display','none');
  });

  $('.pc #espanol img').click(function(){
    $('#pc-ingles').css('display','none');
    $('#pc-espanol').css('display','block');
  });

  $('.pc #ingles img').click(function(){
    //alert('hi');

    $('#pc-ingles.pc ').css('display','block');
    $('.flexslider ').css('display','block');
    $('#pc-espanol.pc ').css('display','none');

    $('.flexslider').flexslider({
    animation: "slide"
  });
  });
/***********animated.css PC***********************************************************/

  var nombreAnimacion = 'animated zoomInDown';
  var nombreAnimacionPC = 'animated bounceInRight';
  var finAnimacion = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'


  $('footer p a').on('click',function(){
    
      $('.movil section#clientes').hide('fast');
      $('.movil section#equipo').hide('fast');
      $('.movil section#contacto').hide('fast');
      $('.movil section#nosotros').hide('fast');
      $('.movil section#servicios').hide('fast');
      $('.movil section#inicio').hide('fast');
  });

  $('a[href*=#]').on('click',function(){
    /*$('#flecha-azul').css('display','block');*/
    $('#regresar').on('click',function(){
      
      //$(this).css('display','none');
      $('.movil section#clientes').hide('fast');
      $('.movil section#equipo').hide('fast');
      $('.movil section#contacto').hide('fast');
      $('.movil section#nosotros').hide('fast');
      $('.movil section#servicios').hide('fast');
      $('.movil section#inicio').hide('fast');
    });
  });
  $('a[href*=#ini]').on('click',function(){

    $('.movil section#clientes').css('display','none');
    $('.movil section#equipo').css('display','none');
    $('.movil section#contacto').css('display','none');
    $('.movil section#nosotros').css('display','none');
    $('.movil section#servicios').css('display','none');
    //$('.movil section#inicio').fadeIn();
    $('.movil section#inicio').css('display','block').addClass(nombreAnimacion).one(finAnimacion, function(){
    $(this).removeClass(nombreAnimacion);

    });

    $('.pc section#clientes').css('display','none');
    $('.pc section#equipo').css('display','none');
    $('.pc section#contacto').css('display','none');
    $('.pc section#nosotros').css('display','none');
    $('.pc section#servicio').css('display','none');
    //$('.pc section#inicio').fadeIn();
    $('.pc section#inicio').css('display','block').addClass(nombreAnimacionPC).one(finAnimacion, function(){
    //$(this).removeClass(nombreAnimacionPC);

    });
  });
  $('a[href*=#nos]').on('click',function(){

    $('.movil section#clientes').css('display','none');
    $('.movil section#equipo').css('display','none');
    $('.movil section#contacto').css('display','none');
    $('.movil section#inicio').css('display','none');
    $('.movil section#servicios').css('display','none');
    
    $('.movil section#nosotros').css('display','block').addClass(nombreAnimacion).one(finAnimacion, function(){
   
      $(this).removeClass(nombreAnimacion);
    });

    $('.pc section#clientes').css('display','none');
    $('.pc section#equipo').css('display','none');
    $('.pc section#contacto').css('display','none');
    $('.pc section#inicio').css('display','none');
    $('.pc section#servicio').css('display','none');
    
    $('.pc section#nosotros').css('display','block').addClass(nombreAnimacionPC).one(finAnimacion, function(){
    //$(this).removeClass(nombreAnimacionPC);

    });
  });
  
  $('a[href*=#serv]').on('click',function(){

    $('.movil section#clientes').css('display','none');
    $('.movil section#equipo').css('display','none');
    $('.movil section#contacto').css('display','none');
    $('.movil section#inicio').css('display','none');
    $('.movil section#nosotros').css('display','none');
    //$('.movil section#servicios').fadeIn();
    $('.movil section#servicios').css('display','block').addClass(nombreAnimacion).one(finAnimacion, function(){
    $(this).removeClass(nombreAnimacion);

    });

    $('.pc section#clientes').css('display','none');
    $('.pc section#equipo').css('display','none');
    $('.pc section#contacto').css('display','none');
    $('.pc section#inicio').css('display','none');
    $('.pc section#nosotros').css('display','none');
    //$('.pc section#servicios').fadeIn();
    $('.pc section#servicio').css('display','block').addClass(nombreAnimacionPC).one(finAnimacion, function(){
    //$(this).removeClass(nombreAnimacionPC);

    });
  });
   
  $('a[href*=#cont]').on('click',function(){

    $('.movil section#clientes').css('display','none');
    $('.movil section#equipo').css('display','none');
    $('.movil section#servicios').css('display','none');
    $('.movil section#inicio').css('display','none');
    $('.movil section#nosotros').css('display','none');
    //$('.movil section#contacto').fadeIn();
    $('.movil section#contacto').css('display','block').addClass(nombreAnimacion).one(finAnimacion, function(){
    $(this).removeClass(nombreAnimacion);

    });

    $('.pc section#clientes').css('display','none');
    $('.pc section#equipo').css('display','none');
    $('.pc section#servicio').css('display','none');
    $('.pc section#inicio').css('display','none');
    $('.pc section#nosotros').css('display','none');
    //$('.pc section#contacto').fadeIn();
    $('.pc section#contacto').css('display','block').addClass(nombreAnimacionPC).one(finAnimacion, function(){
    //$(this).removeClass(nombreAnimacionPC);

    });
  });

  $('a[href*=#eq]').on('click',function(){

    $('.movil section#clientes').css('display','none');
    $('.movil section#contacto').css('display','none');
    $('.movil section#servicios').css('display','none');
    $('.movil section#inicio').css('display','none');
    $('.movil section#nosotros').css('display','none');
    //$('.movil section#equipo').fadeIn();
    $('.movil section#equipo').css('display','block').addClass(nombreAnimacion).one(finAnimacion, function(){
    $(this).removeClass(nombreAnimacion);

    });

    $('.pc section#clientes').css('display','none');
    $('.pc section#contacto').css('display','none');
    $('.pc section#servicio').css('display','none');
    $('.pc section#inicio').css('display','none');
    $('.pc section#nosotros').css('display','none');
    //$('.pc section#equipo').fadeIn();
    $('.pc section#equipo').css('display','block').addClass(nombreAnimacionPC).one(finAnimacion, function(){
    //$(this).removeClass(nombreAnimacionPC);


    });
  });

  $('a[href*=#cli]').on('click',function(){

    $('.movil section#equipo').css('display','none');
    $('.movil section#contacto').css('display','none');
    $('.movil section#servicios').css('display','none');
    $('.movil section#inicio').css('display','none');
    $('.movil section#nosotros').css('display','none');
    //$('.movil section#clientes').fadeIn();
    $('.movil section#clientes').css('display','block').addClass(nombreAnimacion).one(finAnimacion, function(){
    $(this).removeClass(nombreAnimacion);

    });

    $('.pc section#equipo').css('display','none');
    $('.pc section#contacto').css('display','none');
    $('.pc section#servicio').css('display','none');
    $('.pc section#inicio').css('display','none');
    $('.pc section#nosotros').css('display','none');
    //$('.pc section#clientes').fadeIn();
    $('.pc section#clientes').css('display','block').addClass(nombreAnimacionPC).one(finAnimacion, function(){
    //$(this).removeClass(nombreAnimacionPC);

    });
  });



});