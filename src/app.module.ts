import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { DatabaseModule } from './database.module';
import { itemsProviders } from './items/items.providers';

@Module({
  imports: [ItemsModule, DatabaseModule],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService, ...itemsProviders],
})
export class AppModule {}
