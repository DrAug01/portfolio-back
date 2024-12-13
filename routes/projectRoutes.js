const express = require("express");
const router = express.Router();
const { getProjects, createProject } = require("../controllers/projectController");

// CRUD endpoints
router.get("/", getProjects); // Get all projects
router.post("/", createProject); // Create a new project

module.exports = router;
