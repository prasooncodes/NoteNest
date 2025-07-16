const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  docId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  uid: {
    type: String
  },
  content: [
    {
      type: JSON
    }
  ],
  category: {
    type: String
  },
  tags: [
    {
      type: String
    }
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
  preview: {
    type: String
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
