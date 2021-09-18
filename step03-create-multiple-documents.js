const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("mongoose open for business");

    //define a schema
    const studentSchema = new mongoose.Schema({
      name: { type: String, index: true },
      age: Number,
    });

    //define a model - schema jo uper bnaya hai usse model bnega
    const student = mongoose.model("student", studentSchema);

    //create an instance of model "student" , jo model ka bnaya hai hmne usko call krrhe hain yhn pe ;
    const student1 = new student({
      name: "Daniyal",
      age: 27,
    });

    const student2 = new student({
      name: "Anas",
      age: 22,
    });

    const student3 = new student({
      name: "ali",
      age: 20,
    });

    //save the new model instance-student1 to db - mongodb
    const result = await student.insertMany([student1, student2, student3]);

    console.log("Result = " + result);
  } catch (error) {
    console.log(error);
  }
})();
