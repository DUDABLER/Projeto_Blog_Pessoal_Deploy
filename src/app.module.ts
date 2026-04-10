import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.modules';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ //ESTO FUE COPIADO DE SCRIPT QUE GEANDRO PASO
      type: 'mysql', // tipo de base de datos
      host: 'localhost', // banco de datos local
      port: 3306, // puerta de conexion a la base de datos
      username: 'root', // numbre de usuario para acceder a la base de datos
      password: '21081992', // contraseña de acceso a la base de datos
      database: 'db_blogpessoal', //nombre de la base de datos
      entities: [Postagem, Tema, Usuario], //entidades que se van a usar en la base de datos
      synchronize: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
