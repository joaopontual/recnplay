document.getElementById("diagnostico-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Coleta de respostas
    const comunicacao = parseInt(document.getElementById("comunicacao").value);
    const colaboracao = parseInt(document.getElementById("colaboracao").value);
    const crm = parseInt(document.getElementById("crm").value);
    const dadosCrm = parseInt(document.getElementById("dadosCrm").value);
    const automacao = parseInt(document.getElementById("automacao").value);
    const otimizacao = parseInt(document.getElementById("otimizacao").value);
    const bi = parseInt(document.getElementById("bi").value);
    const dashboards = parseInt(document.getElementById("dashboards").value);
    const ia = parseInt(document.getElementById("ia").value);
    const integracaoIa = parseInt(document.getElementById("integracaoIa").value);

    // Cálculo das somas
    const totalComunicacao = comunicacao + colaboracao;
    const totalAtendimento = crm + dadosCrm;
    const totalAutomacao = automacao + otimizacao;
    const totalBI = bi + dashboards;
    const totalIA = ia + integracaoIa;

    // Cálculo da pontuação total
    const pontuacaoTotal = totalComunicacao + totalAtendimento + totalAutomacao + totalBI + totalIA;

    // Classificação
    let nivel;
    if (pontuacaoTotal <= 30) {
        nivel = "Inicial";
    } else if (pontuacaoTotal <= 40) {
        nivel = "Intermediário";
    } else if (pontuacaoTotal <= 50) {
        nivel = "Avançado";
    } else {
        nivel = "Especialista";
    }

    // Exibindo o resultado
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>Pontuação Total: ${pontuacaoTotal}</h2><p>Nível de Transformação Digital: ${nivel}</p>`;
    resultDiv.style.display = "block"; // Mostra a div de resultados
});
