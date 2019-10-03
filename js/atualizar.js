function getTransportadora() {
    const url = window.location.href;
    let arguments = url.split('?')[1].split('=');
    arguments.shift();
    return $.ajax({
        type: 'GET',
        url: `http://localhost:8080/transportadoras/${arguments}`,
        dataType: "json"
    });
}


async function populateTransportadora() {
    const transportadora = await getTransportadora();
    $("form #email").val(transportadora.email);
    $("form #nome").val(transportadora.nome);
    $("form #empresa").val(transportadora.empresa);
    $("form #telefone").val(`(${transportadora.telefone.substr(0, 2)}) ${transportadora.telefone.substr(2, 4)}-${transportadora.telefone.substr(6, 4)}`);
    $("form #celular").val(`(${transportadora.celular.substr(0, 2)}) ${transportadora.celular.substr(2, 5)}-${transportadora.celular.substr(7, 4)}`);
    $("form #whatsapp").val(`(${transportadora.whatsapp.substr(0, 2)}) ${transportadora.whatsapp.substr(2, 5)}-${transportadora.whatsapp.substr(6, 4)}`);
    if (transportadora.modal === 'Rodoviário')
        $("form #modal").val('1');
    else if (transportadora.modal === 'Aquaviário')
        $("form #modal").val('2');
    else
        $("form #modal").val('3');
    $("form #modal").formSelect();
    $("form #cep").val(`${transportadora.endereco.cep.substr(0, 5)}-${transportadora.endereco.cep.substr(5, 3)}`);
    $("form #estado").val(transportadora.endereco.estado);
    $("form #estado").formSelect();
    $("form #cidade").val(transportadora.endereco.cidade);
    $("form #bairro").val(transportadora.endereco.bairro);
    $("form #rua").val(transportadora.endereco.rua);
    $("form #numero").val(transportadora.endereco.numero);
}

$("#botao-remover").click(async function () {
    const url = window.location.href;
    let arguments = url.split('?')[1].split('=');
    arguments.shift();
    $.ajax({
        type: 'DELETE',
        url: `http://localhost:8080/transportadoras/${arguments}`,
        success: function (response) {
            alert("transportadora deletada com sucesso");
            $(location).attr('href', "listar.html");
        }
    });
});