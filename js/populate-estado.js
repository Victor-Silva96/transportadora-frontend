function getAllEstados(){
    return $.ajax({
        type : 'GET',
        url : 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
        dataType : "json"
    });
}

async function populateEstados(){
    const estados = await getAllEstados();
    estados.forEach(element => {
        $("#estado").append(`<option>${element.sigla}</option>`);
    });
    $('#estado').formSelect();
}