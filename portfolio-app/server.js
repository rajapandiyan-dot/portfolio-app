const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "data", "inquiries.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Ensure the inquiries.json file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, "[]", "utf-8");
}

// GET all saved inquiries (useful to check submissions came through)
app.get("/api/inquiries", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  res.json(data);
});

// POST a new inquiry from the "Work with me" form
app.post("/api/inquiry", (req, res) => {
  const { name, contact, workType, details } = req.body;

  if (!name || !contact || !workType) {
    return res.status(400).json({ ok: false, message: "Name, contact and work type are required." });
  }

  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

  const newInquiry = {
    id: Date.now(),
    name,
    contact,
    workType,
    details: details || "",
    receivedAt: new Date().toISOString(),
  };

  data.unshift(newInquiry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");

  res.json({ ok: true, message: "Inquiry saved!", inquiry: newInquiry });
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
