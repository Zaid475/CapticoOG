import Course from "../models/course.js"

export const Create=async(req,res)=>{
    try{
    const{name,content,instructor,userid}=req.body.course;
    console.log(name,content,instructor,userid,"coursedata");
    const createcourse=new Course({
        name: name,
        content:content,
        instructor:instructor,
        userid:userid


    }) 
    console.log(createcourse)

    const saved=await createcourse.save();
    if(!saved){
        return res.json({
            message:"failed",
            success:false
        })
    }
     return res.json({
        message:"Course created",
        success:true
    })



    
    }

    catch(error){
        return res.send(error)
}

}


export const Fetchcourses=async(req,res)=>{
    try{
        const{userid}=req.body
        console.log(userid,"userid")

        const idexist=await Course.find({userid:userid})
        if(idexist){
            
            console.log(idexist,"abc")
        }
        return res.json({
            success:true,
            message:"Data fetching success",
            idexist
            

        })
        

    }
    catch(error){
        return res.send(error)
}

}


export const Singlecourse=async(req,res)=>{
    try{
        const{id}=req.params
        console.log("params",id)
        if(!id){
            return res.json({message:"course missing",success:false})
        }

        const coursedata=await Course.findById(id)
        if(!coursedata){
        return res.json({
            success:false,
            message:"course not found"
        })
    }
    

        return res.json({
            success:true,
            coursedata
        })
    }
    
    catch(error){
        return res.json({
            message:"oops something went wrong",
            success:false
        })
        

    }
}




export const Delete=async(req,res)=>{
    try{
        const{id}=req.body
        console.log("deleted id is",id)

        const idexist=await Course.deleteOne({_id:id})
        
          
        return res.json({
            success:true,
            message:"Course deleted"
        })
        
        
       
       
    

       
    }
    
    catch(error){
        return res.json({
            message:"oops something went wrong",
            success:false
        })
        

    }
}