const app = require("../src/app");
const bodyParser = require("body-parser");
const db = require("../src/models");
const port = normalizaPort(process.env.PORT || "3000");
function normalizaPort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
//Cors
const cors = require("cors");
let corsOption = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOption));
//db
db.sequelize.sync();

//Body Parser
app.use(bodyParser.json(0));
app.use(bodyParser.urlencoded({ extended: true }));

// CategoryRoute
let categoryRouter = require("../src/routes/CategoryRoute");
app.use("/categories", categoryRouter);

let userRouter = require("../src/routes/UserRoute");

app.listen(port, function () {
  console.log(`app listening on port ${port}`);
});
