# Documentação da Pasta `web`

Esta pasta contém os arquivos responsáveis pela interface do usuário (UI) da aplicação web de cadastro de docentes.

## Arquivos na Pasta `web`

### `cadastro_docente.html`

#### Propósito
- Este arquivo HTML fornece um formulário interativo para cadastrar novos docentes no sistema.

#### Estrutura da Página
- **Título**: "Cadastro de Docente".
- **Campos**:
  - **Nome**: Campo de texto para inserir o nome do docente.
  - **Titulação**: Campo de texto para inserir a titulação do docente.
  - **Email**: Campo de texto para inserir o endereço de e-mail do docente.
  - **Currículo Lattes**: Campo de texto para inserir o link para o currículo Lattes do docente.
- **Botão**:
  - "Cadastrar": Botão para submeter o formulário e enviar os dados para a API.

#### Comportamento do Formulário
- Ao submeter o formulário, os dados inseridos são enviados como uma requisição POST para a rota `/docentes` da API.
- Exibe um alerta indicando sucesso ou falha ao cadastrar o docente.

#### Validação de Dados
- Todos os campos são obrigatórios.
- O campo de e-mail é validado para garantir que contenha um endereço de e-mail válido.
- O campo de Currículo Lattes é validado para garantir que contenha um link válido.

#### Exemplo de Uso
- Preencha todos os campos obrigatórios e submeta o formulário para cadastrar um novo docente no sistema.

### `visualizar_docentes.html`

#### Propósito
- Este arquivo HTML exibe a lista de docentes cadastrados no sistema de forma organizada e legível.

#### Estrutura da Página
- **Título**: "Visualizar Docentes".
- **Lista de Docentes**:
  - Cada docente é representado por um cartão com as seguintes informações:
    - **Nome**: Nome do docente.
    - **Titulação**: Titulação do docente.
    - **Email**: Endereço de e-mail do docente.
    - **Currículo Lattes**: Link para o currículo Lattes do docente.

#### Comportamento da Página
- Ao carregar a página, uma requisição GET é feita para a rota `/docentes` da API para obter a lista de docentes cadastrados.
- Os dados dos docentes são exibidos dinamicamente na página em formato de cartões.

#### Exemplo de Uso
- Acesse esta página para visualizar a lista completa de docentes cadastrados no sistema.

#### Tratamento de Erros
- Exibe um alerta em caso de falha ao carregar a lista de docentes, orientando o usuário a tentar novamente.
