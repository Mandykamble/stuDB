
const Student=require("../Models/student.js");


exports.postStudent = async(req,res,next) =>{
    // console.log(req.body);

    try {
        const newStudent= new Student(req.body);

        await newStudent.save();

        var date1 = new Date(req.body.Startdate); 
        var date2 = new Date(req.body.Enddate); 
        var timeDiff = Math.abs(date2 - date1); 
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        
        // console.log(diffDays);
        var weeks =Math.round(diffDays/7);
        var hours =diffDays*24;
        var miniutes =hours*60;
        var seconds =miniutes*60;

        console.log(`Dear ${req.body.Sname} you will require ${diffDays} days, ${weeks} weeks,${hours} hours,${miniutes} miniutes, ${seconds} seconds to complete the cource`);

        res.status(200).json(newStudent);




    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};



exports.getStudent = async(req,res,next) =>{
    

    try {
      const Students= await Student.find();
      res.status(200).json(Students);


    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};