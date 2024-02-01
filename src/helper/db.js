import mongoose from "mongoose"
export const connectdb =async()=>{
    try{
        const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"work_manager",
        
        });
        console.log("Connected....");
        // console.log(connection);
        console.log("connected with host", connection.host);
    }catch(error){
        consolelog("failed to connect");
        console.log(error);
    }
}