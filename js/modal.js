/* importo la data de data.js */
import { Alquiler, Venta } from "./data.js";

/* Intanciar modal de boostrap con su configuracion */
var myModal = new bootstrap.Modal(document.getElementById("mymodal"), {
  keyboard: false,
  focus: true,
  backdrop: true,
});

/* Boton para mostrar y construir el modal*/
/* Alquiler */
$(document).on("click", ".detallesA", function () {
  let id = $(this).attr("data-id");

  $(".modal-title").text(Alquiler[id].nombre);
  $(".capacidad-yate").text(`Capacidad: ${Alquiler[id].capacidad}`);
  $(".alquiler-img1").attr("src", Alquiler[id].img1);
  $(".alquiler-img2").attr("src", Alquiler[id].img2);
  $(".alquiler-img3").attr("src", Alquiler[id].img3);
  $(".alquiler-img4").attr("src", Alquiler[id].img4);
  $(".alquiler-img5").attr("src", Alquiler[id].img5);
  $(".alquiler-img6").attr("src", Alquiler[id].img6);
  $(".alquiler-img7").attr("src", Alquiler[id].img7);
  $(".alquiler-img8").attr("src", Alquiler[id].img8);
  $(".alquiler-img9").attr("src", Alquiler[id].img9);
  $(".alquiler-img10").attr("src", Alquiler[id].img10);
  $(".nombre-yate").text(Alquiler[id].nombre);

  /* Limpiar ul equipos */
  $(".equipo-yate").empty();
  /* Agregar equipos li a ul  */
  let equipos = Alquiler[id].equipo;
  for (const equipo in equipos) {
    if (equipos[equipo] != "") {
      $(".equipo-yate").append(`<li><i class="fas fa-anchor"></i> ${equipos[equipo]}</li>`);
    }
  }

  /* Limpiar ul incluye */
  $(".incluye-yate").empty();
  /* Agregar incluye li a ul  */
  let incluye = Alquiler[id].incluye;
  for (const incluy in incluye) {
    if (incluye[incluy] != "") {
      $(".incluye-yate").append(`<li><i class="fas fa-anchor"></i> ${incluye[incluy]}</li>`);
    }
  }
  myModal.show();
});
/* Boton para mostrar y construir el modal*/
/* Ventas */
$(document).on("click", ".detallesV", function () {
  let id = $(this).attr("data-id");

  $(".modal-title").text(Venta[id].nombre);
  $(".capacidad-yate").text(`Capacidad: ${Alquiler[id].capacidad}`);
  $(".alquiler-img1").attr("src", Venta[id].img1);
  $(".alquiler-img2").attr("src", Venta[id].img2);
  $(".alquiler-img3").attr("src", Venta[id].img3);
  $(".alquiler-img4").attr("src", Venta[id].img4);
  $(".alquiler-img5").attr("src", Venta[id].img5);
  $(".alquiler-img6").attr("src", Venta[id].img6);
  $(".alquiler-img7").attr("src", Venta[id].img7);
  $(".alquiler-img8").attr("src", Venta[id].img8);
  $(".alquiler-img9").attr("src", Venta[id].img9);
  $(".alquiler-img10").attr("src", Venta[id].img10);
  $(".nombre-yate").text(Venta[id].nombre);

  /* Limpiar ul equipos */
  $(".equipo-yate").empty();
  /* Agregar equipos li a ul  */
  let equipos = Venta[id].equipo;
  for (const equipo in equipos) {
    if (equipos[equipo] != "") {
      $(".equipo-yate").append(`<li>${equipos[equipo]}</li>`);
    }
  }

  /* Limpiar ul incluye */
  $(".incluye-yate").empty();
  /* Agregar incluye li a ul  */
  let incluye = Venta[id].incluye;
  for (const incluy in incluye) {
    if (incluye[incluy] != "") {
      $(".incluye-yate").append(`<li>${incluye[incluy]}</li>`);
    }
  }
  myModal.show();
});
