import "dotenv/config";
import express, { Express, Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
import router from "./routes/users";
const app: Express = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/",router);
app.use("/documentation",swaggerUi.serve, swaggerUi.setup(swaggerSetup))

app.listen((PORT), () => {
    console.log(`Listo por la ruta http://localhost:${PORT}`)
})
