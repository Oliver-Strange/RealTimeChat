const router = require("express").Router();

const Messages = require("./messages-model");
const restricted = require("../../auth/restrictedMiddleware");
const checkRole = require("../../auth/CheckRoleMiddleware");
