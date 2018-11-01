(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); // End of use strict

function consultarProyectos(id){
  var nombreProyecto = ''
  var images = 'assets/images/portfolio/'
  var descripcion = 'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!'
  var link = 'www.ejemplo.com'


  /* Aquí irá un get para consutar la información si existe una DB */


  modals(id, nombreProyecto, images, descripcion, link)
}

function modals(id, nombreProyecto, images, descripcion, link){
  // alert(id)
  switch(id){
    case "proyectoVinculaciones":
      nombreProyecto = 'Vinculaciones'
      $('#portfolioModal').find('.text-uppercase').text(nombreProyecto)
      $('#portfolioModal').find('img').attr('src' ,images+'vinculacion.jpg')
      $('#portfolioModal p:last').text(descripcion)
      $('#portfolioModal a').text(link)
      $('#portfolioModal').modal('show')
      break;
    case "proyectoErp":
      nombreProyecto = 'EdRP'
      $('#portfolioModal').find('.text-uppercase').text(nombreProyecto)
      $('#portfolioModal').find('img').attr('src' ,images+'Erp.png')
      $('#portfolioModal p:last').text(descripcion)
      $('#portfolioModal a').text(link)
      $('#portfolioModal').modal('show')
      break;
    case "proyectoLinkt":
      nombreProyecto = 'Link-t'
      $('#portfolioModal').find('.text-uppercase').text(nombreProyecto)
      $('#portfolioModal').find('img').attr('src' ,images+'linkt.jpg')
      $('#portfolioModal p:last').text(descripcion)
      $('#portfolioModal a').text(link)
      $('#portfolioModal').modal('show')
      break;
    case "proyectoUmecasApac":
      nombreProyecto = 'Umecas/Apac'
      $('#portfolioModal').find('.text-uppercase').text(nombreProyecto)
      $('#portfolioModal').find('img').attr('src' ,images+'umecas_apac.jpg')
      $('#portfolioModal p:last').text(descripcion)
      $('#portfolioModal a').text(link)
      $('#portfolioModal').modal('show')
      break;
    case "proyectoTrinning":
      nombreProyecto = 'Trinning'
      $('#portfolioModal').find('.text-uppercase').text(nombreProyecto)
      $('#portfolioModal').find('img').attr('src' ,images+'trinning.jpg')
      $('#portfolioModal p:last').text(descripcion)
      $('#portfolioModal a').text(link)
      $('#portfolioModal').modal('show')
      break;
  }

}


