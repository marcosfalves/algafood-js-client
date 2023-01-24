# algafood-js-client
Aplicação simples com JavaScript e JQuery para aprender sobre o consumo de API's REST e sobre o CORS (Cross-Origin Resource Sharing).

Esse é um client para a API: https://github.com/marcosfalves/algafood-api

-------------------------
## Desenvolvido com
* Java Script
* JQuery
* Bootstrap
-------------------------

## Execução Local
### Pré-requisitos
- ⚫ [Git](https://git-scm.com/)
- 🐋 [Docker](https://docs.docker.com/engine/install/) (Para utilizar o devcontainer)


### Instruções
1. Clone o repositório
   ```sh
   git clone https://github.com/marcosfalves/algafood-js-client.git
   ```
2. Instalar o http-server
    ```sh
    npm install --global http-server
    ```
3. Executar 
    ```sh
    http-server -p 8000
    ```
4. Editar etc/hosts
    ```sh
    sudo nano /etc/hosts    
    ```
    Adicionar:
    ```text
    127.0.0.1       api.algafood.local
    127.0.0.1       www.algafood.local
    127.0.0.1       www.matafome.local
    ```
