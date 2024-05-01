# Documentação da API de Cadastro de Docentes

##### Esta documentação descreve os arquivos e funcionalidades da API para o sistema CORPO_DOCENTE.

## Arquivos na Pasta `api`

### `docenteModels.js`

#### Propósito
 -> Define o esquema de dados para representar os docentes no sistema.

#### Esquema do Docente
- `nome`: Nome do docente.
- `titulacao`: Titulação do docente.
- `email`: Endereço de e-mail do docente.
- `lattes`: Link para o currículo Lattes do docente.

#### Exportação
-> Exporta o modelo `Docente` definido com base no esquema `docenteSchema`.

### `docenteRoutes.js`

#### Propósito
-> Define as rotas HTTP para criar e buscar docentes no sistema.

#### Rotas
-> `POST /docentes`: Criar um novo docente.
-> `GET /docentes`: Buscar todos os docentes cadastrados.

#### Exemplo de Uso
```javascript
const docenteRoutes = require('./docenteRoutes');
app.use('/api', docenteRoutes);
```

#### Exportação
-> Exporta as rotas definidas.

### `server.js`

#### Propósito
-> Configura e inicia o servidor Express.
-> Conecta-se ao MongoDB, banco de dados.
-> Define rotas para manipular requisições relacionadas aos docentes.
-> Serve arquivos estáticos para o front-end(html,css.

#### Configuração do Servidor
-> Permite o CORS.
-> Escuta na porta especificada.

#### Conexão com o Banco de Dados MongoDB
-> Utiliza o Mongoose para se conectar ao banco de dados.

#### Middleware de Análise de Corpo de Requisição JSON
-> Habilita o parse do corpo das requisições como JSON.

#### Servidor de Arquivos Estáticos
-> Serve arquivos estáticos do diretório `web`.

#### Exemplo de Uso
```javascript
const app = require('./server');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
```

#### Exportação
-> Esse é o ponto de entrada do servidor, logo não temos nenhuma exportação direta.
