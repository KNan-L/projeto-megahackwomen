
(function () {
    var speakBtn = document.querySelector('#speakbt')
    var resultSpeaker = document.querySelector('#resultSpeak')
    var resultSearch = document.querySelector('#resultSearch')
    var autor = document.querySelector('#autor')
    var titulo = document.querySelector('#titulo')
    var sinopse = document.querySelector('#sinopse')
    var capa = document.querySelector('#capa')
    const botaovoz = document.querySelector('#botaovoz')

    const livros = [
        {
            "id": 1,
            "titulo": "Esaú e Jacó",
            "editora": "",
            "edicao": "",
            "autor": "Machado de Assis",
            "sinopse": "Esaú e Jacó é, originalmente, um conto bíblico que inspirou a obra de Machado de Assis. O direito ao trono que, preferencialmente seria do filho primogênito, Esaú, é o pontapé inicial da trama. Porém, a preferência por Jacó faz com que a mãe dos dois engane seu marido já velho fazendo seu herdeiro escolhido se passar por seu irmão. Com isso um grande conflito entre os dois irmãos se estabelece. O autor deixa bem claro o papel centralizador da mãe, maior articuladora da história.",
            "capa": "49709315336.jpg",
            "leitor": "Autônomo",
            "idioma": "Português",
            "categoria": ["", ""],
            "tematica": ["", "", ""],
            "caracteristicas": ["", "", ""],
            "nuvem": ""
        },

        {
            "id": 2,
            "titulo": "Alma Inquieta",
            "editora": "",
            "edicao": "",
            "autor": "Olavo Bilac",
            "sinopse": "",
            "capa": "49709315414.jpg",
            "leitor": "Autônomo",
            "idioma": "Português",
            "categoria": ["", ""],
            "tematica": ["", "", ""],
            "caracteristicas": ["", "", ""],
            "nuvem": ""
        },

        {
            "id": 3,
            "titulo": "A Lebre e a Tartaruga",
            "editora": "Todolivro",
            "edicao": "1ª ed.",
            "autor": "Esopo",
            "sinopse": "A lebre vivia caçoando da lerdeza da tartaruga. Certa vez, a tartaruga já muito cansada por ser alvo de gozações, desafiou a lebre para uma corrida.",
            "capa": "lebreetartaruga.png",
            "leitor": "Autônomo",
            "idioma": "Português",
            "categoria": ["Literatura - Conto", "Fantasia"],
            "tematica": ["Animal", "Aprendizado", "Aventura"],
            "caracteristicas": ["Clássicos universais", "Ilustrado", "Paradidático"],
            "nuvem": "nuvemLebre.png"
        },

        {
            "id": 4,
            "titulo": "O pequeno príncipe",
            "editora": "Editora On line",
            "edicao": "1ª ed.",
            "autor": "Antoine de Saint-Exupéry",
            "sinopse": "Um piloto cai com seu avião no deserto e ali encontra uma criança loura e frágil. Ela diz ter vindo de um pequeno planeta distante. E ali, na convivência com o piloto perdido, os dois repensam os seus valores e encontram o sentido da vida. Com essa história mágica, sensível, comovente, às vezes triste, e só aparentemente infantil, o escritor francês Antoine de Saint-Exupéry criou há 70 anos um dos maiores clássicos da literatura universal. Não há adulto que não se comova ao se lembrar de quando o leu quando criança. Trata-se da maior obra existencialista do século XX, segundo Martin Heidegger. Livro mais traduzido da história, depois do Alcorão e da Bíblia.",
            "capa": "pequenoprincipe.jpg",
            "leitor": "Autônomo",
            "idioma": "Português",
            "categoria": [
                "Literatura infantojuvenil",
                "Fantasia"
            ],
            "tematica": ["Amizade", "Amor", "Diversidade", "Aprendizado", "Infância", "Aventura", "Animal"],
            "caracteristicas": ["Ilustrado", "Ficção", "Literatura estrangeira", "Clássicos da literatura universal"],
            "nuvem": "nuvemdepalavras.png"
        },
        {
            "id": 5,
            "titulo": "Bichos da minha casa",
            "editora": "Callis",
            "edicao": "2° ed.",
            "autor": "Ana Michaelis",
            "sinopse": "Uma bióloga e uma artista plástica uniram- se para apresentar os bichos que habitam a nossa casa: a formiga, a mosca, a lagartixa e outros.Em letra bastão, o livro é dirigido aos pequenos leitores que se encontram em processo de alfabetização.",
            "capa": "bichosdaminhacasa.jpg",
            "leitor": "Iniciante",
            "idioma": "Português",
            "categoria": ["Literatura", "InfantoJuvenil"],
            "tematica": ["Animal", "", ""],
            "caracteristicas": ["Ilustrado", "Paradidático", ""],
            "nuvem": "nuvemBichosdaMinhaCasa.png"

        }
    ]

    /*Mudar imagem do botão de voz*/
    botaovoz.addEventListener('mouseover', function () {
        botaovoz.src = '../assets/icones/OTTO_PAG_BUSCAR.svg'

    })

    botaovoz.addEventListener('mouseout', function () {
        botaovoz.src = '../assets/icones/OTTO_PAG_BUSCAR_sem_falar.svg'
    })


    //Reconhcimento de voz
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

        var myRecognition = new SpeechRecognition()

        myRecognition.lang = 'pt-Br'

        speakBtn.addEventListener('click', function () {
            try {
                myRecognition.start()

                botaovoz.src = '../assets/icones/otto_SORRINDO_FALANDO_1.svg'

                resultSpeaker.innerHTML = "Estou te ouvindo!"

            } catch (error) {
                alert('erro:' + error.message)
            }

        }, false)

        myRecognition.addEventListener('result', function (evt) {
            var resultSpeak = evt.results[0][0].transcript

            resultSpeaker.innerHTML = resultSpeak

            //Teste Comparação
            livros.find((livro) => {
                console.log(resultSpeak)
                console.log(livro)
                if (resultSpeak.toLowerCase() == livro.autor.toLowerCase()) {
                    document.querySelector('#resultadobusca').classList.remove('esconder')
                    titulo.innerHTML = `${livro.titulo}`
                    autor.innerHTML = `${livro.autor}`
                    sinopse.innerHTML = `${livro.sinopse}`
                    capa.src = `assets/${livro.capa}`
                    if (livro.nuvem !== "") {
                        nuvem.src = `assets/${livro.nuvem}`
                    }
                    editora.innerHTML = `${livro.editora}`
                    edicao.innerHTML = `${livro.edicao}`
                    tipodeleitor.innerHTML = `${livro.leitor}`
                    idioma.innerHTML = `${livro.idioma}`
                    categoria1.innerHTML = `${livro.categoria[0]}`
                    categoria2.innerHTML = `${livro.categoria[1]}`
                    tematica1.innerHTML = `${livro.tematica[0]}`
                    tematica2.innerHTML = `${livro.tematica[1]}`
                    tematica3.innerHTML = `${livro.tematica[2]}`
                    caracteristicas1.innerHTML = `${livro.caracteristicas[0]}`
                    caracteristicas2.innerHTML = `${livro.caracteristicas[1]}`
                    caracteristicas3.innerHTML = `${livro.caracteristicas[2]}`
                    return resultSearch.innerHTML = `O autor/a ${livro.autor} foi encontrado.`

                } else if (resultSpeak.toLowerCase() == livro.titulo.toLowerCase()) {
                    document.querySelector('#resultadobusca').classList.remove('esconder')
                    titulo.innerHTML = `${livro.titulo}`
                    autor.innerHTML = `${livro.autor}`
                    sinopse.innerHTML = `${livro.sinopse}`
                    capa.src = `assets/${livro.capa}`
                    if (livro.nuvem !== "") {
                        nuvem.src = `assets/${livro.nuvem}`
                    }
                    editora.innerHTML = `${livro.editora}`
                    edicao.innerHTML = `${livro.edicao}`
                    tipodeleitor.innerHTML = `${livro.leitor}`
                    idioma.innerHTML = `${livro.idioma}`
                    categoria1.innerHTML = `${livro.categoria[0]}`
                    categoria2.innerHTML = `${livro.categoria[1]}`
                    tematica1.innerHTML = `${livro.tematica[0]}`
                    tematica2.innerHTML = `${livro.tematica[1]}`
                    tematica3.innerHTML = `${livro.tematica[2]}`
                    caracteristicas1.innerHTML = `${livro.caracteristicas[0]}`
                    caracteristicas2.innerHTML = `${livro.caracteristicas[1]}`
                    caracteristicas3.innerHTML = `${livro.caracteristicas[2]}`

                    return resultSearch.innerHTML = `O livro ${livro.titulo} foi encontrado.`
                } else {
                    resultSearch.innerHTML = `O "${resultSpeak}" não foi encontrado`
                }
            })

        }, false)

        myRecognition.addEventListener('error', function (evt) {
            if (evt.error = 'not-allowed') {
                resultSpeaker.innerHTML = 'Seu microfone está bloqueado.'
            } else {
                resultSpeaker.innerHTML = "Se você disse alguma coisa, não ouvi muito bem"
            }

        }, false)

    } else {
        resultSpeaker.innerHTML = 'Seu navegador não suporta tanta tecnologia!'
    }
})();