"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Athlete",
    embedded: false
  },
  {
    name: "HeadCoach",
    embedded: false
  },
  {
    name: "Coach",
    embedded: false
  },
  {
    name: "Parent",
    embedded: false
  },
  {
    name: "Team",
    embedded: false
  },
  {
    name: "SubTeam",
    embedded: false
  },
  {
    name: "TeamSchedule",
    embedded: false
  },
  {
    name: "AthleteSchedule",
    embedded: false
  },
  {
    name: "Workout",
    embedded: false
  },
  {
    name: "LogItem",
    embedded: false
  },
  {
    name: "Result",
    embedded: false
  },
  {
    name: "AthleteStats",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
