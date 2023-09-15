import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { DataSource } from "typeorm";
import { Users } from "./Entities/Users";

const main = async () => {
  const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: "graphqlcrud",
    username: "graphql",
    password: "password",
    logging: true,
    synchronize: true,
    entities: [Users],
  });

  AppDataSource.initialize()
    .then(() => {
      console.log("DB Iniciado.");
    })
    .catch((err) => {
      console.error("Erro na inicialização do DB", err);
    });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("Server Running");
  });
};

main().catch((err) => {
  console.log(err);
});
