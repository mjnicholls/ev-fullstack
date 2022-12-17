const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    company: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
