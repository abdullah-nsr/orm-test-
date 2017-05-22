import express = require("express");
import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { Course } from "./entity/Course";

let app = express();
let conn: Connection;

createConnection().then(connection => {
    conn = connection
    let c = new Course();
    c.name = "Course 1"
    c.start_date = new Date();

    let repo = connection.getRepository(Course);
    repo.persist(c);

        app.get("/list", (req, res) => {
         conn.getRepository(Course).find().then(courses => { 
           res.send(JSON.stringify(courses));
          });   
     });
});

app.listen(3000);