const mongoose = require("mongoose"),
  { Schema } = mongoose,
  contentSchema = new Schema({
    title: String,
    text: String,
    created: String,
    updated: String
  });

const Contents = mongoose.model("content", contentSchema);

export {
  Contents
}