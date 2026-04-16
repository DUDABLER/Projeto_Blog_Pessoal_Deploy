import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({name: "tb_postagem"}) //crear una tabla llamada tb_postagem
export class Postagem {

    @ApiProperty()
    @PrimaryGeneratedColumn() // crea una llave primaria y auto increment
    id!: number;

    @ApiProperty()
    @IsNotEmpty() // verifica si el campo esta vacio
    @Column({length: 100, nullable: false}) // crea una columna llamada titulo, con longitud de 100 caracteres y no permite valores nulos 
    titulo!: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false}) // crea una columna llamada texto, con longitud de 1000 caracteres y no permite valores nulos
    texto!: string;

    @ApiProperty()
    @UpdateDateColumn()
    data!: Date;

    @ApiProperty()
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete : "CASCADE"
    })
    tema: Tema

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete : "CASCADE"
    })
    usuario: Usuario
    
}