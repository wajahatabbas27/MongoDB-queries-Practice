const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const studentSchema = new mongoose.Schema({
      name: String,
      age: Number,
    });
    const student = mongoose.model("student", studentSchema);

    const result = await student.replaceOne(
      { _id: "61436822d9f2ee8c8f4915e5" },
      { name: "AZSWAZ" }
    );

    console.log(`Result =  `, result);
  } catch (error) {
    console.log(error);
  }
})();
