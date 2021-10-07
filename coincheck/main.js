// const MongoBackend = require("./services/backend/MongoBackend");
// const RedisBackend = require("./services/backend/RedisBackend");
const MySQLBackend = require("./services/backend/MySQLBackend");

// // 🍃 MongoDB section
// async function runMongo() {
//   const mongoBackend = new MongoBackend();
//   return mongoBackend.max();
// }
// runMongo()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.error(err));

// // 🏩 Redis section
// async function runRedis() {
//   const redisBackend = new RedisBackend();
//   return redisBackend.max();
// };

// runRedis()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.error(err));


// 🌊 MySQL section
async function runMySQL() {
  const mySQLBackend = new MySQLBackend();
  return mySQLBackend.max();
}

runMySQL()
.then((result) => {
  console.log(result);
})
.catch((err) => console.error(err));