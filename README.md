# <img src="./img/database.png" width="20" height="25"> SQL and NoSQL databases 

## <img src="./img/Mongo.jfif" height="22"> [MongoDB](https://www.mongodb.com/)


<img src="./img/Node.png" height="15"> developers often consider `MongoDB` to be the main choice when building a data-driven application. However, many alternatives may provide better solutions.

This repository was built with the intention of exploring various database options to connect to Node.js backend such as:

1. MongoDB  (Users management, Data Seeding, Schema Generation) `dockerDefaultPort: 27017`
2. Redis    (Session management, Set up Items services and basket services)`dockerDefaultPort: 6379`  
3. MySQL.   (Orders management, check-out services and review database relational links) `dockerDefaultPort: 3306`

CRUD operations was built by using JS classes and instances. 

Databases installed by pulling docker image from <img src="./img/docker.png" height="28"> hub 

###  <img src="./img/Mongoose.png" height="24"> [Mongoose](https://mongoosejs.com/) 
A schema-based solution to modeling application data in MongoDB. It includes built-in type casting, validation, query building...  designed to work in an `asynchronous` environment. 
Mongoose belongs to "**Object Document Mapper (ODM)**" category of the tech stack, while `Sequelize` can be primarily classified under "**Object Relational Mapper (ORM)**".

## <img src="./img/Redis.jpg" height="22"> [Redis](https://redis.io/)

An important subset of NoSQL databases are key value stores. While key value stores are very limited, they're also very powerful and fast. `Redis` basically stores the data in memory which makes it blazingly fast but also, the data might get lost, if you kill the `Redis` process. 
Redis is often used as a cache. It can also be used as a storage when the consistency requirements are not high.

### [ioRedis](https://www.npmjs.com/package/ioredis)
A robust, performance-focused and full-featured Redis client for Node.js.
Unlike NodeRedis, ioRedis supports `promises`

### [connect-Redis](https://www.npmjs.com/package/connect-redis)
It provides Redis session storage for Express.

#### Redis methods (commands) are referred to the comprehensive doc at: [Redis Commands](https://redis.io/commands)


## <img src="./img/MySQL.jfif" height="26"> [MySQL](https://www.mysql.com/)
When to use relational databases:
* When there are multiple different entities that are in some way, related.
* When the database needs to stay in a consistent state.
* When the database should also enforce this consistency no matter from which application it is accessed. 

Example in this app: `Basket ↔ Order  ↔ OrderItems`

Unlike Redis and MongoDB, relational databases like MySQL rely on static table structures so-called 'schemas' to be defined directly inside the database.

###  <img src="./img/sequelize.png" height="24"> [Sequelize](https://sequelize.org/)
 A promise-based ORM for Node.js and io.js. It supports `PostgreSQL`, `MySQL`, `MariaDB`, `SQLite` and `MSSQL`

### Reverse Engineering in MySQL
A powerful tool helps create a visual representation of relationship between different tables. With MySQL Workbench, you can reverse-engineer a database using a MySQL create script or you can connect to a live MySQL server and import a single database or a number of databases.

### SQL Transaction: a single unit of work applied to a  relational database

* It is a `sequence of ordered operations` performed on the database.
* SQL statements are used to execute tasks such as update data or get data from a database.
* The SQL statements of a transaction will either `Commit` or `Rollback` using a rollback statement.
* The transaction comprises of two results, they are either `success` or `failure`.