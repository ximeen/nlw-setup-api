import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();
const PORT = 3333;

app.register(cors);
app.register(appRoutes);

app.listen({ port: PORT }, () => {
  console.log(`Server is running on port ${PORT}🚀`);
});
