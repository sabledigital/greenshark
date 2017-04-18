 function initMap() {

        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.363310, lng: -99.129391}, 
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
          console.log("w"+$(window).width())
          scroll_pos=document.body.scrollTop;
          console.log(scroll_pos)
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
// *************** Validation
// *****************************

message_incorrect= "Este mail es <strong> incorrecto </strong>";

message_incorrect2= "Vuelve a revisar el formulario";
message_wrong="Este mail es <strong> incorrecto </strong>"
message_empty="Proporciona un mail por favor";

function validateEmail(sEmail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sEmail)) {
    return true;  
    
  }
  else {
    return false;
    
  }
}


function validarFormularioEmail(input){


  form_text=$(input).val();
  console.log(form_text);

  if(form_text == ""){
      // $("#message_validation").html(message_empty);
      // $("#message_validation").jAnimate("fadeInDown");
      $(input).removeClass('ok-form');
      $(input).addClass('not-form');
      console.log("vacio");
      message_incorrect=message_empty;
      return false;


  }else{
    if (validateEmail(form_text)) {
      $(input).removeClass('not-form');
      $(input).addClass('ok-form');
      console.log("bien");
      return true;

    }else{
      $(input).removeClass('ok-form');
      $(input).addClass('not-form');
      console.log("mal");
      message_incorrect=message_wrong;
      return false;
    }
  }
}
// *****************************
// *************** Validation TRIGGERS
// *****************************

var $input_email = $('#head-index-form');
$input_email.on('keyup', function () {
  console.log($input_email)
    validarFormularioEmail($input_email);
});

var $input_email_foot = $('#footer-form');
$input_email_foot.on('keyup', function () {
  console.log($input_email_foot)
    validarFormularioEmail($input_email_foot);
});



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
  $(".support-in").removeClass('hidden');
});



$(".puchline .btn").click(function() {
   mail=$("#footer-form").val();
   if (mail=="") {
   }else
   formIn($(".puchline input").val());
});



$(".index-form .btn").click(function() {
   mail=$("#head-index-form").val();
   if (mail=="") {
   }else
   formIn($(".index-form input").val());
});








//-------------------




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
  }


//if choose a course or path

    if (path=="1") {$(".path-form-1").removeClass('hidden');$(".path-in").addClass('hidden')}
    if (path=="2") {$(".path-form-2").removeClass('hidden');$(".path-in").addClass('hidden')}
    if (path=="3") {$(".path-form-3").removeClass('hidden');$(".path-in").addClass('hidden')}

    if (course=="1") {$(".course-form-1").removeClass('hidden');$(".path-in").addClass('hidden')}
    if (course=="2") {$(".course-form-2").removeClass('hidden');$(".path-in").addClass('hidden')}
    if (course=="3") {$(".course-form-3").removeClass('hidden');$(".path-in").addClass('hidden')}




}



function formInRemove(){
  $(".form-in").jAnimateOnce("fadeOut",function(){
        $("body").css("overflow","scroll");
        $(".form-in").addClass('hidden');
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





