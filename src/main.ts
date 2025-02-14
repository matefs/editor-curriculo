import './style.css'

import { Curriculo } from './Curriculo.ts';
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


