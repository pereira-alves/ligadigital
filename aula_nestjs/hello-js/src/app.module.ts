import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsuarioModule],
})
export class AppModule {}
