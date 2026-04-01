import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //ejecucion de la aplicacion nest, creaion de la aplicacion

process.env.TZ = '-03:00'; //configuracion el uso horario

app.useGlobalPipes(new ValidationPipe()); //metodo configuracion de validacion de los datos de entrada

app.enableCors(); //configuracion de cor para permitir requisiociones de otros origenes

  await app.listen(process.env.PORT ?? 4000); // ejecucion de aplicacion nest, configuracion de la puerta del servidor
}
bootstrap();
