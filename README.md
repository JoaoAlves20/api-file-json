# API com manipulação de arquivo JSON

## Sobre o projeto

O projeto foi criado para manipular um arquivo JSON, usando esse arquivo como um banco de dados, fazendo todo o CRUD no arquivo, com endpoints que pesquisam o ID e realizam a manipulação com os dados inseridos no Params ou no Body da requisição. Foi feito em NodeJS puro, sem nenhum framework (por exemplo, Express), e todas as funcionalidades foram testadas usando Mocha, e esses testes estão inseridos na pasta "test".

## Tecnologias

- JavaScript
- JSON

## Bibliotecas

- fs/promises
- path
- url
- http
- mocha

## Rodando o projeto

Para rodar o projeto, é importante ter o NodeJS e Git instalados na sua máquina, mas caso você já tenha instalado, basta seguir os passos abaixo:

```bash
# primeiro é preciso instalar todas as dependências
$ npm i

# após isso, podemos rodar o projeto na nossa máquina
$ npm run dev
```
