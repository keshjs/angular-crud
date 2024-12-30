# Como Executar o Projeto Angular com JSON Server

Este guia fornece instruções detalhadas para configurar e executar o projeto Angular, incluindo a configuração do backend utilizando o JSON Server.

---

## Pré-requisitos

Antes de iniciar, certifique-se de que você tem as seguintes ferramentas instaladas:

1. [Node.js](https://nodejs.org/) (versão 14 ou superior).
2. [Angular CLI](https://angular.io/cli) (versão compatível com o seu projeto).
3. Gerenciador de pacotes `npm` (incluso com o Node.js).

---

## Configuração do Projeto

1. **Clone o Repositório**

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. **Instale as Dependências**
   Execute o comando abaixo para instalar as dependências do projeto:

   ```bash
   npm install
   ```

3. **Configure o JSON Server**

   - Certifique-se de que o arquivo `db.json` está configurado corretamente na raiz do projeto. Este arquivo contém os dados que serão utilizados como backend.

   - Caso não exista um arquivo `db.json`, crie um com o seguinte conteúdo de exemplo:
     ```json
     {
       "itens": [
         {
           "id": 1,
           "nome": "John Doe",
           "cpf": "022.891.412-41",
           "whatsapp": "(46) 98816-4451"
         }
       ]
     }
     ```

4. **Instale o JSON Server Globalmente (se necessário)**
   ```bash
   npm install -g json-server
   ```

---

## Execução do Projeto

1. **Inicie o JSON Server**
   Execute o seguinte comando na raiz do projeto:

   ```bash
   json-server --watch db.json
   ```

   - O servidor JSON será iniciado em: [http://localhost:3000](http://localhost:3000).

2. **Inicie o Servidor Angular**
   Em outro terminal, execute o seguinte comando para iniciar o servidor de desenvolvimento do Angular:

   ```bash
   ng serve
   ```

   - O projeto Angular estará disponível em: [http://localhost:4200](http://localhost:4200).

## Considerações Finais

O projeto foi desenvolvido com base em conhecimentos próprios, vídeos do youtube no estilo tutorial e estudos a respeito do funcionamento do Angular. 

Obrigado pela atenção!

♡( ◡‿◡ )
