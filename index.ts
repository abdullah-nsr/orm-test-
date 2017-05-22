import express = require("express");
import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { Course } from "./entity/Course";
import { Student } from "./entity/Student"

let app = express();
let conn: Connection;

createConnection().then(connection => {
    conn = connection
  
    let c = new Course();
    c.name = "Course 1"
    c.start_date = new Date();

    let courserepo = connection.getRepository(Course);
    courserepo.persist(c);

    let s = new Student();
    s.firstname = "abdul";
    s.lastname = "nsr";
    s.start_date = new Date();
  
    let studentrepo = connection.getRepository(Student);
    studentrepo.persist(s);
    console.log("is done");

        app.get("/list", (req, res) => {
         conn.getRepository(Course).find().then(courses => { 
           res.send(JSON.stringify(courses));
          });   
     });
     app.get("/student", (req, res) => {
         conn.getRepository(Student).find().then(student => { 
           res.send(JSON.stringify(student));
          });   
     });    
}).catch(error => console.log(error));

app.listen(3000);