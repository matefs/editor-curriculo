import './style.css'

class Curriculo {
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

    constructor() {
        this.nome = "Mateus Schverz";
        this.linkedin = "https://www.linkedin.com/in/mateus-schverz";
        this.email = "matefs8569@gmail.com";
        this.telefone = "(49) 93300-4644";
        this.github = "https://github.com/matefs";
        this.localidade = "Concórdia, Santa Catarina";
        this.estadoCivil = "Solteiro";
        this.empregadoAtualmente = "Sim";
        this.foto = "https://avatars.githubusercontent.com/matefs";
        
        this.resumo = [
            "Sou um profissional com experiência full stack, com proficiência em JavaScript, Node.js e Python.",
            "Iniciei minha trajetória como Analista de Teste/QA, onde desenvolvi uma base sólida em testes de qualidade e garantia de software.",
            "Hoje, como Desenvolvedor Full Stack na Raster Gerenciamento de Risco, aplico meu conhecimento em tecnologias como PostgreSQL, Python (Django) e JavaScript (Adonis.js) para criar soluções eficientes e escaláveis que impulsionam o sucesso da equipe e da empresa."
        ];
        
        this.experienciaProfissional = [
            {
                empresa: "Raster Gerenciamento de Risco",
                cargos: [
                    {
                        titulo: "Desenvolvedor Full Stack",
                        periodo: "Novembro 2023 - Presente",
                        descricao: "Trabalho com Devextreme, pdfmake, PostgreSQL, PL/pgSQL, Django, Django Ninja, RabbitMQ e Adonis.js, desenvolvendo soluções robustas e escaláveis para a empresa.",
                        conquistas: ["Trabalhei com AWS S3, aumentando o cadastro em 20% dos registros de motoristas."]
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
                        titulo: "Professor de Informática",
                        periodo: "Outubro 2021 - Março 2023",
                        descricao: "Ministrei aulas de programação e desenvolvimento de software, abordando linguagens como Python, Java e HTML/CSS.",
                        conquistas: ["Desenvolvi materiais didáticos e projetos práticos, incentivando a aplicação de conceitos de lógica de programação e desenvolvimento web."]
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
            { instituicao: "UNOPAR", curso: "Curso Superior de Tecnologia (CST), Análise de Sistemas de Computação" },
            { instituicao: "E. E. B Olavo Cecco Rigon", curso: "Curso Técnico Integrado, Tecnologia da Informação" }
        ];
        
        this.idiomas = [
            { idioma: "Português", nivel: "Nativo" },
            { idioma: "Inglês", nivel: "Intermediário avançado (B2)" },
        ];
        
        this.projetosOnline = [
            { nome: "API de inteligência artificial gratuita", link: "https://github.com/matefs/Free-gpt-api-no-key-needed" },
            { nome: "Chat em tempo real com socket.io", link: "https://github.com/matefs/socket-messaging-fullstack" },
            { nome: "Bot de investimentos via Telegram", link: "https://github.com/matefs/Bitcoin-Price-Monitoring-Telegram-Bot" }
        ];
    }
}


// Exemplo de uso
const meuCurriculo = new Curriculo();


const popup = document.createElement("div");
popup.style.display = "none";
popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%)";
popup.style.background = "white";
popup.style.padding = "20px";
popup.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
popup.style.zIndex = "1000";
popup.innerHTML = `
    <h2>Editar Currículo</h2>
    <label>Nome: <input type="text" id="edit-nome" value="${meuCurriculo.nome}"></label><br>
    <label>LinkedIn: <input type="text" id="edit-linkedin" value="${meuCurriculo.linkedin}"></label><br>
    <label>E-mail: <input type="text" id="edit-email" value="${meuCurriculo.email}"></label><br>
    <label>Telefone: <input type="text" id="edit-telefone" value="${meuCurriculo.telefone}"></label><br>
    <button onclick="salvarEdicao()">Salvar</button>
    <button onclick="fecharPopup()">Fechar</button>
`;
document.body.appendChild(popup);

function abrirPopup() {
    popup.style.display = "block";
}

function fecharPopup() {
    popup.style.display = "none";
}

function salvarEdicao(): void {
    meuCurriculo.nome = (document.getElementById("edit-nome") as HTMLInputElement).value;
    meuCurriculo.linkedin = (document.getElementById("edit-linkedin") as HTMLInputElement).value;
    meuCurriculo.email = (document.getElementById("edit-email") as HTMLInputElement).value;
    meuCurriculo.telefone = (document.getElementById("edit-telefone") as HTMLInputElement).value;
    renderCurriculo(meuCurriculo);
    fecharPopup();
}

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error("Elemento #app não encontrado");

const renderCurriculo = () => {
app.innerHTML = `
    <h1 style="text-align: center;">${meuCurriculo.nome}</h1>
    <h2>Contatos</h2>
    <div style="display: grid; grid-template-columns: 1fr auto; gap: 10px; align-items: center;">
        <div>
            <p><strong>LinkedIn:</strong> <a href="${meuCurriculo.linkedin}" target="_blank">${meuCurriculo.linkedin}</a></p>
            <p><strong>E-mail:</strong> ${meuCurriculo.email}</p>
            <p><strong>Telefone:</strong> ${meuCurriculo.telefone}</p>
            <p><strong>GitHub:</strong> <a href="${meuCurriculo.github}" target="_blank">${meuCurriculo.github}</a></p>
            <p><strong>Localidade:</strong> ${meuCurriculo.localidade}</p>
            <p><strong>Estado Civil:</strong> ${meuCurriculo.estadoCivil}</p>
            <p><strong>Empregado atualmente:</strong> ${meuCurriculo.empregadoAtualmente}</p>
        </div>
        <div>
            <img src="${meuCurriculo.foto}" alt="Foto de ${meuCurriculo.nome}" width="150">
        </div>
    </div>

    <h2>Resumo</h2>
    ${meuCurriculo.resumo.map(paragrafo => `<p>${paragrafo}</p>`).join('')}

    <h2>Experiência Profissional</h2>
    ${meuCurriculo.experienciaProfissional.map(exp => `
        <h3>${exp.empresa}</h3>
        ${exp.cargos.map(cargo => `
            <p><strong>${cargo.titulo}</strong></p>
            <p><em>${cargo.periodo}</em></p>
            <p>${cargo.descricao}</p>
            ${cargo.conquistas ? `<ul>${cargo.conquistas.map(conquista => `<li>${conquista}</li>`).join('')}</ul>` : ''}
        `).join('')}
    `).join('')}

    <h2>Formação Acadêmica</h2>
    ${meuCurriculo.formacaoAcademica.map(formacao => `
        <h3>${formacao.instituicao}</h3>
        <p>${formacao.curso}</p>
    `).join('')}

    <h2>Idiomas</h2>
    ${meuCurriculo.idiomas.map(idioma => `<p><strong>${idioma.idioma}:</strong> ${idioma.nivel}</p>`).join('')}

    <h2>Projetos Online</h2>
    <ul>
        ${meuCurriculo.projetosOnline.map(projeto => `<li><a href="${projeto.link}" target="_blank">${projeto.nome}</a></li>`).join('')}
    </ul>
` } 


renderCurriculo();


