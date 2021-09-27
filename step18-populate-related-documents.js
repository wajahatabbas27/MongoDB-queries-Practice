const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongoose open for business");

    //define schema for student
    const studentSchema = new mongoose.Schema({
      name: String,
      age: Number,
      course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    });

    //schema for course
    const courseSchema = new mongoose.Schema({
      courseName: String,
      noOfTopics: Number,
    });

    //creating model
    const Student = mongoose.model("Student", studentSchema);
    const Course = mongoose.model("Course", courseSchema);

    //finding student and populating course to him
    const student1 = await Student.find({
      _id: "614368a1a469785d19903d96",
    }).populate("course");

    console.log("Result: ", student1);

    console.log();
  } catch (error) {
    console.log(error);
  }
})();
