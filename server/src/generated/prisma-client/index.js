"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "UserLevel",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "LogItem",
    embedded: false
  },
  {
    name: "UserClimbingStats",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Workout",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/sam_roehrich-ec0459/server/dev`
});
exports.prisma = new exports.Prisma();
