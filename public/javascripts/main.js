 function initMap() {

        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.363678, lng: -99.170567},
          zoom: 13,
          disableDefaultUI: true,
          styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3393f2"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#2974bf"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3089e5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#0c3f71"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#0c3f71"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#1c5d9e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#267dd5"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#0c233b"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#2877cb"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#0e2946"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#379afd"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#3392f4"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#1f5a99"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2d82d5"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3392f4"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2d82d5"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2e83db"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#205c99"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#379afd"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#379afd"
      }
    ]
  }
]
        });
        var contentString = '<h3>Greenshark</h3>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: {lat: 19.363678, lng: -99.170567},
          map: map,
          title: 'Greenshark',
          icon:'../images/icon.png'
        });
         marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        map.setOptions({'scrollwheel': false});
      }

// *****************************
// *************** NAVBAR
// *****************************

function w_bar(){

  $("#navbarText").addClass('scroll-nav')
  $("#navbarText").jAnimateOnce("fadeInDown")

}

  function no_bar(){
  $("#navbarText").jAnimateOnce("fadeOutUp",function(){
    $("#navbarText").removeClass('scroll-nav')
    $("#navbarText").jAnimateOnce("fadeInDown")
  });




  }


$(window).on('load, resize', function(){
    if ($(window).width() <= 992) {
        //mycode
    }else{

    }
})


// SCROLL FUNCTION
  flag=true;

  $( window ).scroll(function() {
      if ($(window).width() >= 992){

          scroll_pos=document.body.scrollTop;

          if(scroll_pos==0){

                no_bar();
                flag=true;

               }else{

                 if(flag){
                   w_bar();
                   flag=false;}

               }
      }
  });

  // *****************************
  // *************** RECAPTCHA
  // *****************************



// *****************************
// *************** Validation
// *****************************


// *****************************
// *************** Hover triggers
// *****************************
$("#dropdown04").hover(function() {
  $("#dropdown04").trigger('click');
  $(".dropdown-menu").jAnimateOnce("fadeIn");
}, function() {
  /* Stuff to do when the mouse leaves the element */

});

$("#dropdown03").hover(function() {
  $("#dropdown03").trigger('click');
  $(".dropdown-menu").jAnimateOnce("fadeIn");
}, function() {
  /* Stuff to do when the mouse leaves the element */

});

// *****************************
// *************** Form triggers
// *****************************

$(".direct").click(function(event) {
  formIn();
  $(".text-in").removeClass('hidden');
});



$(".support").click(function(event) {
  formIn();
  $(".header-in").empty();
  $(".header-in").html("Aplicación beca");
  $(".support-in").removeClass('hidden');
});



$(".puchline .btn").click(function() {
   mail=$("#footer-form").val();
  if (validate.email(mail)) {
   formIn($(".puchline input").val());
  }else{
      $(".mssg-form").html(message_empty);
      $(".mssg-form").jAnimateOnce("fadeInDown");
  }

});



$(".index-form .btn").click(function() {
  mail=$("#head-index-form").val();
  if (validate.email(mail)) {
   formIn($(".index-form input").val());
  }else{
      $(".mssg-form").html(message_empty);
      $(".mssg-form").jAnimateOnce("fadeInDown");
  }
});








//------------------- RULES FOR FORM CREATION




$(".remove-in").click(function(event) {
  formInRemove();
});



function formIn(email,path,course){

  $("body").css("overflow","hidden");
  $(".form-in").removeClass('hidden');
  $(".form-in").jAnimateOnce("fadeIn");




// IF HAVE MAIL
  if(email){
    $(".header-in").html("Hola <br><h4 class='green'>"+email+"</h4>");
    $(".email-in").addClass('hidden');
    $("#exampleInputEmail1").val(email);
  }


//if choose a course or path

    if (path=="1") {$(".path-form-1").removeClass('hidden');$(".path-in").addClass('hidden'); $('#exampleInputpath1 option:eq(4)').prop('selected', true)  }
    if (path=="2") {$(".path-form-2").removeClass('hidden');$(".path-in").addClass('hidden'); $('#exampleInputpath1 option:eq(5)').prop('selected', true)  }
    // if (path=="3") {$(".path-form-3").removeClass('hidden');$(".path-in").addClass('hidden'); $("#exampleInputpath1").val()  }

    if (course=="1") {$(".course-form-1").removeClass('hidden');$(".path-in").addClass('hidden'); $('#exampleInputpath1 option:eq(1)').prop('selected', true) }
    if (course=="2") {$(".course-form-2").removeClass('hidden');$(".path-in").addClass('hidden'); $('#exampleInputpath1 option:eq(2)').prop('selected', true) }
    if (course=="3") {$(".course-form-3").removeClass('hidden');$(".path-in").addClass('hidden'); $('#exampleInputpath1 option:eq(3)').prop('selected', true) }




}



function formInRemove(){
  $(".form-in").jAnimateOnce("fadeOut",function(){
        $("body").css("overflow","scroll");
        $(".form-in").addClass('hidden');


        $(".email-in").removeClass('hidden');
        $(".name-in").removeClass('hidden');
        $(".tel-in").removeClass('hidden');
        $(".text-in").removeClass('hidden');
        $(".path-in").removeClass('hidden');


        $(".support-in").addClass('hidden');
        $(".path-select").addClass('hidden');

  });




}




// *****************************
// *************** Scroll brands
// *****************************
slider=1;
$(".techno-index .s1").removeClass('hidden');


$(".techno-index .back").click(function(event) {
  console.log("back")
  $(".techno-index .s"+slider+"").addClass('hidden');
  slider-=1;
  if (slider<=0) {slider=17}
  $(".techno-index .s"+slider+"").removeClass('hidden').jAnimateOnce("fadeIn");
});



$(".techno-index .go").click(function(event) {
  console.log("next")

  $(".techno-index .s"+slider+"").addClass('hidden');
  slider+=1;
  if (slider>=18) {slider=1}
  $(".techno-index .s"+slider+"").removeClass('hidden').jAnimateOnce("fadeIn");

});


$(".tech-options > img").click(function(event) {
  slider=$(this).attr("slider");
  slider=parseInt(slider);
  element=$(this).attr("class").replace("hvr-float","").replace(" ","");
  console.log(element)
  $(".techno-index .col-md-10").addClass('hidden');
  $(".techno-index ."+element+" ").removeClass('hidden');
  $(".techno-index ."+element+" ").jAnimateOnce("fadeIn");
});




// *******************************
// *************** FORM VALIDATION
// *******************************

function formValidation(){

  email=$("#exampleInputEmail1").val();
  name=$("#exampleInputname1").val();
  tel=$("#exampleInputtel1").val();
  path=$("#exampleInputpath1").val();
  captcha=$("#g-recaptcha-response").val();

  console.log(email);
  console.log(name);
  console.log(tel);
  console.log(path);

  if (email=="" || !validate.email(email)) {
    console.log("No hay mail");
    $(".mssg-form-final").empty();
    $(".mssg-form-final").html("Revisa de nuevo tu mail, es incorrecto");
    $(".mssg-form-final").removeClass('hidden')
    $(".mssg-form-final").jAnimateOnce("fadeInDown");
  }else

    if (!$("#exampleInputname1").val()) {
    console.log("No hay name");
    $(".mssg-form-final").empty();
    $(".mssg-form-final").html("Tu nombre es muy corto");
    $(".mssg-form-final").removeClass('hidden')
    $(".mssg-form-final").jAnimateOnce("fadeInDown");
  }else

      if (!$("#exampleInputtel1").val()) {
    console.log("No hay tel");
    $(".mssg-form-final").empty();
    $(".mssg-form-final").html("El teléfono es incorrecto");
    $(".mssg-form-final").removeClass('hidden')
    $(".mssg-form-final").jAnimateOnce("fadeInDown");
  }else
      if ($("#exampleInputpath1").val()=="ninguno") {
    console.log("No hay path");
    $(".mssg-form-final").empty();
    $(".mssg-form-final").html("Selecciona un curso que te interese");
    $(".mssg-form-final").removeClass('hidden')
    $(".mssg-form-final").jAnimateOnce("fadeInDown");
  }else if(captcha==""){
    $(".mssg-form-final").empty();
    $(".mssg-form-final").html("¿Eres un robot?");
    $(".mssg-form-final").removeClass('hidden')
    $(".mssg-form-final").jAnimateOnce("fadeInDown");
  }else{

    $(".mssg-form-final").empty();
    return true

  }

}


$(".form-final").click(function(event) {

  if (formValidation()) {
    email=$("#exampleInputEmail1").val();
    name=$("#exampleInputname1").val();
    tel=$("#exampleInputtel1").val();
    path=$("#exampleInputpath1").val();
    comentarios=$("#exampleInputtext1").val();
    captcha=$("#g-recaptcha-response").val();

    $(".register-in form").empty();
    $(".header-in").html("Hey <span class='green'>"+name+"</span>, gracias por dejar tus datos");
    $(".tell-in").html("Pronto nos pondremos en contacto contigo a <span class='green'>"+email+"</span>");
    $(".register-in ").jAnimateOnce("fadeInDown");



    $.post('/form-submitted', {'email': email, 'name': name, 'phone': tel, 'comentarios': comentarios,'course':  path, 'g-recaptcha-response': captcha}, function(data) {
      if(data.error) {
        console.log("nel");
      } else {
        console.log("GOOD");

      }
    });
  }
}
});
