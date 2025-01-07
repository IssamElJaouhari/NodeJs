const fs = require("fs")

fs.writeFile('welcome.txt','Data is here 😎!',(err)=>{
    if (err) throw err
    console.log("file written successfully!");
})


fs.readFile('welcome.txt','utf-8',(error, data)=>{
    if (error) throw error
    console.log(data);
    // console.log(data.toString());
})