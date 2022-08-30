const mongoose = require("mongoose");


const ConversationSchema = new mongoose.Schema(
    {
  
    
    },
{ timestamps: true }

);
module.exports = mongoose.model("Conversation", ConversationSchema);