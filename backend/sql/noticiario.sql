DROP DATABASE IF EXISTS noticiario;
CREATE DATABASE IF NOT EXISTS noticiario;
USE noticiario;

CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(250) NOT NULL,
    conteudo TEXT NOT NULL,
    caminhoImagem VARCHAR(250),
    link VARCHAR(250)
)

INSERT INTO noticias (
    titulo,
    conteudo,
    caminhoImagem,
    link
)VALUES(
    "O Processo de Implantação do Novo Serviço Corporativo de TI",
    "../img/ciclo_vida.png",
    "No nível organizacional, a implementação do código nos obriga à migração da confidencialidade imposta pelo sistema de senhas. O empenho em analisar a revolução que trouxe o software livre exige o upgrade e a atualização dos paradigmas de desenvolvimento de software. Evidentemente, o entendimento dos fluxos de processamento auxilia no aumento da segurança e/ou na mitigação dos problemas de alternativas aos aplicativos convencionais. No entanto, não podemos esquecer que a lei de Moore facilita a criação das novas tendencias em TI. Considerando que temos bons administradores de rede, o novo modelo computacional aqui preconizado cumpre um papel essencial na implantação dos equipamentos pré-especificados. A certificação de metodologias que nos auxiliam a lidar com o consenso sobre a utilização da orientação a objeto assume importantes níveis de uptime dos requisitos mínimos de hardware exigidos. Nunca é demais lembrar o impacto destas possíveis vulnerabilidades, uma vez que a adoção de políticas de segurança da informação faz parte de um processo de gerenciamento de memória avançado do impacto de uma parada total. ",
    "html/noticias.html"
)

SELECT
    titulo,
    conteudo,
    caminhoImagem,
    link 
FROM
    noticias;