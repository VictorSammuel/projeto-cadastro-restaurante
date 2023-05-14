// declara um conjunto inicial de cadastros
var db_cadastros_inicial = {
    "data": [
        {  "id": 1,
        "nome": "Zé da Manga",
        "email": "zedamanga@gmail.com",
        "chavedopix": "3122232344",
        "localdoevento": "Belvedere",
        "cardapio": "Picanha",
        "website": "restaurantedozedamanga.com.br"
    }
    ]
    
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_cadastro'));
if (!db) {
    db = db_cadastros_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-info">' + msg + '</div>');
}

function insertcadastro(cadastro) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novocadastro = {
        "id": novoId,
        "nome": cadastro.nome,
        "email" : cadastro.email,
        "chavedopix": cadastro.chavedopix,
        "localdoevento" : cadastro.localdoevento,
        "cardapio": cadastro.cardapio,
        "website": cadastro.website
    };

    // Insere o novo objeto no array
    db.data.push(novocadastro);
    displayMessage("cadastro inserido com sucesso");
    
    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}

function updatecadastro(id, cadastro) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = cadastro.nome,
    db.data[index].email = cadastro.email,
    db.data[index].chavedopix = cadastro.chavedopix,
    db.data[index].localdoevento = cadastro.localdoevento,
    db.data[index].cardapio = cadastro.cardapio,
    db.data[index].website = cadastro.website

    displayMessage("cadastro alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}

function deletecadastro(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("cadastro removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_cadastro', JSON.stringify(db));
}
