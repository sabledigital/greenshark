// *****************************//
// ***** VALIDATORS ************//
// *****************************//


message_incorrect= "Este mail es <strong> incorrecto </strong>";

message_incorrect2= "Vuelve a revisar el formulario";
message_wrong="Oh vamos eso no es un mail"
message_empty="Proporciona un mail por favor";





var validate={
	email:function validateEmail(sEmail) {
		var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
		if (filter.test(sEmail)) {
			return true;	
			
		}
		else {
			return false;
			
		}
	},

	phone:function validatePhone(sPhone) {
    var filter = /^[0-9\-\()\+\ ]{10,20}$/;

	    if (filter.test(sPhone)) {
	        return true;
	    }
	    else {
	        return false;


	    }
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
      $(".mssg-form").html(message_incorrect);
      $(".mssg-form").jAnimateOnce("fadeInDown");
      return false;


  }else{
    if (validate.email(form_text)) {
      $(input).jAnimateOnce("fadeIn");
      $(input).removeClass('not-form');
      $(input).addClass('ok-form');
      $(".mssg-form").empty();
      console.log("bien");
      return true;

    }else{
      $(input).removeClass('ok-form');
      $(input).addClass('not-form');
      console.log("mal");
      message_incorrect=message_wrong;
      $(".mssg-form").html(message_incorrect);
      $(".mssg-form").jAnimateOnce("fadeInDown");
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



