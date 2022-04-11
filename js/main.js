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

// var btnSuscribirse = document.getElementById('btnSuscribirse')
// btnSuscribirse.addEventListener('click', function (e) {
//   e.preventDefault()
//   Swal.fire(
//     'Excelente!',
//     'Te has suscrito a nuestro newsletter.',
//     'success'
//   )
// })