Bootcamp Front-end Development - Atividade 2
Projeto: Lista de Tarefas em React
Descrição
Este projeto foi desenvolvido como parte da Atividade 2 do módulo "Introdução ao Desenvolvimento Front-end com React" no Bootcamp de Front-end Development. O objetivo é criar uma aplicação web simples utilizando React, consolidando os conceitos fundamentais de JSX, componentes, estados e propriedades.

Funcionalidades
Adicionar novas tarefas à lista.
Visualizar a lista de tarefas inseridas.
Interface simples e funcional, desenvolvida com React.
Tecnologias Utilizadas
React (Create React App)
JavaScript (ES6+)
HTML5
CSS3
Estrutura do Projeto
O projeto está organizado da seguinte forma:

├── public/
│   └── index.html          # Estrutura principal da página
├── src/
│   ├── App.js              # Componente principal da aplicação
│   ├── TodoList.js         # Componente de lista de tarefas
│   ├── App.css             # Estilos de aplicação
│   └── index.js            # Ponto de entrada da aplicação React
├── README.md               # Documentação do projeto
├── package.json            # Arquivo de configuração do npm
└── package-lock.json       # Arquivo de versão do npm
Componentes Principais
App.js: Gerencia o estado das tarefas (com useState), adiciona novas tarefas e renderiza o componente da lista de tarefas.
TodoList.js: Recebe as tarefas como props e as exibe em uma lista ordenada.