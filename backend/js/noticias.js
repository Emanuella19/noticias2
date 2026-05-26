function alterar_tema() {
    var body = document.body;

    if (body.classList.contains("escuro")) {
        body.classList.remove("escuro");
        body.classList.add("claro");

    }
    else {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}
function mudar_titulo(element){
    element.innerText = "Portal Noticias";
}

function abrir_lightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightbox_img = document.getElementById("lightbox-img");

    lightbox_img.src = element.src;
    lightbox.style.display = "flex";

}


function fechar_lightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function exibir_noticias() {
    const section = document.getElementById("noticias")


    var noticias = [
        {
            imagem: "../img/ciclo_vida.png",
            titulo: "O Processo de Implantação do Novo Serviço Corporativo de TI",
            descricao: "No nível organizacional, a implementação do código nos obriga à migração da confidencialidade imposta pelo sistema de senhas. O empenho em analisar a revolução que trouxe o software livre exige o upgrade e a atualização dos paradigmas de desenvolvimento de software. Evidentemente, o entendimento dos fluxos de processamento auxilia no aumento da segurança e/ou na mitigação dos problemas de alternativas aos aplicativos convencionais. No entanto, não podemos esquecer que a lei de Moore facilita a criação das novas tendencias em TI. Considerando que temos bons administradores de rede, o novo modelo computacional aqui preconizado cumpre um papel essencial na implantação dos equipamentos pré-especificados. A certificação de metodologias que nos auxiliam a lidar com o consenso sobre a utilização da orientação a objeto assume importantes níveis de uptime dos requisitos mínimos de hardware exigidos. Nunca é demais lembrar o impacto destas possíveis vulnerabilidades, uma vez que a adoção de políticas de segurança da informação faz parte de um processo de gerenciamento de memória avançado do impacto de uma parada total. ",
            link: "html/noticias.html"
        },

        {
            imagem: "../img/Foucalt_Ubermensch.jpg",
            titulo: "O que diria Foucault e Übermensch?",
            descricao: "Caros amigos, a infinita diversidade da realidade única nos obriga à análise das condições epistemológicas e cognitivas exigidas. O primeiro Wittgenstein, ao contrário do segundo Wittgenstein, provou que a Vontade de Potência inerente ao ser humano, como Nietzsche destacou, afeta positivamente a correta previsão da fundamentação metafísica das representações. Assim mesmo, a estrutura atual da ideação semântica exige a precisão e a definição das condições de suas incógnitas. O espírito dionisíaco da música e poesia nos ensinou que o novo modelo estruturalista aqui preconizado justificaria a adoção das posturas dos filósofos divergentes com relação às atribuições conceituais.",
            link: "html/noticias.html"
        },

        {
            imagem: "../img/globalizacao.jpg.jpg",
            titulo: "Estratégias em um Novo Paradigma Globalizado",
            descricao: "Do ponto de vista estrutural, a normatização de fluxos decisórios afeta positivamente a correta previsão da lógica predominante nas decisões estratégicas. Pensando mais a longo prazo, a percepção das dificuldades talvez venha a ressaltar a relatividade das práticas reconhecidas internacionalmente. Tendo em vista as transformações em curso, a mobilidade dos capitais internacionais não pode mais se dissociar do processo de comunicação como um todo. O que temos que ter sempre em mente é que a transição para modelos mais colaborativos ainda não demonstrou convincentemente que vai participar na mudança do orçamento setorial.",
            link: "html/noticias.html"
        },

        {
            imagem: "../img/lero_lero.jpg",
            titulo: "Lero Lero TI Instruções",
            descricao: "O Gerador de Lero-lero para TI e informática foi baseado no Fabuloso Gerador de Lero-lero v2.0. Ele é capaz de gerar qualquer quantidade de texto vazio e prolixo, ideal para engrossar uma tese de mestrado, impressionar seu chefe ou preparar discursos capazes de curar a insônia da platéia. Basta informar um título pomposo qualquer (nos moldes do que está sugerido aí embaixo) e a quantidade de frases desejada. Voilá! Em dois nano-segundos você terá um texto - ou mesmo um livro inteiro - pronto para impressão. Ou, se preferir, faça copy/paste para um editor de texto para formatá-lo mais sofisticadamente. Lembre-se: aparência é tudo, conteúdo é nada.",
            link: "html/noticias.html"
        }
    ];
    var html = "";
    noticias.forEach(noticia => {
        html += `
            <article class="noticia">
                <img src="${noticia.imagem}" onclick="abrir_lightbox(this)" alt="${noticia.titulo}">
                <h2>${noticia.titulo}</h2>
                <p>${noticia.descricao}</p>
                <a href="${noticia.link}">"Leia mais..."></a>
            </article>
        `;
    });
    section.innerHTML = html;
}