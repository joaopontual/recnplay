document.getElementById("diagnostico-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Coleta de dados do formulário
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

    // Cálculo das pontuações para cada área
    const totalComunicacaoColaboracao = comunicacao + colaboracao;
    const totalAtendimentoVendas = crm + dadosCrm;
    const totalAutomacaoProcessos = automacao + otimizacao;
    const totalBusinessIntelligence = bi + dashboards;
    const totalInteligenciaArtificial = ia + integracaoIa;

    const pontuacaoTotal = totalComunicacaoColaboracao + totalAtendimentoVendas + totalAutomacaoProcessos +
                           totalBusinessIntelligence + totalInteligenciaArtificial;

    // Classificação do nível de transformação digital
    let nivel;
    if (pontuacaoTotal <= 30) {
        nivel = "Inicial";
    } else if (pontuacaoTotal <= 35) {
        nivel = "Intermediário";
    } else if (pontuacaoTotal <= 45) {
        nivel = "Avançado";
    } else {
        nivel = "Especialista";
    }

    // Identificação das áreas com menor pontuação
    const areas = {
        "Comunicação e Colaboração": totalComunicacaoColaboracao,
        "Atendimento e Vendas": totalAtendimentoVendas,
        "Automação de Processos": totalAutomacaoProcessos,
        "Business Intelligence (BI)": totalBusinessIntelligence,
        "Inteligência Artificial (IA)": totalInteligenciaArtificial
    };

    const areasOrdenadas = Object.entries(areas).sort((a, b) => a[1] - b[1]);
    const menoresAreas = areasOrdenadas.slice(0, 2);

    // Recomendações para as áreas de menor pontuação
    const recomendacoes = {
        "Comunicação e Colaboração": "Considere implementar ferramentas básicas de comunicação, como Slack ou Microsoft Teams, para facilitar o fluxo de informações e colaboração entre as equipes.",
        "Atendimento e Vendas": "Invista em uma plataforma de CRM para gerenciar relacionamentos com clientes e aprimorar as estratégias de vendas.",
        "Automação de Processos": "Avalie processos internos que podem ser automatizados e considere ferramentas de RPA para otimizar tarefas repetitivas e aumentar a eficiência.",
        "Business Intelligence (BI)": "Introduza ferramentas de BI, como Power BI ou Tableau, para análise de dados e obtenção de insights que auxiliem na tomada de decisões.",
        "Inteligência Artificial (IA)": "Avalie o uso de machine learning e análises preditivas para melhorar processos estratégicos e oferecer previsões baseadas em dados."
    };

    // Exibição dos resultados e recomendações no div de resultados
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <div class="results">
            <h2>Pontuação Final: ${pontuacaoTotal}</h2>
            <p>Nível de Transformação Digital: ${nivel}</p>
        </div>
        <div class="recommendations">
            <h3>Recomendações para melhoria nas áreas de menor pontuação:</h3>
            <ul>
                ${menoresAreas.map(area => `<li><strong>${area[0]}:</strong> ${recomendacoes[area[0]]}</li>`).join('')}
            </ul>
        </div>
    `;
});
