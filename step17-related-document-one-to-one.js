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

    const course1 = new Course({
      courseName: "Eng",
      noOfTopics: 23,
    });

    const courseSaveResult = await course1.save();

    const student1 = new Student({
      name: "askari abbas",
      age: 20,
    });

    const studentSaveResult = await student1.save();

    console.log("Course Save Result : ", courseSaveResult);

    console.log("Student Save Result : ", studentSaveResult);
  } catch (error) {
    console.log(error);
  }
})();
