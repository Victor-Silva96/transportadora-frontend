$("#formValidate").validate({
  rules: {
    nome: {
      required: true,
      minlength: 4
    },
    email: {
      required: true,
      email: true
    },
    empresa: {
      required: true
    },
    telefone: {
      required: true
    },
    modal: "required",
    estado: {
      required: true
    },
    cidade: {
      required: true
    },
    bairro: {
      required: true
    },
    rua: {
      required: true
    }
  },
  //For custom messages
  messages: {
    nome: {
      required: "Enter a username",
      minlength: "Enter at least 5 characters"
    }
  },
  errorElement: 'div',
  errorPlacement: function (error, element) {
    $("#numero").addClass("valid");
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    } else {
      error.insertAfter(element);
    }
  },
  submitHandler: function (form) {
    $("#numero").addClass("valid");
    $.ajax({
      url: 'http://localhost:8080/transportadoras',
      type: 'POST',
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(convertFormToJson()),
      success: function (response) {
        alert("transportadora cadastrada com sucesso");
        $(location).attr('href', "listar.html");

      }
    });
  }
});

function convertFormToJson() {
  let formJson = {
    "email": $("form #email").val(),
    "nome": $("form #nome").val(),
    "empresa": $("form #empresa").val(),
    "telefone": $("form #telefone").cleanVal(),
    "celular": $("form #celular").cleanVal(),
    "whatsapp": $("form #whatsapp").cleanVal(),
    "modal": $("form #modal option:selected").text(),
    "endereco": {
      "cep": $("form #cep").cleanVal(),
      "estado": $("form #estado option:selected").text(),
      "cidade": $("form #cidade").val(),
      "bairro": $("form #bairro").val(),
      "rua": $("form #rua").val(),
      "numero": $("form #numero").val()

    }
  }
  return formJson;
}