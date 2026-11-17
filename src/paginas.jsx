import { Link } from 'react-router-dom'

const etapas = [
  ['Pré-teste', 'O aluno responde à avaliação inicial para registrar o que já sabe sobre ISTs.'],
  ['Atividades interativas', 'O aluno pratica com perguntas sobre o conteúdo trabalhado em aula.'],
  ['Pós-teste', 'O aluno realiza uma nova avaliação e o professor pode comparar os resultados.'],
]

function Cartoes({ itens }) {
  return <div className="grade">{itens.map(([titulo, texto]) => (
    <article key={titulo}><h2>{titulo}</h2><p>{texto}</p></article>
  ))}</div>
}

function Pagina({ titulo, descricao, children }) {
  return <section><div className="abertura"><h1>{titulo}</h1><p>{descricao}</p></div>{children}</section>
}

export function Inicio() {
  return <>
    <section className="hero">
      <div><p className="contexto">Projeto Final de Curso</p>
        <h1>Educação sobre ISTs em uma plataforma interativa</h1>
        <p>O ConectaSaúde combina perguntas, atividades e avaliações para apoiar o aprendizado em sala de aula.</p>
        <Link className="botao" to="/sobre">Conheça o projeto ↗</Link>
      </div>
      <aside className="painel">
        <h2>A jornada do aluno</h2>
        <ol>{etapas.map(([titulo]) => <li key={titulo}>{titulo}</li>)}</ol>
        <Link to="/como-funciona">Veja como funciona →</Link>
      </aside>
    </section>
    <section className="destaques" aria-label="Destaques">
      <Cartoes itens={[
        ['Aprendizado ativo', 'Perguntas interativas para praticar o conteúdo.'],
        ['Pré e pós-teste', 'Avaliações que ajudam a acompanhar a evolução.'],
        ['Painel do professor', 'Resultados individuais e indicadores da turma.'],
      ]} />
    </section>
  </>
}

export function Sobre() {
  return <Pagina titulo="Sobre o projeto" descricao="O ConectaSaúde é um projeto acadêmico sobre educação em Infecções Sexualmente Transmissíveis (ISTs).">
    <Cartoes itens={[
      ['Contexto', 'A proposta trabalha o tema com atividades interativas em sala de aula.'],
      ['Público', 'Alunos participam das atividades. Professores acompanham os resultados e gerenciam o conteúdo.'],
      ['Objetivo', 'Apoiar o aprendizado e permitir que o professor compare o desempenho antes e depois das atividades.'],
    ]} />
  </Pagina>
}

export function Jornada() {
  return <Pagina titulo="Como funciona" descricao="A jornada do aluno passa por três etapas.">
    <ol className="etapas">{etapas.map(([titulo, texto]) => <li key={titulo}><h2>{titulo}</h2><p>{texto}</p></li>)}</ol>
    <Link className="botao" to="/funcionalidades">Conheça as funcionalidades</Link>
  </Pagina>
}

export function Recursos() {
  return <Pagina titulo="Funcionalidades" descricao="O professor acompanha o desempenho e organiza o conteúdo das atividades.">
    <Cartoes itens={[
      ['Painel do professor', 'Reúne o total de alunos ativos e as médias de cada avaliação entre os alunos que concluíram a etapa.'],
      ['Desempenho individual', 'Exibe as notas, indica avaliações pendentes e mostra a diferença em pontos percentuais quando há dois resultados.'],
      ['Banco de perguntas', 'Agrupa perguntas por tema e situação da revisão: aprovadas, pendentes ou recusadas.'],
      ['Relatórios de partidas', 'Apresentam jogos, acertos, erros, taxa de acerto e a data da última partida por aluno.'],
    ]} />
  </Pagina>
}

export function Equipe() {
  return <Pagina titulo="Equipe e contexto acadêmico" descricao="Projeto Final do curso Sistemas de Informação .">
    <Cartoes itens={[
      ['Equipe do ConectaSaúde', 'Estudantes de Análise e Desenvolvimento de Sistemas.'],
      ['Site de apresentação', 'Rafael Gastão Trajano Carlos · Programação para Internet.'],
      ['Professor da disciplina', 'Bruno Messias Aguiar · Programação para Internet.'],
    ]} />
  </Pagina>
}
