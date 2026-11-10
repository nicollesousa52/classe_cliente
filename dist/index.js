import express from 'express';
const app = express();
const porta = 3000;
app.get("/sobre", (req, res) => {
    res.status(200).json({
        mensagem: "api sobre cadastro de produtos"
    });
});
app.get("/saudacao/:nome", (req, res) => {
    const nome = req.params.nome;
    res.json({
        mensagem: `bom dia ${nome}`
    });
});
app.listen(porta, () => {
    console.log("servidor no ar");
    console.log("http://localhost:" + porta);
});
