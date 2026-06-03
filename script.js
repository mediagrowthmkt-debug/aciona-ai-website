const agents = [
  ['Daniel', 'Estratégia', 'assets/agents/daniel-ceo.mage.png', 'Relatório da manhã, DRE, metas e prioridade do dia.'],
  ['Gabriel', 'Gestão', 'assets/agents/gabriel-gerente.png', 'Demandas, reuniões, status e plano de ação.'],
  ['Naomi', 'Financeiro', 'assets/agents/naomi-financeiro.png', 'Cobranças, contratos, inadimplência e recibos.'],
  ['Pedro', 'Comunicação', 'assets/agents/pedro-mensagens.png', 'WhatsApp, e-mail, tom da marca e respostas difíceis.'],
  ['Alex', 'Onboarding', 'assets/agents/alex-agente-estruturacao.png', 'Checklists, implantação e validação de processos.'],
  ['Brian', 'Dados', 'assets/agents/brian-analista-dados.png', 'Indicadores, gráficos, PDFs e alertas executivos.'],
  ['Carla', 'Apresentações', 'assets/agents/carla-apresentacoes.png', 'Decks, propostas e apresentações em minutos.'],
  ['Emily', 'Copywriting', 'assets/agents/emily-copywriter.png', 'Anúncios, páginas, roteiros, e-mails e mensagens.'],
  ['Frank', 'DEV / T.I.', 'assets/agents/frank-dev-ti.png', 'Sites, APIs, integrações, planilhas e webhooks.'],
  ['Helena', 'Conteúdo', 'assets/agents/helena-social-media.png', 'Calendário, redes sociais e oportunidades de conteúdo.'],
  ['Jessica', 'Tráfego', 'assets/agents/jessica-gestor-trafego.png', 'Campanhas, verba, CPL, criativos e otimizações.'],
  ['Kevin', 'SEO', 'assets/agents/kevin-seo.png', 'Google, ranking, páginas e concorrentes.'],
  ['Mia', 'Design', 'assets/agents/mia-designer.png', 'Artes, carrosséis, banners e identidade visual.'],
  ['Sarah', 'CRM', 'assets/agents/sarah-gestor-crm.png', 'Pipeline, leads, oportunidades e automações.'],
  ['Victor', 'Vídeo', 'assets/agents/vitor-editor-de-video.png', 'Reels, cortes, áudio e vídeos prontos para publicar.'],
  ['Iris', 'Conhecimento', 'assets/agents/iris-curador-conhecimento.png', 'Links, PDFs, vídeos, ideias e memória pesquisável.'],
  ['Oliver', 'Vendas', 'assets/agents/oliver-vendas.png', 'Propostas, follow-ups, orçamentos e fechamento.']
];

const grid = document.querySelector('#agentsGrid');
if (grid) {
  grid.innerHTML = agents.map(([name, role, photo, desc]) => `
    <article class="agent-card" data-reveal>
      <img src="${photo}" alt="Agente ${name}" loading="lazy">
      <div class="agent-card-body">
        <h3>${name}</h3>
        <div class="agent-role">${role}</div>
        <p>${desc} Exemplo já implementado, adaptável ao fluxo da sua empresa.</p>
      </div>
    </article>
  `).join('');
}

const revealItems = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
