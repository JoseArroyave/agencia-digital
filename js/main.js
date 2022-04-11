var btnSuscribcion = document.getElementById('btnSuscribirse')

btnSuscribcion.addEventListener('click', function (e) {
  e.preventDefault()
  Swal.fire(
    'Excelente!',
    'Te has suscrito a nuestro newsletter.',
    'success'
  )
})