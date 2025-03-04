// armazenamento
let users = [
    {username: 'isaac', password: '1234'},
    {username: 'marcos', password: '1234'}
]

module.exports = {
    // GET / -> renderiza a view do login
    index: (req, res) => {
        res.render('index')
    },

    // POST /auth/register
    register: (req, res) => {
        // pegando os dados do corpo 
        const {username, password} = req.body
        // verificando se user existe
        const userExists = users.find(user => user.username === username)
        // se existir, retorna um erro
        if(userExists) return res.status(400).redirect('/')
    
        // se não existir, cria um novo user
        const newUser = { username, password }
        users.push(newUser)

        // criando sessão
        req.session.authenticated = true
        req.session.curruntUser = newUser

        // redireciona para a dashboard
        res.redirect('/dashboard')
    },

    //POST /auth/login
    login: (req, res) => {
        // pegando dados do corpo
        const {username, password} = req.body
        // verificando se o usuario existe
        const user = users.find(user => user.username === username)

        // fazendo a verficações do back com usuario e senha
        if(!user){
            return res.redirect('/')
        } 
        
        if(password !== user.password){
            return res.redirect('/')
        }

        // criando sessão
        req.session.authenticated = true
        req.session.currentUser = user

        res.redirect('/dashboard')
    },
    //GET /auth/logout
    logout: (req, res) => {
        // destruindo a sessão
        // req.session.authenticated = false
        // req.session.currentUser = null
        req.session.destroy()
        // redirecionado para a pagina inicial
        res.redirect('/')
    }
}