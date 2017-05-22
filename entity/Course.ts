import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Student } from "./student";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length:20
    })
    name: string

    @Column()
    start_date: Date;
    
    @OneToMany(type => Student , student => student.course)
    students: Student[];
}