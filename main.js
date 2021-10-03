$(document).ready(function(){



  const password = $("#password");
  const eye = $("#eye");

  $(eye).on("click", function(){
    if (password.prop('type') == 'password') {
        $(this).addClass('fa-eye-slash');
        password.attr("type","text");
    } else {
      $(eye).removeClass('fa-eye-slash');
      password.attr("type", "password");
    }
  })


});