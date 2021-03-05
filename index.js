const app = require('/app')
let PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log("....PORT LISTENING ON ",PORT);
});
