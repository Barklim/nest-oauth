## Description

Simple OAuth on [Nest](https://github.com/nestjs/nest)

## endPoint

POST /authentication/google

## codeflow:

Создается клиентское приложение в Google Cloud. Полученные ключи используются на фронте. В консоли указывается роут колбэка.
На клиeнте при клике на компонент происходит редирект на страницу google, auth0 или любого друго сервиса. 
После введения данных редиректит обратно на указанный в консоли Google Cloud роут фронтенда, где клиент получает гугл токен.
Далее он отправляется на endpoint 
POST /authentication/google { token: x }
В последнюю очередь на бэкенде с помощью библиотеки google-auth-library, проверятеся достоверность полученного токена (verifyIdToken).
Из токена вытаскивается уникальный идентификатор для гугла (у каждого пользователя он свой уникальный), а дальше поиск в бд по нему,
если есть пользователь с таким токеном то обновить, в противном случае создать нового пользователя.

## Installation

```bash
$ npm install
```

## Running pg

```bash
$ docker-compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


