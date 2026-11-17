# ConectaSaúde

Site de apresentação do PFC em React, Vite e React Router. Inclui cinco páginas com rotas próprias: Início, Sobre o projeto, Como funciona, Funcionalidades e Equipe.

## Executar

Com Node.js 22, abra um terminal na pasta que contém o package.json.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal. Use `npm run build` e `npm run preview` para conferir a versão de produção. Para publicar na Vercel, importe seu repositório e selecione o preset Vite. O arquivo vercel.json permite abrir os endereços internos diretamente.

## Registro da atividade

1. **Ideia.** Apresentar o ConectaSaúde e mostrar como alunos e professores usam a plataforma.
2. **Protótipo.** Menu com cinco páginas, abertura com apresentação e botão, quadro com a jornada do aluno e três cartões de destaque.
3. **Código.** Em src/main.jsx, a lista de páginas conecta cada URL a um componente e gera os links do menu. O cabeçalho e o rodapé ficam fora das rotas para serem reutilizados. Em src/paginas.jsx, o componente Cartoes recebe uma lista de títulos e descrições por props.
4. **Ajustes.** O menu ocupa várias linhas em telas estreitas, o link ativo indica a página atual e a rota desconhecida oferece um retorno ao início.
5. **Entrega.** Confira os cinco links, navegue por teclado, teste em tela estreita e recarregue uma rota interna após publicar. Registre os resultados observados e os ajustes feitos. Confirme os nomes dos demais integrantes antes da entrega.

### Prompt-base do planejamento

> Crie a estrutura de um site acadêmico chamado ConectaSaúde usando React, Vite e React Router. Crie cinco páginas com rotas próprias: Início, Sobre o projeto, Como funciona, Funcionalidades e Equipe. Reaproveite menu e rodapé, use CSS responsivo e indique a página atual no menu. Explique onde ficam as rotas e como os componentes são reaproveitados.

As apresentações React.pptx e React - IA.pptx, de Bruno Messias Aguiar, orientaram a componentização e o registro do fluxo de trabalho. O conteúdo usa as informações disponíveis sobre o PFC.
