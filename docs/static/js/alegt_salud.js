var u_test_loc = {lon : -90.492634, lat: 14.649366};
//var ulat = 14.649366;
//var ulon = -90.492634;

// LISTADO DE HOSPITALES CON AREA DE AISLAMIENTO

var hospitales_ca = {
  "type": "FeatureCollection",
  "name": "hospitales_ca",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
    { "type": "Feature", "properties": { "servicio": "Hospital Distrital Sayaxché", "tipo_serv": "Hospital", "municipio": "Sayaxché", "x_coord": -90.180946699576694, "y_coord": 16.52025999979633, "telefono": "7928-6127", "direccion": "Barrio la Esperanza Zona 4, Sayaxché, Petén", "departamen": "Petén" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -90.180946699576694, 16.52025999979633 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital De San Benito", "tipo_serv": "Hospital", "municipio": "San Benito", "x_coord": -89.912636609095088, "y_coord": 16.912989693541572, "telefono": "7932-1111", "direccion": "9ª Calle entre Av. Francisco Archila y 6ª. Av. \"A\" Zona 3, San Benito, Petèn", "departamen": "Petèn" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -89.912636609095088, 16.912989693541572 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital De Melchor De Mencos", "tipo_serv": "Hospital", "municipio": "Melchor De Mencos", "x_coord": -89.152844398885932, "y_coord": 17.059648045794667, "telefono": "7926-5107", "direccion": "Barrio Fallabón, Melchor de Mencos, Petén", "departamen": "Petén" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -89.152844398885932, 17.059648045794667 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Regional De Huehuetenango", "tipo_serv": "Hospital", "municipio": "Huehuetenango", "x_coord": -91.51551343307537, "y_coord": 15.316108699689298, "telefono": "7931-4602", "direccion": "Complejo Institucional las Lagunas zona 10, Huehuetenango", "departamen": "Huehuetenango" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -91.515513433075384, 15.316108699689298 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Regional De Zacapa", "tipo_serv": "Hospital", "municipio": "Zacapa", "x_coord": -89.524882852653818, "y_coord": 14.967313911310441, "telefono": "7931-6565", "direccion": "8a. Av. Final Barrio Cementerio Nuevo, Zacapa", "departamen": "Zacapa" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -89.524882852653818, 14.967313911310443 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional De Chiquimula", "tipo_serv": "Hospital", "municipio": "Chiquimula", "x_coord": -89.536561076739844, "y_coord": 14.801911005275324, "telefono": "7931-5555", "direccion": "2da. Calle 14-71 Zona1. Chiquimula", "departamen": "Chiquimula" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -89.536561076739844, 14.801911005275324 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional De Coatepeque Juan José Ortega", "tipo_serv": "Hospital", "municipio": "Coatepeque", "x_coord": -91.869530241429629, "y_coord": 14.699138734136469, "telefono": "7932-0501 - 7932-0502", "direccion": "5ta. Calle 9na. Avenida Zona 4, Barrio Colombita, Coatepeque, Quetzaltenango", "departamen": "Quetzaltenango" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -91.869530241429629, 14.699138734136469 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional Rodolfo Robles De Quetzaltenango", "tipo_serv": "Hospital", "municipio": "Quetzaltenango", "x_coord": -91.529193354290541, "y_coord": 14.832848386608777, "telefono": "7931-3636", "direccion": "Diagonal 11 Zona 1, Quetzaltenango, Quetzaltenango", "departamen": "Quetzaltenango" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -91.529193354290541, 14.832848386608777 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional De Occidente", "tipo_serv": "Hospital", "municipio": "Quetzaltenango", "x_coord": -91.540036679051013, "y_coord": 14.85879689052819, "telefono": "7761-2449", "direccion": "0 Calle 36-40 Zona 8 Colonia San Isidro, Quetzaltenango", "departamen": "Quetzaltenango" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -91.540036679051013, 14.85879689052819 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional Malacatán \"Profesor Eberto José Velasco\"", "tipo_serv": "Hospital", "municipio": "Malacatán", "x_coord": -92.090246382313154, "y_coord": 14.894470622671056, "telefono": "7776-9519", "direccion": "Comunidad Agraria la Montañita, Malacatán, San Marcos", "departamen": "San Marcos" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -92.090246382313154, 14.894470622671056 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional De San Marcos \"Dr Moises Villagran Mazariegos\"", "tipo_serv": "Hospital", "municipio": "San Marcos", "x_coord": -91.806526021227739, "y_coord": 14.953724540697264, "telefono": "7774-0474", "direccion": "5 calle 19-22 zona 5, San Marcos, San Marcos", "departamen": "San Marcos" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -91.806526021227739, 14.953724540697264 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Roosevelt", "tipo_serv": "Hospital", "municipio": "Guatemala", "x_coord": -90.542765949428073, "y_coord": 14.613028416367293, "telefono": "2321-7400", "direccion": "Calzada Roosevelt Zona 11, Guatemala, C.A.", "departamen": "Guatemala" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -90.542765949428073, 14.613028416367293 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital San Juan De Dios", "tipo_serv": "Hospital", "municipio": "Guatemala", "x_coord": -90.521018009645303, "y_coord": 14.64046960350581, "telefono": "2321-9191", "direccion": "1a Avenida 10-50, zona 1", "departamen": "Guatemala" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -90.521018009645303, 14.64046960350581 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Antituberculoso San Vicente", "tipo_serv": "Hospital", "municipio": "Guatemala", "x_coord": -90.540405705062781, "y_coord": 14.629791575098006, "telefono": "2270-9292 EXT. 138", "direccion": "11 Avenida \"A\" 12-30 zona 7, Colonia La Verbena", "departamen": "Guatemala" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -90.540405705062781, 14.629791575098006 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional De Barillas", "tipo_serv": "HOSPITAL", "municipio": "Santa Cruz Barillas", "x_coord": -91.322761, "y_coord": 15.804473, "telefono": "7780-0921", "direccion": "5ta calle 6-68 zona 6 barrillas Huehuetenango", "departamen": "Huehuetenango" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -91.322761, 15.804473 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital De La Amistad Japón Guatemala", "tipo_serv": "Hospital", "municipio": "Puerto Barrios", "x_coord": -88.582325, "y_coord": 15.695115, "telefono": "7932-1818", "direccion": "Colonia San Manuel, Santo Tomas de Castilla, Puerto Barrios", "departamen": "Izabal" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -88.582325, 15.695115 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional Infantil \"Elisa Martínez\"", "tipo_serv": "Hospital", "municipio": "Puerto Barrios", "x_coord": -88.591102, "y_coord": 15.726002, "telefono": "7932-0700 EXT. 111 - 7948-6997", "direccion": "14 calle entre 14 y 15 ave. Puerto Barrios, Izabal", "departamen": "Izabal" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -88.591102, 15.726002 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Infantil De Infectología Y Rehabilitación", "tipo_serv": "Hospital", "municipio": "Guatemala", "x_coord": -90.54499685233867, "y_coord": 14.613084916124077, "telefono": "2247-3800", "direccion": "9a. Avenida 7-01 zona 11, Guatemala", "departamen": "Guatemala" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -90.54499685233867, 14.613084916124077 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional De Escuintla", "tipo_serv": "Hospital", "municipio": "Escuintla", "x_coord": -90.773034058921169, "y_coord": 14.286311729925607, "telefono": "7931-4151", "direccion": "Km 59.5 carretera a Taxisco, Escuintla", "departamen": "Escuintla" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -90.773034058921169, 14.286311729925607 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Santa Elena", "tipo_serv": "Hospital", "municipio": "Santa Cruz Del Quiché", "x_coord": -91.157685361111405, "y_coord": 15.031303460522928, "telefono": "7790-3333", "direccion": "Salida a San Antonio Ilotenango, zona 3", "departamen": "Quiché" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -91.157685361111405, 15.031303460522928 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional De Cobán", "tipo_serv": "Hospital", "municipio": "Cobán", "x_coord": -90.372480645858289, "y_coord": 15.478641542926788, "telefono": "7931-6333", "direccion": "8a. Calle 1-24, zona 11", "departamen": "Alta Verapaz" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -90.372480645858289, 15.478641542926788 ] ] } },
    { "type": "Feature", "properties": { "servicio": "Hospital Nacional \"Ernestina Garcia Vda De Recinos\" Jutiapa", "tipo_serv": "Hospital", "municipio": "Jutiapa", "x_coord": -89.888771042312314, "y_coord": 14.287622529863755, "telefono": "78444190 - 78444191", "direccion": "Barrio Latino, Jutiapa Zona 1", "departamen": "Jutiapa" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -89.888771042312314, 14.287622529863755 ] ] } }
  ]
}


var marker_u = {};
var ucoords = {lat: "", lon: ""};
// var index = $.getJSON("static/js/ss_mod.json", function(json) { index = new KDBush(json.features, p => p.geometry.coordinates[0][0],p => p.geometry.coordinates[0][1]);});


// INICIO DE SCRIPT

$(document).ready(function() {

  if ($('#map').length){

    // initialize the map
    var map = L.map('map').setView([15.753, -90.291], 7);
    // load a tile layer
    var mapa = L.tileLayer('https://raw.githubusercontent.com/SparkProjects/guatemala-tiles/master/tiles/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      detectRetina: false,
      maxZoom: 15,
      minZoom: 7,
      errorTileUrl: 'https://raw.githubusercontent.com/SparkProjects/guatemala-tiles/master/tiles/fallbacktile.png'
    }).addTo(map);

    //  DEFINIENDO LOS ICONO PARA LAS NUEVAS COSAS
    var i_usuario = L.icon({
      iconUrl: 'static/img/usuario.png',
      iconRetinaUrl: 'static/img/usuario.png',
      shadowUrl: 'static/img/sombra.png',
      shadowRetinaUrl: 'static/img/sombra.png',

      iconSize: [25, 33],
      shadowSize: [25, 25],
      iconAncor: [0, 0],
      shadowAnchor: [2, 7],
      popupAnchor: [0, -10]
    });
    var i_hospitales_a = L.icon({
      iconUrl: 'static/img/hospital_a.png',
      iconRetinaUrl: 'static/img/hospital_a.png',
      shadowUrl: 'static/img/sombra.png',
      shadowRetinaUrl: 'static/img/sombra.png',

      iconSize: [25, 33],
      shadowSize: [25, 25],
      iconAncor: [0, 0],
      shadowAnchor: [2, 7],
      popupAnchor: [0, -10]
    });
    var i_hospitales = L.icon({
      iconUrl: 'static/img/hospital.png',
      iconRetinaUrl: 'static/img/hospital.png',
      shadowUrl: 'static/img/sombra.png',
      shadowRetinaUrl: 'static/img/sombra.png',

      iconSize: [25, 33],
      shadowSize: [25, 25],
      iconAncor: [0, 0],
      shadowAnchor: [2, 7],
      popupAnchor: [0, -10]
    });
  }

  // BOTONES DEL MENU DE OPCIONES
/*
  $('#ubicacion_u').click(function(){
    ubicacion_u();
    /*console.log(ucoords);
    if (ucoords.lon != "") {
      ubicacion_u_m(ucoords);
    }

  });*/

  function ubicacion_u_m(usuario){
    if (!$.isEmptyObject(marker_u)) {
      map.removeLayer(marker_u);
    }
      marker_u = L.marker([usuario.lat, usuario.lon], {icon: i_usuario}).addTo(map);
      map.setView(L.latLng(usuario.lat, usuario.lon),14,animate=true);
  };

  var h_aislamiento = false;
  $("#ubicacion_hca").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(c_hospitales_ca)) {
      //$(this).removeClass('is-focused');
      map.removeLayer(c_hospitales_ca);
    } else {
      h_aislamiento = true;
      ubicacion_u();
      //$(this).addClass('is-focused');
    }
  });

  var c_hospitales_ca = {};
  function salud_aislados(){
    h_aislamiento = false;
    // CARGAR LA CAPA CON LOS HOSPITALES CON AISLAMIENTO ESPECIAL
    c_hospitales_ca = L.geoJSON(hospitales_ca, {
      pointToLayer : function (feature, latlng) {
        return L.marker(latlng, {icon: i_hospitales_a});
      },
      onEachFeature: function(feature, layer){
        layer.bindPopup(//'<div class="card">'+
          //'<div class="card-content">'+
          '<p class="title is-6 has-text-centered">'+
          feature.properties.servicio+
          '</p>'+
          '<div class="content">'+
          '<p class="has-text-justified is-marginless">'+
          '<b>Dirección:</b><br>'+
          feature.properties.direccion+
          '</p>'+
          '<p class="has-text-justified">'+
          '<b>Teléfono:</b><br>'+
          feature.properties.telefono+
          '</p>'+
          '</div>'+
          //'</div>'+
          '<footer class="card-footer">'+
          '<a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination='+feature.properties.y_coord+','+feature.properties.x_coord+'&origin='+ucoords.lat+','+ucoords.lon+'" class="card-footer-item"><span class="icon is-medium"><i class="fas fa-2x fa-map-marked-alt"></i></span></a>'+
          '<a target="_blank" href="https://www.waze.com/ul?ll='+feature.properties.y_coord+','+feature.properties.x_coord+'&navigate=yes&zoom=15" class="card-footer-item"><span class="icon is-medium"><i class="fab fa-2x fa-waze"></i></span></a>'+
          //'<a target="_blank" href="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]='+feature.properties.y_coord+'&dropoff[longitude]='+feature.properties.x_coord+'&dropoff[nickname]=" class="card-footer-item"><span class="icon is-medium"><i class="fab fa-2x fa-uber"></i></span></a>'+
          '</footer>'
          //'</div>'
          , {maxWidth : 180,
            closeButton: false}
          );
        }
      }).addTo(map);
      map.setView([ucoords.lat, ucoords.lon], 9);
  }


  var c_hospitales_c = {};
  // variable de control para mostrar los hospitales cercanos
  var h_cercanos = false;
  $("#ubicacion_hc").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(c_hospitales_c)) {
      map.removeLayer(c_hospitales_c);
    } else {
    h_cercanos = true;
    ubicacion_u();}
    //salud_cercanos();
  });

  $("#b_e_no_geo").click(function(event) {
    event.preventDefault();
    if(!$('#e_no_geo').hasClass('is-hidden')) {
      $('#e_no_geo').addClass('is-hidden');
    }
  });

  $("#b_e_no_loc").click(function(event) {
    event.preventDefault();
    if(!$('#e_no_loc').hasClass('is-hidden')) {
      $('#e_no_loc').addClass('is-hidden');
    }
  });

  $("#b_e_no_dat").click(function(event) {
    event.preventDefault();
    if(!$('#e_no_dat').hasClass('is-hidden')) {
      $('#e_no_dat').addClass('is-hidden');
    }
  });

  $("#b_e_no_gua").click(function(event) {
    event.preventDefault();
    if(!$('#e_no_gua').hasClass('is-hidden')) {
      $('#e_no_gua').addClass('is-hidden');
    }
  });

  // ACTIVAR NOTIFICAION DE ERROR AL MANEJAR LA UBICACIÓN

  function error_no_geo(){
    if ($('#e_no_geo').hasClass('is-hidden')) {
      $('#e_no_geo').removeClass('is-hidden');
    }
  }

  function error_no_loc(){
    if ($('#e_no_loc').hasClass('is-hidden')) {
      $('#e_no_loc').removeClass('is-hidden');
    }
  }

  function error_no_dat(){
    if ($('#e_no_dat').hasClass('is-hidden')) {
      $('#e_no_dat').removeClass('is-hidden');
    }
  }

  function error_no_gua(){
    if ($('#e_no_gua').hasClass('is-hidden')) {
      $('#e_no_gua').removeClass('is-hidden');
    }
  }

  // FUNCION PARA OBTENER LA UBICACIÓN DEL USUARIO

  function ubicacion_u(){
    var opciones = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
        ucoords.lat = pos.coords.latitude;
        ucoords.lon = pos.coords.longitude;
        //console.log(ucoords);
        ubicacion_u_m(ucoords);
        if(h_cercanos){
          salud_cercanos();
        }
        if(h_aislamiento){
          salud_aislados();
        }
    }

    function error(err) {
      //console.warn(`ERROR(${err.code}): ${err.message}`);
      error_no_loc();
    }

    if (!navigator.geolocation) {
      //status.textContent = 'Geolocation is not supported by your browser';
      error_no_geo();
    } else {
      //status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error, opciones);
      //console.log(pos.coords.latitude);
    }
  }

  // PRUEBAS PARA ENCONTRAR LOS PUNTOS CERCANOS A LA UBICACION DEL USUSARIO

  function salud_cercanos(){
    h_cercanos = false;
    if (ucoords.lat != "") {
      // var resultados = around(index, ucoords.lon, ucoords.lat,5);
      $.getJSON( "https://alertagt.herokuapp.com/ll?lon="+ucoords.lon+"&lat="+ucoords.lat, function(resultados) {
      //console.log(resultados);
        if (resultados.hasOwnProperty('mensaje')) {
          error_no_gua();
        } else {
          c_hospitales_c = L.geoJSON(resultados, {
            pointToLayer : function (feature, latlng) {
              return L.marker(latlng, {icon: i_hospitales});
            },
            onEachFeature: function(feature, layer){
              //console.log(feature.properties);
              layer.bindPopup(//'<div class="card">'+
                //'<div class="card-content">'+
                '<p class="title is-5 has-text-centered">'+
                feature.properties.tipo_serv+ ' ' + feature.properties.servicio +
                '</p>'+
                //'<div class="content">'+
                '<p class="subtitle is-6 has-text-centered">'+
                //'<b>Municipio, departamento:</b><br>'+
                feature.properties.municipio+ ', ' +feature.properties.departamen+
                '</p>'+
                //'</div>'+
                //'</div>'+
                '<footer class="card-footer">'+
                '<a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination='+feature.properties.y_coord+','+feature.properties.x_coord+'&origin='+ucoords.lat+','+ucoords.lon+'" class="card-footer-item"><span class="icon is-medium"><i class="fas fa-2x fa-map-marked-alt"></i></span></a>'+
                '<a target="_blank" href="https://www.waze.com/ul?ll='+feature.properties.y_coord+','+feature.properties.x_coord+'&navigate=yes&zoom=15" class="card-footer-item"><span class="icon is-medium"><i class="fab fa-2x fa-waze"></i></span></a>'+
                //'<a target="_blank" href="https://m.uber.com/ul/?action=setPickup&dropoff[latitude]='+feature.properties.y_coord+'&dropoff[longitude]='+feature.properties.x_coord+'&dropoff[nickname]=" class="card-footer-item"><span class="icon is-medium"><i class="fab fa-2x fa-uber"></i></span></a>'+
                '</footer>'
                //'</div>'
                , {maxWidth : 180,
                  closeButton: false}
                );
              }
            }).addTo(map);
          }
        })
      .fail(function() {
        error_no_dat();
        });
    }
  }

  });
