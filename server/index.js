
const server = require("./src/server");
const { conn } = require('./src/db');
const PORT = 3005;



server.listen(PORT, () => {
  conn.sync({force: true})
  console.log(`Server listening on port ${PORT}`);
})


//conn.sync({ force: true }).then(() => {
//server.listen(PORT, () => {
//  console.log(`Server listening on port ${PORT}`);
//})
//}).catch(error => console.error(error))
