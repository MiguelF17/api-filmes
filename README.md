# 🎬 SenaiFlix API

API simples feita com **Node.js** e **Express** para gerenciar **filmes e séries**.

## 🚀 Tecnologias

* Node.js
* Express
* JavaScript

## 📦 Instalação

```bash
npm init -y
npm i express
```

Executar o servidor:

```bash
node index.js
```

Servidor em:

```
http://localhost:3000
```

---

# 📚 Rotas da API

## 🎥 Filmes

| Método | Rota               | Descrição                |
| ------ | ------------------ | ------------------------ |
| GET    | /filmes            | Lista todos os filmes    |
| GET    | /filmes?genre=ação | Filtra filmes por gênero |
| GET    | /filmes/:id        | Retorna um filme pelo ID |
| POST   | /filmes            | Cria um novo filme       |

Exemplo de body:

```json
 {
    "id": 1,
    "title": "Interstellar",
    "genre": "Ficção Científica",
    "description": "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
    "releaseYear": 2014,
    "image": "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/aa5b9295-8f9c-44f5-809b-3f2b84badfbf/8a7dd34b09c9c25336a3d850d4c431455e1aaaf0.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom"
    }
```

---

## 📺 Séries

| Método | Rota                | Descrição                 |
| ------ | ------------------- | ------------------------- |
| GET    | /series             | Lista todas as séries     |
| GET    | /series?genre=drama | Filtra séries por gênero  |
| GET    | /series/:id         | Retorna uma série pelo ID |
| POST   | /series             | Cria uma nova série       |

Exemplo de body:

```json
{
    "id": 1,
    "title": "Arcane",
    "genre": "Animação",
    "description": "Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.",
    "releaseYear": 2021,
    "image": "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/36edcf0527cc1cafabecf5e27647b73e10c96cca-1920x1080.png?accountingTag=ARCANE"
    },
```

---

⚠️ **Validação:**
Os campos **title, genre, description e releaseYear** são obrigatórios.

---

👨‍💻 Projeto desenvolvido para estudos no **SENAI**.
