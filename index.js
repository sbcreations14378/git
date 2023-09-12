const express = require('express')
const mysql = require('mysql')

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodemysql"
})

db.connect( err => {
    if(err){
        console.log("Connection Error!");
        throw err;
    }
    console.log("Connection Established!")
})

const app =express();

app.get('/createdb', (req,res)=>{
    let sql="CREATE DATABASE if not exists nodemysql;"

    db.query(sql,(err)=>{
        if (err){
            console.log("Database Creation Error!")
            throw err
        }
        console.log("Database Created Successfully")
        res.send("Database Created Successfully")
    })
})

app.get('/createemptb',(req,res)=>{
    let sql = "CREATE TABLE employee(id int AUTO_INCREMENT, name varchar(255), designation varchar(255), PRIMARY KEY(id))";

    db.query(sql , err =>{
        if(err){
            console.log("Table Creation Error!");
            throw err
        }
        console.log("Employee Table Created")
        res.send("Employee Table Created")
    })
})


app.get('/employee',(req,res)=>{
    let sql = "SELECT * FROM employee";
    let query= db.query(sql,(err,results)=>{
        if(err){
            console.log("Data Fetching Error!")
            throw err
        }
        console.log(results)
        res.json({msg:"Employee Data Feteched",results})
    })
})


app.get('/emp1',(req,res)=>{
    let post ={name:"Sai Ajith Kumar",designation:"Freelancer"};
    let sql = "INSERT INTO employee SET ?"
    db.query(sql,post,err=>{
        if(err){
            console.log("Employee Data Insertion Error!");
            throw err
        }
        console.log("Employee Data Added")
        res.send("Employee Data Added")
    })
})

// disp=(req,res)=>{
//     let sql = "SELECT * FROM employee";
//     let query= db.query(sql,(err,results)=>{
//         if(err){
//             console.log("Data Fetching Error!")
//             throw err
//         }
//         console.log(results)
//         res.json({msg:"All Employee",results})
//     })

// }

app.get('/updateemp/:id',(req,res)=>{
    let newName= "Sai Ajith Kumar"
    let sql =`UPDATE employee SET name = '${newName}' WHERE id=${req.params.id}`
    let query =db.query(sql,err=>{
        if(err){
            console.log("Data Not Updated")
            throw err
        }
        console.log("Data Updated")
        res.write("Data Updated")
        // disp()
        // res.json(j)
        res.end()
    })
})

app.get('/delemp/:id',(req,res)=>{
    let sql=`DELETE FROM employee WHERE id='${req.params.id}'`
    let query=db.query(sql,err=>{
        if (err){
            console.log("Data Delete Error!")
            throw err
        }
        console.log("Data Deleted")
        res.send("Employee Data Deleted");
    })
})

app.listen(3000,'127.0.0.1',()=>{
    console.log("Server Running at portno:3000")
})
// 21815A4203