import mongoose from "mongoose"

const URI="mongodb+srv://gaston:TZCAPpxu5qfvdHYA@cluster0.68nenbr.mongodb.net/test?retryWrites=true&w=majority"

await mongoose.connect(URI,{
    serverSelectionTimeoutMS:5000,
})
console.log("Base de datos conectada....")


