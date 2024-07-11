const fs = require('fs');
const path = require('path');

//The CRUD object
const crud = {};

//The base directory
crud.baseDir = path.join(__dirname,'./database');

//Create function
crud.create = (file,data) => {
    fs.open(`${crud.baseDir}/${file}.json`,'wx',(err,identifier)=>{
        if(!err && identifier){
            let jsonArray = [];

            jsonArray.push(data);

            let stringData = JSON.stringify(jsonArray,null,3);
            
            fs.writeFile(identifier,stringData,(err)=>{
                if(!err){
                    fs.close(identifier,(err) =>{
                        if(!err) console.log('no errors');
                        else console.log(err);
                    })
                } else console.log(err);
            })
        }
        else console.log(err);
        });
};

crud.create('crypto-data2',{'name': 'innoson','price':'$4000'});
//Then Obviously(in your console)
node crud