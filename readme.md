## GoIT Node.js Course Template Homework

Выполните форк этого репозитория для выполнения домашних заданий (2-6)
Форк создаст репозиторий на вашем http://github.com

Добавьте ментора в коллаборацию

Для каждой домашней работы создавайте свою ветку.

- hw02
- hw03
- hw04
- hw05
- hw06

Каждая новая ветка для дз должна делаться с master

После того как вы закончили выполнять домашнее задание в своей ветке, необходимо сделать пулл-реквест (PR). Потом добавить ментора для ревью кода. Только после того как ментор заапрувит PR, вы можете выполнить мердж ветки с домашним заданием в мастер.

Внимательно читайте комментарии ментора. Исправьте замечания и сделайте коммит в ветке с домашним заданием. Изменения подтянуться в PR автоматически после того как вы отправите коммит с исправлениями на github
После исправления снова добавьте ментора на ревью кода.

- При сдаче домашней работы есть ссылка на PR
- JS-код чистый и понятный, для форматирования используется Prettier

### Команды:

- `npm start` &mdash; старт сервера в режиме production
- `npm run start:dev` &mdash; старт сервера в режиме разработки (development)
- `npm run lint` &mdash; запустить выполнение проверки кода с eslint, необходимо выполнять перед каждым PR и исправлять все ошибки линтера
- `npm lint:fix` &mdash; та же проверка линтера, но с автоматическими исправлениями простых ошибок

# Домашнє завдання 2

Написати REST API для роботи з колекцією контактів. Для роботи з REST API використовуй [Postman] (https://www.getpostman.com/).

Прочитай уважно readme в клонованому темплейті, там описаний механізм здачі домашніх завдань. Та починай виконувати ДЗ

## Крок 1

Створи гілку `hw02-express` з гілки master.

Встанови в командою пакети

```bash
npm i
```

Такі пакети є в проекті:

- [express](https://www.npmjs.com/package/express)
- [morgan](https://www.npmjs.com/package/morgan)
- [cors](https://www.npmjs.com/package/cors)

## Крок 2

У `app.js` – веб сервер на `express` і прошарки `morgan` і `cors`. Почни налаштовувати раутінг для роботи з колекцією контактів.

REST API повинен підтримувати такі раути.

### @ GET /api/contacts

- нічого не отримує
- викликає функцію `listContacts` для роботи з json-файлом `contacts.json`
- повертає масив всіх контактів в json-форматі зі статусом `200`

### @ GET /api/contacts/:id

- Не отримує `body`
- Отримує параметр `id`
- викликає функцію `getById` для роботи з json-файлом `contacts.json`
- якщо такий `id` є, повертає об'єкт контакту в json-форматі зі статусом `200`
- якщо такого `id` немає, повертає json з ключем `"message": "Not found"` і статусом `404`

### @ POST /api/contacts

- Отримує `body` в форматі `{name, email, phone}` (усі поля обов'язкові)
- Якщо в `body` немає якихось обов'язкових полів, повертає json з ключем `{"message": "missing required name field"}` і статусом `400`
- Якщо з `body` все добре, додає унікальний ідентифікатор в об'єкт контакту
- Викликає функцію `addContact(body)` для збереження контакту в файлі `contacts.json`
- За результатом роботи функції повертає об'єкт з доданим `id` `{id, name, email, phone}` і статусом `201`

### @ DELETE /api/contacts/:id

- Не отримує `body`
- Отримує параметр `id`
- Викликає функцію `removeContact` для роботи з json-файлом `contacts.json`
- якщо такий `id` є, повертає json формату `{"message": "contact deleted"}` і статусом `200`
- якщо такого `id` немає, повертає json з ключем `"message": "Not found"` і статусом `404`

### @ PUT /api/contacts/:id

- Отримує параметр `id`
- Отримує `body` в json-форматі c оновленням будь-яких полів `name, email и phone`
- Якщо `body` немає, повертає json з ключем `{"message": "missing fields"}` і статусом `400`
- Якщо з `body` всі добре, викликає функцію `updateContact(contactId, body)`. (Напиши її) для поновлення контакту в файлі `contacts.json`
- За результатом роботи функції повертає оновлений об'єкт контакту і статусом `200`. В іншому випадку, повертає json з ключем `"message": "Not found"` і статусом `404`

## Крок 3

Для маршрутів, що приймають дані (`POST` та ` PUT`), продумайте перевірку (валідацію) отриманих даних. Для валідації прийнятих даних використовуйте пакет [joi](https://github.com/sideway/joi)

## Критерії прийому дз # 2-6

- Створено репозиторій з домашнім завданням &mdash; REST API додаток
- При створенні репозиторія використаний [бойлерплейт](https://github.com/goitacademy/nodejs-homework-template)
- Пулл-реквест (PR) з відповідним дз відправлений менторові в [schoology](https://app.schoology.com/login) на перевірку (посилання на PR)
- Код відповідає технічному завданню проекта
- При виконанні коду не виникає необроблених помилок
- Назва змінних, властивостей і методів починається з малої літери і записуються в нотації CamelCase. Використовуються англійські іменники
- Назва функції або методу містить дієслово
- У коді немає закоментуваних ділянок коду
- Проект коректно працює з актуальною LTS-версією Node

**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Домашнє завдання 3

Створи гілку `03-mongodb` з гілки `master`.

Продовж створення REST API для роботи з колекцією контактів.

## Крок 1

Створи аккаунт на [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Після чого в акаунті створи новий проект і настрій **бесплатный кластер**. Під час налаштування кластера вибери провавйдера і регіон як на скріншоті нижче. Якщо вибрати занадто віддалений регіон, швидкість відповіді сервера буде довше.

## Крок 2

Установи графічний редактор
[MongoDB Compass](https://www.mongodb.com/download-center/compass) для зручної
роботи з базою даних для MongoDB. Настрій підключення своєї хмарної бази даних
до Compass. У MongoDB Atlas не забудь створити користувача з правами
адміністратора.

## Крок 3

Через Compass створи базу даних `db-contacts` і в ній колекцію `contacts`. Візьми [ссылка на json](./contacts) і за допомогою Compass наповни колекцію `contacts` (зроби імпорт) його вмістом.

Якщо ви все зробили правильно, дані повинні з'явитися у вашій базі в колекції `contacts`


## Крок 4

Використовуй вихідний код [домашней работы #2](../homework-02/README.md) і
заміни зберігання контактів з json-файлу на створену тобою базу даних.

- Напиши код для створення підключення до MongoDB за допомогою [Mongoose](https://mongoosejs.com/).
- При успішному підключенні виведи в консоль повідомлення `"Database connection successful"`.
- Обов'язково обробив помилку підключення. Виведи в консоль повідомлення помилки і заверши процес використовуючи `process.exit(1)`.
- У функціях обробки запитів заміни код CRUD-операцій над контактами з файлу, на Mongoose-методи для роботи з колекцією контактів в базі даних.

Схема моделі для колекції `contacts`:

```js
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  }
```

## Крок 5

У нас з'явилося в контактах додаткове поле статусу `favorite`, яке приймає логічне значення` true` або `false`. Воно відповідає за те, що в обраному чи ні знаходиться зазначений контакт. Потрыбно реалізувати для оновлення статусу контакту новий роутер

### @ PATCH / api / contacts /: contactId / favorite

- Отримує параметр `contactId`
- Отримує `body` в json-форматі c оновленням поля` favorite`
- Якщо `body` немає, повертає json з ключем` { "message": "missing field favorite"} `і статусом` 400`
- Якщо з `body` все добре, викликає функцію` updateStatusContact (contactId, body)` (напиши її) для поновлення контакту в базі
- За результатом роботи функції повертає оновлений об'єкт контакту і статусом `200`. В іншому випадку, повертає json з ключем `" message ":" Not found "` і статусом `404`


Для роута `POST /api/contacts` внеси зміни: якщо поле `favorite` не вказали в `body`, то при збереженні в базу нового контакту, зроби поле `favorite` рівним за замовчуванням `false`

# Домашнє завдання 4

Створи гілку `04-auth` з гілки `master`.

Продовж створення REST API для роботи з колекцією контактів. Додай логіку аутентифікації / авторизації користувача через [JWT](https://jwt.io/).

## Крок 1

У коді створи схему і модель користувача для колекції `users`.

```js
{
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: String
}
```

Змініть схему контактів, щоб кожен користувач бачив тільки свої контакти. Для цього в схемі контактів додайте властивість

```js
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }
```
Примітка: `'user'` - назва колекції, у якій зберігаються користувачі

## Крок 2

### Регістрація

Створити ендпоінт [`/users/register`](#registration-request)

Зробити валідацію всіх обов'язкових полів (email і password). При помилці валідації повернути [Помилку валідації](#registration-validation-error).

У разі успішної валідації в моделі `User` створити користувача за даними, які пройшли валідацію. Для засолювання паролів використовуй [bcrypt](https://www.npmjs.com/package/bcrypt) або [bcryptjs](https://www.npmjs.com/package/bcryptjs)

- Якщо пошта вже використовується кимось іншим, повернути [Помилку Conflict](#registration-conflict-error).
- В іншому випадку повернути [Успішна відповідь](#registration-success-response).

#### Registration request

```shell
POST /users/register
Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}
```

#### Registration validation error

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Помилка від Joi або іншої бібліотеки валідації>
```

#### Registration conflict error

```shell
Status: 409 Conflict
Content-Type: application/json
ResponseBody: {
  "message": "Email in use"
}
```

#### Registration success response

```shell
Status: 201 Created
Content-Type: application/json
ResponseBody: {
  "user": {
    "email": "example@example.com",
    "subscription": "starter"
  }
}
```

### Логін

Створити ендпоінт [`/users/login`](#login-request)

В моделі `User` знайти користувача за `email`.

Зробити валідацію всіх обов'язкових полів (email і password). При помилці валідації повернути [Помилку валідації](#validation-error-login).

- В іншому випадку, порівняти пароль для знайденого користувача, якщо паролі збігаються створити токен, зберегти в поточному юзера і повернути [Успішна відповідь](#login-success-response).
- Якщо пароль або імейл невірний, повернути [Помилку Unauthorized](#login-auth-error).

#### Login request

```shell
GET /users/login
Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}
```

#### Login validation error

```shell
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Помилка від Joi або іншої бібліотеки валідації>
```

#### Login success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "token": "exampletoken",
  "user": {
    "email": "example@example.com",
    "subscription": "starter"
  }
}
```

#### Login auth error

```shell
Status: 401 Unauthorized
ResponseBody: {
  "message": "Email or password is wrong"
}
```

## Крок 3

### Перевірка токена

Створи мідлвар для перевірки токена і додай його до всіх раутів, які повинні бути захищені.

- Мідлвар бере токен з заголовків `Authorization`, перевіряє токен на валідність.
- У випадку помилки повернути [Помилку Unauthorized](#middleware-unauthorized-error).
- Якщо валідація пройшла успішно, отримати з токена `id` користувача. Знайти користувача в базі даних з цим `id`. 
- Якщо користувач існує і токен збігається з тим, що знаходиться в базі, записати його дані в `req.user` і викликати `next()`. 
- Якщо користувача з таким `id` НЕ існує або токени не збігаються, повернути [Помилку Unauthorized](#middleware-unauthorized-error)

#### Middleware unauthorized error

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

## Крок 4

### Логаут

Створити ендпоінт [`/users/logout`](#logout-request)

Додай в маршрут мідлвар перевірки токена.

- У моделі `User` знайти користувача за `_id`.
- Якщо користувача не існує повернути [Помилку Unauthorized](#logout-unauthorized-error).
- В іншому випадку, видалити токен у поточного юзера і повернути [Успішна відповідь](#logout-success-response).

#### Logout request

```shell
POST /users/logout
Authorization: "Bearer {{token}}"
```

#### Logout unauthorized error

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

#### Logout success response

```shell
Status: 204 No Content
```

## Крок 5

### Поточний користувач - отримати дані юзера по токені

Створити ендпоінт [`/users/current`](#current-user-request)

Додай в раут мідлвар перевірки токена.

- Якщо користувача не існує повернути [Помилку Unauthorized](#current-user-unauthorized-error)
- В іншому випадку повернути [Успішну відповідь](#current-user-success-response)

#### Current user request

```shell
GET /users/current
Authorization: "Bearer {{token}}"
```

#### Current user unauthorized error

```shell
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

#### Current user success response

```shell
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "email": "example@example.com",
  "subscription": "starter"
}
```

## Додаткове завдання - необов'язкове

- Зробити пагінацію для колекції контактів (GET /contacts?page=1&limit=20).
- Зробити фільтрацію контактів по полю обраного (GET /contacts?favorite=true)
- Оновлення підписки (`subscription`) користувача через ендпоінт` PATCH` `/users`. Підписка повинна мати одне з наступних значень `['starter', 'pro', 'business']`
