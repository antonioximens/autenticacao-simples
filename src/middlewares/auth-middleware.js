const authMiddleware = (req, res, next) => {
    // criando autenticação de bloqueio
    if(req.session.authenticated){
        // se autenticado, passa para o próximo middleware
        next()
    } else {
        // se nao autenticado, volta para a pagina inical
       return res.redirect('/')
   }
}

module.exports = authMiddleware