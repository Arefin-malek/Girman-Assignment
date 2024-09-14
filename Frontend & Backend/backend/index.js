const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 8090;
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// Path to mock data file
const mockDataPath = path.join(__dirname, "MOCK_DATA.json");

let users = [];

// Read mock data asynchronously
fs.readFile(mockDataPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading mock data file:", err);
    return;
  }
  try {
    users = JSON.parse(data);
  } catch (parseError) {
    console.error("Error parsing mock data file:", parseError);
  }
});
app.get("/api/users/search", (req, res) => {
  const { first_name, last_name } = req.query;
  if (!first_name && !last_name) {
    return res.status(400).json({
      error: "Please provide either first_name or last_name query parameter.",
    });
  }

  const filteredUsers = users.filter(
    (user) =>
      (first_name &&
        user.first_name.toLowerCase() === first_name.toLowerCase()) ||
      (last_name && user.last_name.toLowerCase() === last_name.toLowerCase())
  );

  res.json(filteredUsers);
});
// Route to get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
