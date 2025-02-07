# Projeto React com Vite

Este documento fornece um guia passo a passo sobre como configurar, rodar e contribuir para este projeto React que utiliza o Vite como ferramenta de build.

## Sobre o Projeto

Aplicação web desenvolvida com React e Vite que permite aos usuários navegar por uma coleção de filmes e visualizar informações relevantes sobre eles, como sinopse, data de lançamento, trailer e muito mais. A aplicação consome dados da API The Movie Database (TMDb) para exibir informações atualizadas sobre os filmes.

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior): Certifique-se de que o Node.js esteja instalado no seu sistema. Você pode verificar a versão abrindo o terminal e executando `node -v`.
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js): O npm (Node Package Manager) é usado para gerenciar as dependências do projeto. Você pode verificar a versão executando `npm -v`.
- [Git](https://git-scm.com/) (opcional): Para versionamento do código e colaboração.

## Como Rodar o Projeto

Siga estes passos para rodar o projeto localmente:

1.  **Clone o Repositório (Opcional):**

    Se você ainda não tem o código, clone o repositório do GitHub:

    ```bash
    git clone https://github.com/vitor-cf/cubos-desafio.git
    ```

2.  **Instale as Dependências:**

    Navegue até o diretório raiz do projeto no seu terminal e execute o seguinte comando para instalar todas as dependências listadas no arquivo `package.json`:

    ```bash
    npm install
    ```

    Este comando irá baixar e instalar todas as bibliotecas e ferramentas necessárias para o projeto.

3.  **Execute o Servidor de Desenvolvimento:**

    Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento do Vite:

    ```bash
    npm run dev
    ```

    Este comando irá iniciar o servidor de desenvolvimento e abrir o projeto em uma nova aba do seu navegador. Se não abrir automaticamente, verifique o terminal para o endereço local (geralmente `http://localhost:3000/` ou similar).
