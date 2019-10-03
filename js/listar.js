function getAllTransportadoras() {
    return $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/transportadoras',

        dataType: "json"
    });
}

async function populateTransportadoras() {
    const transportadoras = await getAllTransportadoras();
    transportadoras.forEach(element => {
        let cardTransportadora = `
        <li>
            <a href="atualizar.html?id=${element.id}">
                <div class="col s12 card cards-transportadora">
                       <div class="col s4">
                           <p id="nome">${element.nome}</p>
                       </div>
                       <div class="col s4">
                          <p>${element.telefone}</p> 
                          <p>${element.celular}</p>
                          <p>${element.email}</p>
                       </div>
                       <div class="col s4">
                        <div class="col s4">
                            <p>Fale Agora: ${element.whatsapp}</p>
                        </div> 
                     </div>  
                </div>
            </a>
        </li>`;
        $("main .row .cards-transportadoras ul").append(cardTransportadora);
    });
}

$(document).ready(function () {
    populateTransportadoras();

});








