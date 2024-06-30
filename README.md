# API - CDN

Uma API que fornece arquivos `.css` e `.js` via CDN.

##  Usar API
* Primeiramente, precisar ter node instalado em sua máquina. Instalado basta rodar o seguinte comando no terminal do diretório do projeto:
```bash
  npm install
  node src/index.js
```

* Para usar em seu código basta utilizar o seguinte código na  head do html
```html
  <link rel="stylesheet" href="http://localhost:3000/style">
  <script src="http://localhost:3000/js"></script>
```

## Exemplo de Uso
* Nesse exemplo, é um código de consulta cep, na qual api está fornecendo arquivo com o script para a consulta e arquivo do estilo da pagina.
```html
  <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Api - CDN</title>
    <link rel="stylesheet" href="http://localhost:3000/style">
    <script src="http://localhost:3000/js"></script>
</head>
<body>
    <div class="container">
        <h1>API - CDN</h1>
        <input type="text" placeholder="Digite o CEP" onblur="consultarCEP()" id="cep" />
    </div>
    <div id="resultoCep" class="resultado">
    </div>
</body>
</html>
```
