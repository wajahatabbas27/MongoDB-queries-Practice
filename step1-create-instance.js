const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  try {
    //1-connect to database
    //2-define schema
    //3-define model
    //4-define instance
    //5-save instance

    await mongoose.connect(
      "mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("mongoose open for business");

    //define a schema
    const studentSchema = new mongoose.Schema({
      name: String,
      age: Number,
    });

    //define a model - schema jo uper bnaya hai usse model bnega
    const student = mongoose.model("student", studentSchema);

    //create an instance of model "student" , jo model ka bnaya hai hmne usko call krrhe hain yhn pe ;
    const student1 = new student({
      name: "Abiha",
      age: 19,
    });

    //save the new model instance-student1 to db - mongodb
    const result = await student1.save();
    console.log("Result = " + result);
  } catch (error) {
    console.log(error);
  }
})();
