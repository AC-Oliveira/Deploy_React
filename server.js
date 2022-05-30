const express = require('express');
const app = express();
const baseDir = `${__dirname}/build/`

const port = 80;
app.use(express.static(`${baseDir}`))
app.get('/', (req, res) => res.sendfile('index.html' , { root : baseDir } ))
app.listen(port, () => console.log(`Rodando servidor na porta ${port}`));