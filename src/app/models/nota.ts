import { Curso } from "./curso";
import { Alumno } from "./alumno";

export class Nota {
    id: number;
    curso: Curso;
    alumno: Alumno;
    nota1: number;
    nota2: number;
    nota3: number;
    promedio: number;

    constructor(
        id: number = 0,
        curso: Curso = new Curso(),
        alumno: Alumno = new Alumno(),
        nota1: number = 0,
        nota2: number = 0,
        nota3: number = 0
    ) {
        this.id = id;
        this.curso = curso;
        this.alumno = alumno;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.promedio = this.calcularPromedio();
    }

    private calcularPromedio(): number {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }
}


