const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoose open for business");

    //schema
    const studentSchema = new mongoose.Schema({
      name: String,
      age: Number,
    });

    const student = mongoose.model("student", studentSchema);

    const result = await student.findByIdAndDelete("6143694278c6a92f697da4dd");

    console.log("Result =", result);
  } catch (error) {
    console.log(error);
  }
})();
