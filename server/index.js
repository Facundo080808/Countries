
const server = require("./src/server");

const { countriesToDB } = require("./src/Controllers/countries.controllers");
const { conn } = require("./src/db");
const PORT = 3005;



//server.listen(PORT, async () => {
 // conn.sync({force: true})
 // await countriesToDB();
 // console.log(`Server listening on port ${PORT}`);
//})


conn.sync({ force: true }).then(() => {
server.listen(PORT, async() => {
  await countriesToDB();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
