import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ProductsModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
