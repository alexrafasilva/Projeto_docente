# Arquivos na Pasta `api`

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

# Arquivos na Pasta `web`

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
