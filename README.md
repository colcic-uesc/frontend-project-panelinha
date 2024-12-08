# Sistema de Gerenciamento Acadêmico - Frontend

Este projeto é uma interface web para o gerenciamento de professores, estudantes, projetos e habilidades, desenvolvida em HTML, CSS e JavaScript puro.

## Funcionalidades

- CRUD de Professores
- CRUD de Estudantes
- CRUD de Projetos
- CRUD de Habilidades
- Interface responsiva
- Validação de formulários
- Integração com API RESTful
- Design moderno e intuitivo

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari ou Edge)
- Servidor web local (pode ser o servidor embutido do PHP ou qualquer outro)
- Backend do projeto em execução (ver README.md do backend)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/colcic-uesc/frontend-project-panelinha.git
   cd frontend-project-panelinha
   ```

2. Configure a URL da API:
   - Abra o arquivo `assets/js/api.js`
   - Ajuste a constante `API_BASE_URL` para apontar para seu servidor backend
   ```javascript
   const API_BASE_URL = 'http://localhost:8000';
   ```

## Executando o projeto

Existem várias maneiras de executar o projeto localmente:

1. Usando o PHP:
   ```bash
   php -S localhost:3000
   ```

2. Usando o Python:
   ```bash
   # Python 2
   python -m SimpleHTTPServer 3000
   
   # Python 3
   python -m http.server 3000
   ```

3. Usando o Node.js (necessário instalar `http-server`):
   ```bash
   npx http-server -p 3000
   ```

Após iniciar o servidor, acesse:
- Interface web: `http://localhost:3000`

## Estrutura do Projeto

```
frontend-project-panelinha/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── form.css
│   ├── js/
│   │   ├── api.js
│   │   ├── main.js
│   │   └── validation.js
│   └── img/
├── pages/
│   ├── professor-form.html
│   ├── professor-list.html
│   ├── student-form.html
│   ├── student-list.html
│   ├── project-form.html
│   ├── project-list.html
│   ├── skill-form.html
│   └── skill-list.html
└── index.html
```

## Autores

- Equipe Panelinha

## Licença

Este projeto está sob a licença MIT.
