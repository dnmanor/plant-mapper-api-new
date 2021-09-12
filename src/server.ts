const app = require("express")();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const uuid = require("uuid");

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(
    `Express started on PORT ${app.get("port")}; press Ctrl-C to terminate.`
  );
});
