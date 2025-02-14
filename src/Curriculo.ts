
export class Curriculo {
    nome: string;
    linkedin: string;
    email: string;
    telefone: string;
    github: string;
    localidade: string;
    estadoCivil: string;
    empregadoAtualmente: string;
    foto: string;
    resumo: string[];
    experienciaProfissional: {
        empresa: string;
        cargos: {
            titulo: string;
            periodo: string;
            descricao: string;
            conquistas?: string[];
        }[];
    }[];
    formacaoAcademica: { instituicao: string; curso: string }[];
    idiomas: { idioma: string; nivel: string }[];
    projetosOnline: { nome: string; link: string }[];

    constructor(){
        this.nome = "Mateus Schverz";
        this.linkedin = "";
        this.email = "matefs8569@gmail.com";
        this.telefone = "(49) 93300-4644";
        this.github = "https://github.com/matefs";
        this.localidade = "Florianópolis, Santa Catarina";
        this.estadoCivil = "Solteiro";
        this.empregadoAtualmente = "Sim";
        this.foto = "https://avatars.githubusercontent.com/matefs";
        
        this.resumo = [
            "Desenvolvedor Full Stack com experiência em JavaScript, PHP e Java.",
            "Atualmente atuo no desenvolvimento de aplicações backend e frontend, com foco em escalabilidade e performance.",
            "Experiência sólida com APIs RESTful, bancos de dados relacionais e frameworks modernos."
        ];
        
        
        this.experienciaProfissional = [
            {
                empresa: "Raster Gerenciamento de Risco",
                cargos: [
                    {
                        titulo: "Desenvolvedor Full Stack",
                        periodo: "Novembro 2023 - Presente",
                        descricao: "Atuei no desenvolvimento e manutenção de sistemas escaláveis utilizando Java e Spring Boot (MVC, JDBC, Security), focado na criação de APIs RESTful e arquitetura baseada em microservices. Trabalhei com integração e otimização de bancos de dados relacionais, garantindo eficiência e segurança no armazenamento e manipulação de dados.",
                        conquistas: [
                            "Trabalhei com AWS S3, aumentando o cadastro em 20% dos registros de motoristas.",
                            "Desenvolvimento de soluções integradas, incluindo processamento de dados em larga escala e AWS S3 para armazenamento.",
                            "Categorizei mais de 20.000 NCMs de produtos utilizando inteligência artificial, otimizando processos fiscais.",
                            "Reduzi o tempo de resposta das APIs em 30% através de otimizações de banco de dados e caching eficiente.",
                            "Implementei autenticação JWT e controle de permissões granular para maior segurança do sistema.",
                            "Integrei RabbitMQ para melhorar o processamento assíncrono de eventos e notificações."
                        
                        ]
                    },
                    {
                        titulo: "Analista de Teste/QA",
                        periodo: "Janeiro 2023 - Abril 2024",
                        descricao: "Realizei testes de qualidade utilizando SQL, PostgreSQL, Microsoft SQL Server, Postman, RabbitMQ, REST APIs, Cypress, Bitbucket, Leaflet.js, Openstreetmaps e Sequelize.js."
                    }
                ]
            },
            {
                empresa: "Jumper Cursos",
                cargos: [
                    {
                        titulo: "Professor de Programação",
                        periodo: "Outubro 2021 - Março 2023",
                        descricao: "Ministrei aulas de programação e desenvolvimento de software, abordando linguagens como PHP, Java e HTML/CSS.",
                        conquistas: [
                            "Desenvolvi materiais didáticos e projetos práticos, incentivando a aplicação de conceitos de lógica de programação e desenvolvimento web.",
                            "Estruturei um plano de ensino progressivo, adaptando o conteúdo conforme o nível de conhecimento dos alunos.",
                            "Implementei atividades práticas para reforçar conceitos fundamentais de lógica de programação e algoritmos.",
                            "Orientei alunos na criação de seus primeiros projetos funcionais, promovendo a autonomia no desenvolvimento de software.",
                            "Utilizei ferramentas interativas para tornar o aprendizado mais dinâmico e engajador.",
                            "Proporcionei suporte individualizado para alunos com dificuldades, garantindo uma melhor compreensão dos conceitos técnicos.",
                            "Introduzi conceitos de boas práticas no desenvolvimento, como versionamento de código e organização de projetos."
                        ] 
                    }
                ]
            },
            {
                empresa: "Gdoor Zucchetti",
                cargos: [
                    {
                        titulo: "Testes de Software",
                        periodo: "Janeiro 2020 - Abril 2021",
                        descricao: "Realizei testes de software com Firebird SQL, IBExpert, e trabalhei com emissão de notas fiscais, NFC-e, NFE, XML, Ponto de Venda (PDV), e tecnologias como VMware, WordPress e Delphi básico."
                    }
                ]
            }
        ];

        this.formacaoAcademica = [
            { instituicao: "UNOPAR", curso: "Tecnólogo em analise e desenvolvimento de sistemas" },
            { instituicao: "UNOPAR", curso: "Pós Graduação em Inteligência Artificial" },
            { instituicao: "E. E. B Olavo Cecco Rigon", curso: "Curso Técnico Integrado, Tecnologia da Informação" }
        ];
        
        this.idiomas = [
            { idioma: "Português", nivel: "Nativo" },
            { idioma: "Inglês", nivel: "Intermediário avançado (B2)" }
        ];
        
        this.projetosOnline = [
            { nome: "API de inteligência artificial gratuita", link: "https://github.com/matefs/Free-gpt-api-no-key-needed" },
            { nome: "Chat em tempo real com socket.io", link: "https://github.com/matefs/socket-messaging-fullstack" },
            { nome: "Bot de investimentos via Telegram", link: "https://github.com/matefs/Bitcoin-Price-Monitoring-Telegram-Bot" }
        ];
    }
    

}

