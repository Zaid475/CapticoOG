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
            
            console.log(idexist[1],"abc")
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