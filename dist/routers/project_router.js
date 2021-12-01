"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectController_1 = require("../controllers/projectController");
const express_1 = require("express");
const Auth_1 = require("../authentication/Auth");
const router = (0, express_1.Router)();
router.post("/invite", Auth_1.authorization, projectController_1.createInvite);
router.post("/create", Auth_1.authorization, projectController_1.createProject);
router.put("/updateproject/:projectId", Auth_1.authorization, projectController_1.updateProject);
router.get("/getproject", Auth_1.authorization, projectController_1.getAllProject);
router.get("/validCollaborators/:projectId", Auth_1.authorization, projectController_1.getValidCollaborators);
exports.default = router;