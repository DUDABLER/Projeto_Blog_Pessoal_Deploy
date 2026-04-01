import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: "tb_postagem"}) //crear una tabla llamada tb_postagem
export class Postagem {

    @PrimaryGeneratedColumn() // crea una llave primaria y auto increment
    id!: number;

    @IsNotEmpty() // verifica si el campo esta vacio
    @Column({length: 100, nullable: false}) // crea una columna llamada titulo, con longitud de 100 caracteres y no permite valores nulos 
    titulo!: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false}) // crea una columna llamada texto, con longitud de 1000 caracteres y no permite valores nulos
    texto!: string;

    @UpdateDateColumn()
    data!: Date;
}