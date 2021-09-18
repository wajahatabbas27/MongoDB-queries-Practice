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

    //save the new model
    const result = await student.findOne({ name: "Abiha" });

    //for each lgaya hai take sare iterate hojaein
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
