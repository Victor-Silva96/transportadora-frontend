$("#formValidate").validate({
        rules: {
            nome: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email:true
            },
            empresa: {
				required: true
			},
			telefone: {
				required: true
			},
      modal:"required"
        },
        //For custom messages
        messages: {
            nome:{
                required: "Enter a username",
                minlength: "Enter at least 5 characters"
            }
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        },
        submitHandler: function(form) {
          $.ajax({
              url: form.action,
              type: form.method,
              data: $(form).serialize(),
              success: function(response) {
                  $('#answers').html(response);
              }            
          });
      }
     });