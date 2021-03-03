/* Cuando la pagina carga */
$(document).ready(function () {
  /* Checar a que distancia esta cuando recarga para cambiar navbar */
  let distancia = $(this).scrollTop();
  scroll(distancia);
  if(screen.width <= 768){
    $(".social-bar").removeAttr('hidden');
  }else{
    $(".navbar-nav").removeAttr('hidden');
  }
});

/* Al precionar el boton mostrar mas */
$(document).on("click", "#mostrar_alquiler", function () {
  Loader("alquiler");
  $.ajax({
    url: "../components/alquiler.html",
    success: function (res) {
      $("#alquiler").html(res);
      $("#alquiler").show();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("No cargo..");
    },
  });
});

/* Al precionar el boton mostrar menos */
$(document).on("click", "#menos_alquiler", function () {
  let html = "";
  html =
    '<div class="mostrar_alquiler">' +
    '<button class="btn btn-primary" id="mostrar_alquiler">Mostrar mas</button>' +
    "</div>";
  $("#alquiler").html(html);
  /* Cuando pulsa mostrar menos regresar al inicio de alquiler */
  $("html, body").animate(
    {
      scrollTop: $("#alquiler-scroll").offset().top,
    },
    100
  );
});

/* Al precionar el boton mostrar mas */
$(document).on("click", "#mostrar_venta", function () {
  Loader("venta");
  $.ajax({
    url: "../components/venta.html",
    success: function (res) {
      $("#venta").html(res);
      $("#venta").show();
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("No cargo..");
    },
  });
});

/* Al precionar el boton mostrar menos */
$(document).on("click", "#menos_venta", function () {
  let html = "";
  html =
    '<div class="mostrar_alquiler">' +
    '<button class="btn btn-primary" id="mostrar_venta">Mostrar mas</button>' +
    "</div>";
  $("#venta").html(html);
  /* Cuando pulsa mostrar menos regresar al inicio de ventas */
  $("html, body").animate(
    {
      scrollTop: $("#venta-scroll").offset().top,
    },
    100
  );
});

/* Evento que se ejecuta al hacer Scroll */
$(window).scroll(function () {
  let distancia = $(this).scrollTop();
  scroll(distancia);
});
/*Funcion cambiar estilo del navbar */
function scroll(distancia) {
  if (distancia > 586) {
    $(".navbar").addClass("scrollStyle");
  } else {
    $(".navbar").removeClass("scrollStyle");
  }
}

/* Intento de implementacion de loader */
function Loader(clase) {
  let html =
    '<div class="text-center text-primary">' +
    '<div class="spinner-border" role="status">' +
    '<span class="visually-hidden">Loading...</span>' +
    "</div> </div>";
  $(`#${clase}`).html(html);
}
