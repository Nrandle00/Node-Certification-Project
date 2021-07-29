const DatabaseURL = "mongodb://localhost:27017/final-project";
const mongoose = require("mongoose");
mongoose.connect(DatabaseURL, { useNewURLParser: true, useUnifiedTopology: true });