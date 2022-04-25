exports.post= (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
}
