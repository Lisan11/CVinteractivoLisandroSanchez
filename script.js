<script src="script.js"></script>

<script>
var titulos = document.querySelectorAll('#Contacto');
function parpadear() {
for (var i = 0; i < titulos.length; i++) {
  var titulo = titulos[i];
  if (titulo.style.visibility === 'visible') {
    titulo.style.visibility = 'hidden';
  } else {
    titulo.style.visibility = 'visible';
  }
}
}
setInterval(parpadear, 500);
</script>