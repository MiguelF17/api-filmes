// npm init -y
// npm i express

// Criando o app usando o express
const express = require("express")
const app = express()

// Permite utilizar JSON na requisição
app.use(express.json())

const filmes = [
    {
        id: 1,
        title: "Interstellar",
        genre: "Ficção Científica",
        description: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
        releaseYear: 2014,
        image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/aa5b9295-8f9c-44f5-809b-3f2b84badfbf/8a7dd34b09c9c25336a3d850d4c431455e1aaaf0.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom"
    },
    {
        id: 2,
        title: "Oppenheimer",
        genre: "Suspense",
        description: "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
        releaseYear: 2023,
        image: "https://pbs.twimg.com/media/FvnRS1tXwAMZTN-.jpg"
    }
]

const series = [
    {
        id: 1,
        title: "Arcane",
        genre: "Animação",
        description: "Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.",
        releaseYear: 2021,
        image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/36edcf0527cc1cafabecf5e27647b73e10c96cca-1920x1080.png?accountingTag=ARCANE"
    },
    {
        id: 2,
        title: "Olympo",
        genre: "Drama",
        description: "Uma nadadora desmaia em um centro esportivo de alto desempenho. Amaia investiga os riscos extremos que seus colegas atletas correm para alimentarem suas ambições.",
        releaseYear: 2025,
        image: "https://agazeta.net/wp-content/uploads/2025/06/image-2025-06-27T114636.483.jpg"
    }
]

// -----> FILMES <------


// Get e Filtro
app.get("/filmes", (req, res) => {
    const genre = req.query.genre // O query parameter vem como texto

    // Se não passar query param, retorna todos!
    // O ponto de exclamação inverte o valor
    // Se o nome não tiver valor ele é falso mas por conta do sinal de exclamação ele vira verdadeiro e executa o que está no if
    if (!genre) {
        return res.json(filmes)
    }

    const genreFiltro = filmes.filter(a =>
        a.genre.toLowerCase().includes(genre.toLowerCase())
    )

    res.json(genreFiltro)
})


// Get por id
app.get("/filmes/:id", (req, res) =>{
    const id = parseInt(req.params.id) // Vai voltar como texto

    const filme = filmes.find(a => a.id == id)

    //Se a variável for nule é igual a falso, se possuir valor, é verdadeiro
    if (filme) {
        return res.json(filme)
    } else {
        res.status(404).json("Filme não encontrado")
    }
})


// Post Criar
app.post("/filmes", (req, res) => {
    const titleCliente = req.body.title
    const genreCliente = req.body.genre
    const releaseYearCliente = req.body.releaseYear
    const descriptionCliente = req.body.description

    // Verificar se o titulo e genero sao validos
    if (!titleCliente || titleCliente.length <= 1 || !genreCliente || !releaseYearCliente || !descriptionCliente) {
        return res.status(400).json({ erro: "Título (maior que 1 caractere), gênero e ano de lançamento são obrigatórios"})
    }

    // Criar um objeto com as informações do cliente
    const novoFilme = {
        id: filmes.length + 1,
        title: titleCliente,
        genre: genreCliente,
        description: descriptionCliente,
        releaseYear: releaseYearCliente
    }

    // Adiciona o novo objeto no final da lista
    filmes.push(novoFilme)
    res.status(201).send()
})





// -----> SERIES <------


// Get e Filtro
app.get("/series", (req, res) => {
    const genre = req.query.genre // O query parameter vem como texto

    // Se não passar query param, retorna todos!
    // O ponto de exclamação inverte o valor
    // Se o nome não tiver valor ele é falso mas por conta do sinal de exclamação ele vira verdadeiro e executa o que está no if
    if (!genre) {
        return res.json(series)
    }

    const genreFiltro = series.filter(a =>
        a.genre.toLowerCase().includes(genre.toLowerCase())
    )

    res.json(genreFiltro)
})



// Post Criar
app.post("/series", (req, res) => {
    const titleCliente = req.body.title
    const genreCliente = req.body.genre
    const releaseYearCliente = req.body.releaseYear
    const descriptionCliente = req.body.description

    // Verificar se o titulo e genero sao validos
    if (!titleCliente|| titleCliente.length <= 1|| !genreCliente || !releaseYearCliente || !descriptionCliente) {
        return res.status(400).json({ erro: "Título (maior que 1 caractere), gênero, ano de lançamento e descrição são obrigatórios"})
    }

    // Criar um objeto com as informações do cliente
    const novaSerie = {
        id: series.length + 1,
        title: titleCliente,
        genre: genreCliente,
        description: descriptionCliente,
        releaseYear: releaseYearCliente
    }

    // Adiciona o novo objeto no final da lista
    series.push(novaSerie)
    res.status(201).send()
})


// Get por id
app.get("/series/:id", (req, res) =>{
    const id = parseInt(req.params.id) // Vai voltar como texto

    const serie = series.find(a => a.id == id)

    //Se a variável for nule é igual a falso, se possuir valor, é verdadeiro
    if (serie) {
        return res.json(serie)
    } else {
        res.status(404).json("Série não encontrada")
    }
})


// Colocando o servidor para rodar
app.listen(3000, () => {
    console.log("Servidor rodando em https://localhost:3000")
})