 <h1 align= "center" >Arquivos na Pasta `api` </h1> 

### `docenteModels.js`

#### Propósito
- Define o esquema de dados para representar os docentes no sistema.

#### Esquema do Docente
- `nome`: Nome do docente.
- `titulacao`: Titulação do docente.
- `email`: Endereço de e-mail do docente.
- `lattes`: Link para o currículo Lattes do docente.

#### Exportação
- Exporta o modelo `Docente` definido com base no esquema `docenteSchema`.

#### Validação de Dados
- Todos os campos são obrigatórios.

#### Exemplo de Uso
```javascript
const Docente = require('./docenteModels');

// Criar um novo docente
const novoDocente = new Docente({
  nome: 'João Silva',
  titulacao: 'Doutor',
  email: 'joao.silva@example.com',
  lattes: 'http://lattes.cnpq.br/123456789'
});

// Salvar o docente no banco de dados
novoDocente.save()
  .then(docente => {
    console.log('Docente criado:', docente);
  })
  .catch(err => {
    console.error('Erro ao criar docente:', err);
  });
```

### `docenteRoutes.js`

#### Propósito
- Define as rotas HTTP para criar e buscar docentes no sistema.

#### Rotas
- `POST /docentes`: Criar um novo docente.
- `GET /docentes`: Buscar todos os docentes cadastrados.

#### Tratamento de Erros
- Retorna códigos de status apropriados em caso de sucesso ou falha.

#### Exemplo de Uso
```javascript
const docenteRoutes = require('./docenteRoutes');
app.use('/api', docenteRoutes);
```

#### Configurações Avançadas
- Inclui middleware para permitir o CORS.

### `server.js`

#### Propósito
- Configura e inicia o servidor Express.
- Conecta-se ao banco de dados MongoDB.
- Define rotas para manipular requisições relacionadas aos docentes.
- Serve arquivos estáticos para o front-end.

#### Configuração do Servidor
- Permite o CORS.
- Define a porta do servidor.

#### Conexão com o Banco de Dados MongoDB
- Utiliza o Mongoose para se conectar ao banco de dados.

#### Middleware de Análise de Corpo de Requisição JSON
- Habilita o parse do corpo das requisições como JSON.

#### Servidor de Arquivos Estáticos
- Serve arquivos estáticos do diretório `web`.

#### Exemplo de Uso
```javascript
const app = require('./server');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
```

#### Tratamento de Erros
- Retorna mensagens de erro em caso de falhas durante as requisições.

<h1 align= "center" >Arquivos na Pasta `web` </h1> 

### `cadastro_docente.html`

#### Propósito
- Fornecer um formulário para cadastrar novos docentes no sistema.

#### Estrutura da Página
- Título: "Cadastro de Docente".
- Campos: Nome, titulação, e-mail e currículo Lattes.
- Botão: "Cadastrar".

#### Comportamento do Formulário
- Envia uma requisição POST para a rota `/docentes` da API ao submeter o formulário.
- Exibe alertas em caso de sucesso ou erro durante o cadastro.

#### Exemplo de Uso
- Preencha o formulário com os dados do docente e clique em "Cadastrar" para enviar os dados para a API.

### `visualizar_docentes.html`

#### Propósito
- Exibir a lista de docentes cadastrados no sistema.

#### Estrutura da Página
- Título: "Visualizar Docentes".
- Cartões: Cada docente é representado por um cartão com nome, titulação, e-mail e currículo Lattes.

#### Comportamento da Página
- Faz uma requisição GET para a rota `/docentes` da API ao carregar a página.
- Exibe dinamicamente os dados dos docentes recebidos da API.

#### Exemplo de Uso
- Acesse a página para visualizar a lista de docentes cadastrados no sistema.
Claro, aqui está a documentação completa incluindo os requisitos de instalação:

---

<h1 align = "center">
  COMO INSTALAR E CONFIGURAR O SISTEMA
</h1>

Este documento fornece instruções detalhadas sobre como instalar e configurar o sistema de cadastro de docentes, incluindo as dependências necessárias e os passos para executar a aplicação.

## Requisitos de Instalação

Para executar a aplicação de cadastro de docentes, você precisará ter os seguintes softwares instalados:

1. **Node.js**: Plataforma de execução de JavaScript.
   - **Download**: [Node.js](https://nodejs.org/)
   - **Instalação**: Siga as instruções de instalação do site oficial.

2. **MongoDB**: Sistema de gerenciamento de banco de dados NoSQL.
   - **Download**: [MongoDB](https://www.mongodb.com/try/download/community)
   - **Instalação**: Siga as instruções de instalação do site oficial.

## Configuração do Ambiente

Após instalar as dependências necessárias, siga estas etapas para configurar o ambiente de desenvolvimento:

1. **Clonar o Repositório**: Clone o repositório do projeto para o seu ambiente local.

   ```bash
   git clone https://github.com/seu-usuario/cadastro-docentes.git
   ```

2. **Instalar Dependências**: Navegue até o diretório raiz do projeto e instale as dependências necessárias usando o npm (Node Package Manager).

   ```bash
   cd [nome do diretório]
   npm install
   ```

3. **Configurar Variáveis de Ambiente**: configure as variáveis de ambiente necessárias, como a URI de conexão com o banco de dados MongoDB, se necessário.

## Execução da Aplicação

Após configurar o ambiente, você pode executar a aplicação de cadastro de docentes. Aqui estão os passos:

1. **Iniciar o Servidor Express**: Execute o seguinte comando para iniciar o servidor Express.

   ```bash
   npm start
   ```
   ```bash
   node server.js
   ```

2. **Acessar a Interface do Usuário**: Abra um navegador da web e acesse a interface do usuário da aplicação em `http://localhost:3000`. Você pode usar as páginas `cadastro_docente.html` e `visualizar_docentes.html` para interagir com a aplicação.

## Observações Adicionais

- Certifique-se de que o MongoDB esteja em execução antes de iniciar o servidor Express.
- Esteja ciente de quaisquer mensagens de erro durante o processo de instalação ou execução e resolva quaisquer problemas conforme necessário.

Com isso, você terá configurado e executado com sucesso a aplicação de cadastro de docentes em seu ambiente local.
