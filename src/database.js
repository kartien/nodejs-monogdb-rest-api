import mongoose  from "mongoose";

(async () => {
    try{
        const db = await mongoose.connect('mongodb://localhost/tasksapi')
        console.log('Database connection established: ', db.connection.name);
    }catch (error){
        console.log(error);
    }
})();



