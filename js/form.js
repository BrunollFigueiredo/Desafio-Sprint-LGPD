// Classe para armazenar os dados do formulário
class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

// Função chamada ao enviar o formulário
function Post(form) {
    // Cria o objeto com os dados do formulário
    const data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    // Exibe no console (útil para testes)
    console.log(data);

    // Limpa os campos do formulário
    form.reset();

    // Desabilita novamente o botão após reset
    const btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.disabled = true;

    // Mostra a mensagem de confirmação
    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}, os seus dados foram encaminhados com sucesso!`);

    // Impede o envio real do formulário
    return false;
}

// Espera o documento carregar para adicionar os eventos
document.addEventListener("DOMContentLoaded", () => {
    const termosCheckbox = document.getElementById("termosCheckbox");
    const btnEnviar = document.getElementById("btnEnviar");

    // Monitora o checkbox dos Termos e Condições
    termosCheckbox.addEventListener("change", () => {
        // Habilita o botão apenas se estiver marcado
        btnEnviar.disabled = !termosCheckbox.checked;
    });
});
