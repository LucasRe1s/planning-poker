# planning-poker
Sistema para realizar estimativa de esforço de tempo, utilizando a técnica de gameficação do planning poker.
## Instalação
Siga estas etapas para configurar e rodar o projeto:
1. Clone o repositório:
```bash
git clone https://github.com/LucasRe1s/planning-poker-api
```
2. Acesse o diretório do projeto:
```bash
cd nome-do-repositorio
```

3.  Instale as dependências:
```bash
npm install
```
4. Inicie o servidor
```bash
npm start
```


## Definição de APIs
url base local: `http://localhost:3000`

## Uso
- Usando uma interface grafica:

### 1. Criando um jogo
/games
**POST /games**
- payload da requisição
```json
{
    "name": "planning poker"
}
```

* exemplo de response
```json
{
    "id": "25351091-8e1d-4843-8aa6-1d06acd90c78",
    "name": "planning poker",
    "url": "/games/{id}"
}
```
### 2. buscando um jogo
/games
**GET /games**
- exemplo de response
```json
{
    "id": "25351091-8e1d-4843-8aa6-1d06acd90c78",
    "name": "planning poker",
    "url": "/games/{id}"
}
```

### Stack de Desenvolvimento
- Linguagem: Javascript

### BackEnd
- NodeJS
- Express
- Jest

### FrontEnd
- React
- TypeScript
- NextJS
- Jest