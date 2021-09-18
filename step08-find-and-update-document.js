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
      name: String,
      age: Number,
    });

    //define a model - schema jo uper bnaya hai usse model bnega
    const student = mongoose.model("student", studentSchema);

    //find one se larhe hain phr update krrhe hain
    const result = await student.findOne({ name: "Abiha" });
    console.log(`Id: ${result._id} Name: ${result.name} , Age: ${result.age}`);

    //updated name
    result.name = "Abihawajahat";

    //saving updated
    const updatedData = await result.save();

    console.log("updated name : ", updatedData);
  } catch (error) {
    console.log(error);
  }
})();
