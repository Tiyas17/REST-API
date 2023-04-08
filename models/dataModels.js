const mongoose=require("mongoose");
const dataSchema=mongoose.Schema({
    title:{
        type: String,
        required:[true,"Please add the title of the book"],
    },
    author:{
        type:String,
        required:[true,"Name the Author"],
    },
    id:{
        type: String,
        required:[true,"Please add the book id"],
    },
},
{
    timestamps:true,
}
);

module.exports=mongoose.model("Data",dataSchema);