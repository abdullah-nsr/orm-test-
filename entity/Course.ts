import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Student } from "./student";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    start_date: Date;
    
    @OneToMany(type => Student , student => student.course)
    students: Student[];
}