import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Course } from "./Course"
@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname:string;
    
    @Column()
    lastname: string;

    @Column()
    start_date: Date;

    @ManyToOne( type => Course, course => course.students )
    course: Course;
}