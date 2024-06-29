

function consultarCEP() {
    const cep = document.getElementById("cep").value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.cep) {
                const resultadoCep = document.getElementById('resultoCep')
                let tableContent = '';
                    tableContent += '<ul>';
                    tableContent += `Cep: ${data.cep}`;
                    tableContent += '<li> Logradouro: ' + data.logradouro + '</li>';
                    tableContent += '<li> Bairro: ' + data.bairro + '</li>';
                    tableContent += `<li> Cidade: ${data.localidade} - ${data.uf}`;
                    tableContent += '</ul>';
                resultadoCep.innerHTML = tableContent;

            } else {
                console.log("CEP não encontrado ou inválido.");
            }
        })
        .catch(error => {
            console.log(error);
        });
}


