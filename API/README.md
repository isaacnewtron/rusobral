# API RESTful - pesquisaru

API RESTful que fará a comunicação do banco de dados com a aplicação e fornecerá os serviços.

# Modelos

* Usuário:

    ```javascript
    {
        "mat": 123456,
        "name": "Nome do Indivíduo",
        "email": "email@email.com",
        "role": "ADMIN"
    }
    ```
        mat: interger;
        name: string;
        email: string;
        roles: enum [ADMIN, STUDENT].

# Rotas

## Autenticação

### Login

``` POST \api\auth ```

Body: 

```javascript
{
    "mat": 123456,
    "password": "senha"
}
```

Response:
 
 * Sucesso

```javascript
{
    "code": 200,
    "msg": "Logado com sucesso",
    "accessToken": "tokendeacesso"
}
```

* Erro

```javascript
{
    "code": 400,
    "msg": "Algo de errado aconteceu!"
}
```

## Rotas de usuário

### Cadastro de usuário

``` POST \api\user\ ```

* Body: 

    ```javascript
    {
        "name": "Nome do indivíduo"
        "mat": 123456,
        "password": "senha",
        "email": "email@email.com"
    }
    ```

* Response:

    * Sucesso

    ```javascript
    {
        "code": 200,
        "msg": "Criado com sucesso",
    }
    ```

    * Erro

    ```javascript
    {
        "code": 400,
        "msg": "Algo de errado aconteceu!"
    }
    ```

### Listagem de usuários

Retorna uma lista de usuários, apenas o admin tem acesso a essa lista.

``` GET \api\user\ ```

* Header:

    Passar token de acesso no header

    ```
    X-Auth-Token = accessToken
    ```

* Response:
    
    * Sucesso

    ```javascript
    {
        "code": 200,
        "users": [
            {
                "name": "Nome do individuo",
                "mat": 123456,
                "email": "email@email.com"
            },
            {
                "name": "Nome do individuo",
                "mat": 123457,
                "email": "email@email.com"
            }]
    }
    ```

    * Erro

    ```javascript
    {
        "code": 400,
        "msg": "Algo de errado aconteceu!"
    }
    ```
