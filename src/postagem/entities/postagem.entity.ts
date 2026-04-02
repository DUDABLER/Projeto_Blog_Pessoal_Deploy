import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';

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

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete : "CASCADE"
    })
    tema: Tema
}