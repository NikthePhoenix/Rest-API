export default {
  host: "localhost",
  user: "root",
  password: "", // this is not the password, actually put your password
  db: "testdb",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  rabbitMQ: {
    url: "amqp://localhost",
    exchangeName: "mailExchange",
  },

  mail: {
    user: 'stormerselite@gmail.com',
    pass: process.env.APP_PASS, 
    from: 'BookMyEvent <youremail@gmail.com>'
  },

};
