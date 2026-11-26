# SimBora!

> *"Um lugar para cada versão de você."*

Aplicação web responsiva (*mobile-first*) desenvolvida como projeto prático da disciplina de **Interação Humano-Computador (IHC)**. O **SimBora!** é uma plataforma de descoberta e avaliação colaborativa de estabelecimentos de lazer e gastronomia (bares, cafés, restaurantes, baladas e parques), projetada para substituir resenhas genéricas e longas por percepções rápidas do ambiente, contexto social de companhia e micro-avisos práticos deixados pela comunidade.

---

## Integrantes da Dupla

* **ASAFFE DE SOUZA GONÇALVES** — Arquitetura de Front-end, transposição do *Design System* (Figma para CSS) e integração de telas.
* **ALBERT LEITE RESPLANDES** — Modelagem do Banco de Dados Relacional, implementação do Back-end (PHP/PDO) e hospedagem.

---

## Propósito e Diferenciais do Sistema

Em aplicativos tradicionais de avaliação, uma nota alta não garante que um estabelecimento seja adequado para a ocasião do usuário (um bar excelente para ir com uma turma grande pode ser inadequado para um encontro romântico tranquilo ou uma reunião informal). O **SimBora!** resolve esse problema por meio de três pilares:

1. **Filtragem por Contexto Social:** O usuário seleciona com quem vai sair (`Solo`, `Encontro/Date`, `Galera`, `Família` ou `Trabalho`) e o sistema adapta as recomendações e índices de compatibilidade.
2. **Avaliação Sensorial Reutilizável ("Vibe"):** Medição visual da atmosfera real do local (`Barulho`, `Movimento`, `Iluminação` e `Atendimento`) combinada a etiquetas rápidas da comunidade que podem ser confirmadas com apenas um toque (*"Assinar embaixo"*).
3. **Dicas de Amigo:** Cartões objetivos limitados a **140 caracteres** (estilizados como *post-its* verdes e âmbar) contendo avisos úteis para evitar contratempos antes da visita (ex.: estacionamento, filas e horários).

---

## Fundamentos de IHC Aplicados

A interface foi construída a partir do protótipo elaborado no Figma (`390×844 px`), aplicando conceitos teóricos centrais de IHC:

* **Divulgação Progressiva (*Progressive Disclosure*):** Apresentação gradual da proposta do app no fluxo de boas-vindas (*onboarding*) antes de solicitar autenticação.
* **Lei de Hick (*Hick's Law*):** Organização dos filtros em categorias visuais e seletores de toque único, reduzindo o tempo de tomada de decisão.
* **Heurísticas de Nielsen:**
  * *Visibilidade do Status do Sistema:* Atualização dinâmica do contador de locais encontrados conforme os filtros são combinados.
  * *Correspondência com o Mundo Real:* Barras de intensidade intuitiva e cartões de dicas em formato de bilhetes adesivos.
  * *Controle e Liberdade do Usuário:* Alternância rápida entre visualização em `Lista` e `Mapa`.
  * *Consistência e Padrões:* Barra de navegação inferior fixa com estado ativo padronizado (`Lugares`, `Favoritos`, `Pesquisar` e `Perfil`).
  * *Reconhecimento em vez de Memorização:* Nuvem de *tags* clicáveis na tela de avaliação, eliminando o bloqueio da caixa de texto em branco.
* **Lei de Fitts (*Fitts's Law*):** Posicionamento dos principais botões de ação e da barra de navegação na zona inferior de alcance natural do polegar.
* **Design Emocional (Don Norman):** Uso de paleta harmônica (`#6C5CE7`, `#1E1B4B`, `#F8F7FF`), tipografia `Inter` e cantos arredondados (`16px` a `24px`) para transmitir leveza, acolhimento e escaneabilidade.

---

## Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3 (CSS Variables nativas reproduzindo o *Design System*), JavaScript (ES6+)
* **Back-end:** PHP 8+ (com extensão `PDO` e *Prepared Statements*)
* **Banco de Dados:** MySQL / MariaDB (`simbora_db` modelado na 3FN com 7 tabelas relacionais)
* **Ambiente de Desenvolvimento:** Ubuntu 24.04 LTS, Apache2, VS Code e Git/GitHub

---

## Estrutura de Diretórios

```text
simbora/
├── config/
│   └── conexao.php           # Configuração de conexão PDO com o banco MySQL
├── api/
│   ├── login.php             # Autenticação de usuário e controle de sessão
│   ├── listar_locais.php     # Consulta dinâmica filtrada por contexto, categoria e vibe
│   └── salvar_avaliacao.php  # Persistência de avaliações, votos em tags e Dicas de Amigo
├── assets/
│   ├── css/
│   │   └── design-system.css # Tokens visuais (cores, tipografia, espaçamentos e bordas)
│   └── js/
│       └── onboarding.js     # Lógica interativa da tela inicial
├── index.html                # Tela 01: Boas-vindas (Onboarding) e Login
└── README.md                 # Documentação principal do repositório
