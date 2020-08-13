import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/screenmint', { useNewUrlParser: true }),
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'generated/schema.gql',
      installSubscriptionHandlers: true,
      sortSchema: true,
      playground: true,
      debug: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
