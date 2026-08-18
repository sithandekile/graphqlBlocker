import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");

    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });

    await apolloServer.start();

    app.use(
      "/graphql",
      expressMiddleware(apolloServer)
    );

    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
      console.log("GraphQL running on http://localhost:5000/graphql");
    });

  } catch (error) {
    console.error("Server error:", error);
  }
};

startServer();