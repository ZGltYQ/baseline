# Умение отладить запрос от клиента к серверу.
## 1. Из консоли просмотреть текущие сетевые настройки
### 1.1. ip-address компьютера
![Screenshot from 2021-09-16 14-52-39](https://user-images.githubusercontent.com/47303106/133617437-0002fc27-74c2-4049-9496-b1035786daa8.png)
### 1.2. DNS сервер, который используется

```dig <domain>```- for ipv4
```dig <domain> AAAA```- for ipv6

![Screenshot from 2021-09-16 14-54-41](https://user-images.githubusercontent.com/47303106/133617502-16e69c25-eaaa-43e8-99ce-a368dcd02b17.png)
### 1.3. Default gateway
![Screenshot from 2021-09-16 16-26-54](https://user-images.githubusercontent.com/47303106/133620599-dc3fbe3d-c372-41b0-a140-6e1247fe6c49.png)

## 2. Посмотреть доступен ли сервер
### 2.1. При помощи утилиты dig посмотреть, куда указывает A  запись DNS сервера для домена google.com
![Screenshot from 2021-09-16 14-58-33](https://user-images.githubusercontent.com/47303106/133618335-3d21b37b-b8a2-4eea-a841-4ab4c53dfcd8.png)
### 2.2. При помощи утилиты dig посмотреть посмотреть куда указывает AAAA запись DNS сервера для домена google.com.
![Screenshot from 2021-09-16 14-59-39](https://user-images.githubusercontent.com/47303106/133618398-33707e75-016b-4e86-9aae-2dc185d8f256.png)
### 2.3. Пропинговать сервер по ipv4, ipv6
![Снимок экрана_2021-09-17_10-52-23](https://user-images.githubusercontent.com/47303106/133745904-933ec782-c1a2-4075-8467-538ec322fb4e.png)

### 2.4. Просканировать открытые порты на сервере при помощи утилиты nmap
![Screenshot from 2021-09-16 15-44-26](https://user-images.githubusercontent.com/47303106/133618530-94965e9a-d316-401b-991b-2d17a2769b60.png)

## 3. Проверить доступность самого веб-сайта
### 3.1. Попробовать запросить страницу http://google.com при помощи curl
![Screenshot from 2021-09-16 15-45-58](https://user-images.githubusercontent.com/47303106/133618603-a74716ae-b727-471c-b339-9c4f9b55128f.png)
### 3.2. При помощи curl посмотреть куда указывает http редирект при заходе на http://google.com
![Screenshot from 2021-09-16 15-49-46](https://user-images.githubusercontent.com/47303106/133618696-15a94502-86d5-4085-9c24-5dd2164bf22d.png)

# Умение настроить доступ к серверу

## 1. Сгенерировать пару SSH ключей в отдельной директории на локальном компьютере (не в .ssh)
![Снимок экрана_2021-09-17_10-52-23](https://user-images.githubusercontent.com/47303106/133746341-0566a177-c5f5-4c39-a502-76a5d96b6de1.png)
![Снимок экрана_2021-09-17_10-56-00](https://user-images.githubusercontent.com/47303106/133746360-fbb50c12-1bfe-409e-afa4-5daec142cf55.png)
## 2. Запустить ubuntu server через multipass - https://multipass.run/ 

![multipass_launch](https://user-images.githubusercontent.com/47303106/133749443-290404af-c66b-43dc-a97a-db7af559cc5b.png)
![multipass_shell](https://user-images.githubusercontent.com/47303106/133749457-065af52e-1466-4d12-90fb-b6837a869bd8.png)

## 3. Добавить публичный ключ на сервер для доступа по SSH

![ssh_key](https://user-images.githubusercontent.com/47303106/133761709-cd85c95f-e0fc-4d54-beda-e5cbfe7497a7.png)

## 4. Войти на сервер по ip-адресу, используя ключ для аутентификации 
![auth](https://user-images.githubusercontent.com/47303106/133761759-3a46ed1b-6fd0-4020-a27f-bcfeb9599463.png)

# Шифрование/кодирование/хеширование. В чем разница?
## 1. Без применения внешних библиотек написать парсер JWT (без проверки подписи). В браузере и NodeJS уже есть функции для работы с base64, их можно использовать.
Задание лежит в ```jwt_parser```. 

Что бы распарсить токен нужно вставить его в параметр GET запроса.
Пример: ```http://localhost:8080?jwt=<token>```

## 2. Закодировать, а затем раскодировать строку “Hello World” при помощи CLI утилиты base64
![base64](https://user-images.githubusercontent.com/47303106/133763041-0b5febb2-897d-4972-8a3b-9f64661a4215.png)

## 3. Посмотреть внутрь пейлоада JWT при помощи CLI утилиты base64.
![jwt_cli](https://user-images.githubusercontent.com/47303106/133763713-07269ad7-c322-4555-97b0-b5f6fe28ef90.png)

## 4. Посчитать хеш сумму любого файла при помощи утилиты md5sum
![md5](https://user-images.githubusercontent.com/47303106/133763999-7532c8c9-77f9-453c-96d9-65313fe2ff1c.png)

# Умение использовать Промисы

## 1. Написать функцию sleep. Использоваться будет так “await sleep(ms)”, основной поток не блокирует.

Задание лежит в ```sleep```;

# Умение анализировать алгоритмическую сложность своего кода

## 1. Посмотреть доклад Вовы Агафонкина про алгоритмическую сложность - https://www.youtube.com/watch?v=TesnXS0HeDw 

![vova](https://user-images.githubusercontent.com/47303106/134315558-a3b2a402-9ecf-4bdf-861c-07a30be9a33b.png)

## 2.  есть массив messages на 2000 сообщения и есть массив users на 100 пользователей. В каждом сообщение есть userId. Задача вернуть список сообщений, но в каждое сообщение добавить еще имя юзера.

Задание лежит в ```algorithms_baseline/prepareMessages```;

## 3. Реализовать бинарный поиск и замерить производительность (результаты замера тоже закоммитить в репозиторий)

Задание лежит в ```algorithms_baseline/binarySearch```;

Результаты замеров:
![bns](https://user-images.githubusercontent.com/47303106/134316216-54493b75-2b33-49fa-9bfd-2a1417e16b83.png)

## 4. Реализовать самостоятельно хеш-таблицу. Эта задача дополняет раздел про хеширование/шифрование/кодирование.  По сути нужно написать простейшую хеш-функцию (не использовать готовые) и сделать класс по типу Map (ключ только строковый). Важно учесть возможность коллизий. Простейшая хеш-функция будет выглядеть так - суммируем коды символов и берем остаток от деления на длину массива. 

Задание лежит в ```algorithms_baseline/hashTable```;

# Понимание работы операционной системы и докера

## 1. Установить docker
![docker](https://user-images.githubusercontent.com/47303106/133974201-aeea5847-11a3-4f23-989e-5d5f818e9b75.png)

## 2. Запустить контейнер ubuntu:latest 
![ubuntu_bash](https://user-images.githubusercontent.com/47303106/133974316-79f2645e-2399-45d9-a9e7-d28cbfa54a11.png)

## 3. Внутри контейнера установить htop
![htop](https://user-images.githubusercontent.com/47303106/133974460-a78db60c-cb6b-48aa-bf54-935af581071d.png)

## 4. Запустить htop и посмотреть на список процессов
![htop_run](https://user-images.githubusercontent.com/47303106/133974632-bd450660-14d9-473d-b5f1-75e670847fc4.png)


# Работа с базами данных

## 1. Запустить mysql и adminer через docker (ниже готовый docker-compose). Все дальнейшие задачи можно сделать через веб-интерфейс adminer
![adminer](https://user-images.githubusercontent.com/47303106/133977353-77a3226c-c328-404e-a730-8f3b328f6da5.png)

## 2. Создать базу данных с одной таблицей products на 3 колонки: id (autoincrement) , name, description.
![products](https://user-images.githubusercontent.com/47303106/133977933-729151c4-f262-426c-87ae-d438727670a7.png)

## 3. Импортировать файл на 1000 записей со случайными данными (1k_records.sql,  https://drive.google.com/file/d/1P-TWW_2_L4lLYttjoftl8I9BwOXjb-ES/view?usp=sharing ). 

![1k_in_db](https://user-images.githubusercontent.com/47303106/133980534-6a91699e-0097-46de-b010-8d52c55c20b0.png)

## 4. Выполнить запрос, который находит продукты с названием “Incredible Fresh Hat Awesome Concrete Shirt”. Записать время выполнения запроса.
![select](https://user-images.githubusercontent.com/47303106/133981003-ccf80928-eef8-4f31-8879-4ab3b9c73154.png)

## 5. Импортировать файл на 10 млн записей (10mln_records.sql https://drive.google.com/file/d/11A8ZBTupBwa0ISxqSlIZaMoJJt3FTwle/view?usp=sharing ). Импорт файла занимает 20-60 минут

![count](https://user-images.githubusercontent.com/47303106/133988907-8912842b-e7f3-408c-a337-a1593ff94432.png)

## 6. Повторить запрос на получение продуктов с name равным “Incredible Fresh Hat Awesome Concrete Shirt”. Записать время выполнения. 

![name](https://user-images.githubusercontent.com/47303106/133989138-0493b447-6c53-480c-895f-cc4cd8221a24.png)

## 7. Добавить индекс по полю name
![index](https://user-images.githubusercontent.com/47303106/133990861-13fb176d-a973-44b0-9eee-42b5ef281d1a.png)

## 8. Повторить запрос на получение продуктов с name равным “Incredible Fresh Hat Awesome Concrete Shirt”. Записать время выполнения. Сравнить время выполнения с этим же запросом, но до добавления индекса. Во сколько раз разница?
![name_with_index](https://user-images.githubusercontent.com/47303106/133991176-06031e3e-57a1-4c08-9ec0-422437ac25d5.png)

Скорость увеличилась в 10000 раз

## 9. Посчитать количество продуктов у которых названии начинается на “Handmade Soft Keyboard”. Записать время выполнения запроса

![like](https://user-images.githubusercontent.com/47303106/133991885-52740820-0af0-4e63-bf7d-af397b72c24a.png)

## 10. Посчитать количество продуктов у которых в названии есть фраза “Soft Keyboard Generic”. Записать время выполнения запроса. Посчитать во сколько раз он медленнее, чем запрос с предыдущего пункта.  Почему этот запрос работает медленно, если есть индекс? Как сделать запрос быстрым?

![count-like](https://user-images.githubusercontent.com/47303106/133993629-6927ef47-3037-4aea-b10d-b48278a7a33d.png)
***
Запрос работает медленно потому что отсутствует инвертированный индекс.
С индексом FULLTEXT:
![fulltext](https://user-images.githubusercontent.com/47303106/133997667-c7065683-75d4-4b87-ab19-05dfe7bf8086.png)

# Знание про основные уязвимости и методы защиты

## 1. Сделать HTML страницу для демонстрации XSS. Вначале файла определяем переменную COMMENT со зловредным комментарием, который показывает алерт. Затем отображаем содержимое переменной в 3-х блоках
Блок 1: уязвимый рендеринг

Блок 2: защищенный рендеринг

Блок 3: защищенный рендеринг, но с поддержкой форматирования (теги “b”, “i”, “img”)

Задание лежит в ```xss_baseline```;

Команда для запуска: ```npm start```;

## 2. У нас есть запрос к базе “SELECT * FROM users WHERE email=${email} AND password=${password}”. Задача написать SQL инъекцию, которая позволит зайти под пользователем admin, не зная его пароля.

```
SELECT * FROM users WHERE login='admin' OR 1=1--' AND
password='admin'
```
## 3. Эксплуатация CSRF. Установить в куки переменную authenticated=1 для одного домена (например, mysite.localhost). Сделать html страницу, которую нужно открывать с другого домена (например,  attacker.localhost) и с этой страницы сделать сабмит html формы на mysite.localhost. Проверить отправляется ли в запросе со страницы attacker.localhost куки для домена mysite.localhost. Домены можно настроить в /etc/hosts

![hosts](https://user-images.githubusercontent.com/47303106/134318254-296d9ab4-c297-4722-bbec-60bd2fe2ee1e.png)

> Запускать лучше с firefox так как Chrome блочит куки.

Атакуемый сервер ```mysite.localhost```

Атакующий сервер ```attacker.localhost```

![myst](https://user-images.githubusercontent.com/47303106/134319236-072fdbff-1b30-4d08-882d-aea4ba100596.png)
![attack](https://user-images.githubusercontent.com/47303106/134319251-b6c0f11b-afbd-47c8-a5ac-7dff841a6f7c.png)
![cookie](https://user-images.githubusercontent.com/47303106/134319278-fb9eecbe-d94f-4d7b-b42c-f75c3436b04c.png)

# Web vitals (page speed insights)

## 1. Запустить анализ https://webbylab.com в Page Speed Insights (https://developers.google.com/speed/pagespeed/insights/) 
![webbylab](https://user-images.githubusercontent.com/47303106/134319564-3dad6ff6-a554-463d-ac3c-35520a007459.png)

## 2. Запустить анализ https://webbylab.com в Chrome Devtools Lighthouse

![lighthouse](https://user-images.githubusercontent.com/47303106/134319761-4b09f8ae-e4cc-4397-8628-88db7d8c1adf.png)

# Умение пользоваться профайлером

## 1. Подключись к своему проекту через chrome dev tools. Запусти JavaScript Profiler (отдельная вкладка, не Performance), сделай какое-то действие в приложении (или запрос к бекенду, если это бекенд) и найди самую длительную операцию при помощи профайлера. 
![performance](https://user-images.githubusercontent.com/47303106/134321024-495f77fb-18bd-4204-9490-d0b0125991ae.png)

## 2. Посмотри на вкладку memory, попробуй поиграться с разными опциями
![memory](https://user-images.githubusercontent.com/47303106/134320768-1e0833e7-48e4-40b0-8261-b98b8d9036e7.png)

# Архитектура стандартного веб-приложения

## 1. Нарисовать диаграмму solution архитектуры Twitter-like (микроблог на посты по 140 символов) приложения.  Инструмент для рисования и подход можно использовать любой. Мы обычно используем c4 containers diagram и plantuml расширение для рисования https://github.com/plantuml-stdlib/C4-PlantUML (есть и отличный plantuml плагин для vscode), но можно рисовать в чем нравится. Вот пример диаграммы контейнеров.

Код лежит в ```plantuml```

![test](https://user-images.githubusercontent.com/47303106/134321220-ebc1788f-9afc-4ead-9dfd-2c240ab0138d.png)

# Кэширование

## 1. Необходимо реализовать класс “DNSResolver”, который будет опционально принимать “cacheOptions” и использовать LRU cache replacement policy (взять готовую имплементацию LRU кэша на npm) для кэширования DNS запросов

Задание лежит в ```DNSResolver```;

# Базовые понятия для процесса разработки

## 1. Написать 5 примеров Functional и 5 примеров Non functional requirements для Twitter-like приложения.
 
  Functional requirements:
1. Database backup every week.
2. Authentication.
3. Historical Data.
4. Filtering incoming data.
5. Reporting Requirements

  Non-functional requirements:
1. Security
2. Usability
3. Scalability
4. Capacity
5. Availability 
