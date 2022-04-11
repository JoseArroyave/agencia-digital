// Sweet alert del boton suscribirse

// Con jQuery
$('#btnSuscribirse').click(function (e) {
  e.preventDefault()
  Swal.fire(
    'Excelente!',
    'Te has suscrito a nuestro newsletter.',
    'success'
  )
})

// JavaScript puro
var btnSuscribirse = document.getElementById('btnSuscribirse')
btnSuscribirse.addEventListener('click', function (e) {
  e.preventDefault()
  Swal.fire(
    'Excelente!',
    'Te has suscrito a nuestro newsletter.',
    'success'
  )
})

// Iniciar Scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#menu-navegacion'
})

// Scroll suavizado
scrollSpy.addEventListener('click', function (event) {
  if (this.hash != '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    })
  }
})