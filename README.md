# <img src="./img/database.png" width="20" height="25"> SQL and NoSQL databases 

## <img src="./img/Mongo.jfif" height="22"> [MongoDB](https://www.mongodb.com/)


<img src="./img/Node.png" height="15"> developers often consider `MongoDB` to be the main choice when building a data-driven application. However, many alternatives may provide better solutions.

This repository was built with the intention of exploring various database options to connect to Node.js backend such as:

1. MongoDB  (Users management, Data Seeding, Schema Generation) `dockerDefaultPort: 27017`
2. Redis    (Session management, Set up Items services and basket services)`dockerDefaultPort: 6379`  
3. MySQL.   (Orders management, check-out services and review database relational links) `dockerDefaultPort: 3306`

CRUD operations was built by using JS classes and instances. 

Databases installed by pulling docker image from <img src="./img/docker.png" height="18"> hub 

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