const fs = require('fs');
const path = require('path');

exports.getStyles = (req, res) => {
    try {
        const filePath = path.join(__dirname,'../css/estilo.css');
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if(error){
                return res.status(500).json({ message: 'Arquivo não encontrado' })
            }

            res.setHeader('Content-Type', 'text/css');
            res.send(data);
        })
    } catch (error) {
        res.status(500).json({ message: "Error ao obter os estilos" })
    }
}
exports.getJs = (req, res) => {
    try {
        const filePath = path.join(__dirname,'../js/script.js');
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if(error){
                return res.status(500).json({ message: 'Arquivo não encontrado' })
            }

            res.setHeader('Content-Type', 'text/javascript');
            res.send(data);
        })
    } catch (error) {
        res.status(500).json({ message: "Error ao obter os estilos" })
    }
}